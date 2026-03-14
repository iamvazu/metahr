import { useState, useEffect } from 'react';
import axios from 'axios';

// Change this to your WordPress REST API URL if different
const WP_POSTS_API_URL = 'https://metahr.co.in/wp-json/wp/v2/posts?_embed';

export interface Post {
    id: number;
    title: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    date: string;
    slug: string;
    link: string;
    _embedded?: {
        'wp:featuredmedia'?: Array<{
            source_url: string;
        }>;
        'author'?: Array<{
            name: string;
        }>;
    };
}

export const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(WP_POSTS_API_URL);
                if (Array.isArray(response.data)) {
                    setPosts(response.data);
                } else {
                    console.error('API did not return an array:', response.data);
                    setPosts([]);
                    setError('Invalid data received from server');
                }
                setLoading(false);
            } catch (err) {
                console.error('Error fetching posts:', err);
                setError('Failed to fetch posts');
                setLoading(false);
                setPosts([]); // Ensure posts is still an array
            }
        };

        fetchPosts();
    }, []);

    return { posts, loading, error };
};
