import { useState, useEffect } from 'react';
import axios from 'axios';
import { Post } from './usePosts';

const WP_SINGLE_POST_API_URL = 'https://metahr.co.in/wp-json/wp/v2/posts?_embed&slug=';

export const usePost = (slug: string | undefined) => {
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!slug) return;

        const fetchPost = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${WP_SINGLE_POST_API_URL}${slug}`);
                if (response.data && response.data.length > 0) {
                    setPost(response.data[0]);
                } else {
                    setError('Post not found');
                }
                setLoading(false);
            } catch (err) {
                console.error('Error fetching post:', err);
                setError('Failed to fetch post');
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    return { post, loading, error };
};
