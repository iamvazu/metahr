import { useState, useEffect } from 'react';
import axios from 'axios';

// Change this to your WordPress REST API URL
const WP_API_URL = 'https://metahr.co.in/wp-json/wp/v2/projects';

export interface Project {
    id: number;
    title: { rendered: string };
    excerpt: { rendered: string };
    featured_image_url: string;
}

export const useProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(WP_API_URL);
                setProjects(response.data);
                setLoading(false);
            } catch {
                setError('Failed to fetch projects');
                setLoading(false);
                // Fallback for demo purposes if WP is not running
                setProjects([
                    {
                        id: 1,
                        title: { rendered: 'Global Leadership Transformation' },
                        excerpt: { rendered: 'A comprehensive leadership development program for a tech giant across 4 continents.' },
                        featured_image_url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
                    },
                    {
                        id: 2,
                        title: { rendered: 'Culture Reset: FinTech' },
                        excerpt: { rendered: 'Redefining organizational culture and employee engagement after a major merger.' },
                        featured_image_url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800'
                    }
                ]);
            }
        };

        fetchProjects();
    }, []);

    return { projects, loading, error };
};
