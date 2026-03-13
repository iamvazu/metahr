import { useState, useEffect } from 'react';
import axios from 'axios';
import * as pdfjs from 'pdfjs-dist';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface AnalysisData {
  prescription: string;
  strength_zone: string;
  watch_out_zone: string;
  next_actions: string[];
  coaching_question: string;
}

const WP_API_BASE = 'https://metahr.co.in/wp-json/ee-an/v1';

export function useEeAnChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [analysis, setAnalysis] = useState<AnalysisData | null>(null);
  const [sessionId, setSessionId] = useState<string>('');
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    let storedId = localStorage.getItem('eean_session_id');
    if (!storedId) {
      storedId = `sn_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('eean_session_id', storedId);
    }
    setSessionId(storedId);
  }, []);

  const sendMessage = async (content: string) => {
    if (!content.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), role: 'user', content };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    try {
      const response = await axios.post(`${WP_API_BASE}/chat`, {
        messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content })),
        sessionId
      });

      const aiMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        role: 'assistant', 
        content: response.data.content[0].text 
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error('Chat Error:', error);
    } finally {
      setIsTyping(false);
    }
  };

  const handleFileUpload = async (file: File, type: string) => {
    setIsTyping(true);
    setUploadProgress(10);

    try {
      let content = '';
      
      if (file.type === 'application/pdf') {
        setUploadProgress(30);
        content = await extractTextFromPDF(file);
      } else if (file.type.startsWith('image/')) {
        setUploadProgress(30);
        content = await fileToBase64(file);
      }

      setUploadProgress(60);
      
      const response = await axios.post(`${WP_API_BASE}/analyze`, {
        content,
        fileType: file.type,
        reportType: type,
        sessionId
      });

      setUploadProgress(90);
      setAnalysis(response.data.data);
      
      // Add a system-like message to the chat
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'assistant',
        content: `I've finished analyzing your ${type} report. You'll find my "Prescription" in the analysis workspace.`
      }]);

    } catch (error) {
      console.error('File Processing Error:', error);
    } finally {
      setIsTyping(false);
      setUploadProgress(0);
    }
  };

  const extractTextFromPDF = async (file: File): Promise<string> => {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
    let fullText = '';
    
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = (textContent.items as any[])
        .map(item => (item.str || ''))
        .join(' ');
      fullText += pageText + '\n';
    }
    
    return fullText;
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  return {
    messages,
    sendMessage,
    isTyping,
    analysis,
    handleFileUpload,
    uploadProgress,
    sessionId
  };
}
