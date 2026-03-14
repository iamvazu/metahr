import { useState, useEffect } from 'react';
import axios from 'axios';
import * as pdfjs from 'pdfjs-dist';

// Configure PDF.js worker - Use jsDelivr MJS for best compatibility with React 19/Vite
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

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

const WP_API_BASE = 'https://metahr.co.in/wp-json/ee-in/v1';

export function useEeInChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<AnalysisData | null>(null);
  const [sessionId, setSessionId] = useState<string>('');
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    let storedId = localStorage.getItem('eein_session_id');
    if (!storedId) {
      storedId = `sn_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('eein_session_id', storedId);
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

      let aiText = "I'm sorry, I encountered an unexpected response format.";
      if (response.data && response.data.content && Array.isArray(response.data.content) && response.data.content.length > 0) {
        const firstContent = response.data.content[0];
        if (typeof firstContent === 'object' && firstContent !== null && 'text' in firstContent) {
          aiText = (firstContent as { text: string }).text;
        }
      } else if (response.data && response.data.message) {
        aiText = response.data.message;
      }

      const aiMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        role: 'assistant', 
        content: aiText
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error: any) {
      console.error('Chat Error Details:', error.response?.data || error);
      const serverMsg = error.response?.data?.message || "I apologize, but I'm unable to connect to the brain right now. The server might be blocking the connection.";
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'assistant',
        content: serverMsg
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleFileUpload = async (file: File, type: string) => {
    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: `[Uploaded ${type} Report: ${file.name}]` };
    setMessages(prev => [...prev, userMsg]);
    
    setIsTyping(true);
    setIsAnalyzing(true);
    setUploadProgress(10);

    try {
      let content = '';
      
      if (file.type === 'application/pdf') {
        setUploadProgress(30);
        content = await extractTextFromPDF(file);
        
        if (!content.trim()) {
           throw new Error("This PDF appears to be a scan or image. Ee-in needs a text-searchable PDF or a direct photo/screenshot of the report.");
        }
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
      
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'assistant',
        content: `I've finished analyzing your ${type} report. You'll find my "Prescription" in the analysis workspace below.`
      }]);

    } catch (error: any) {
      console.error('File Processing Error Details:', error.response?.data || error);
      const errorMsg = error.response?.data?.message || error.message || "An unknown error occurred during synthesis.";
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'assistant',
        content: `Synthesis Interrupted: ${errorMsg}`
      }]);
    } finally {
      setIsTyping(false);
      setIsAnalyzing(false);
      setUploadProgress(0);
    }
  };

  const extractTextFromPDF = async (file: File): Promise<string> => {
    try {
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
    } catch (e) {
      console.error("PDF Parsing failed:", e);
      return "";
    }
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
    isAnalyzing,
    analysis,
    handleFileUpload,
    uploadProgress,
    sessionId
  };
}
