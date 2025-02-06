import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Post from './Post';

// Sample posts (simulate API data)
const samplePosts = [
    {
        id: 1,
        type: 'image',
        title: 'Hilarious Meme',
        content: 'This meme totally made my day!',
        mediaUrl: 'https://via.placeholder.com/600x400?text=Meme',
    },
    {
        id: 2,
        type: 'video',
        title: 'Awesome Video',
        content: 'Check out this cool video clip!',
        mediaUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    },
    {
        id: 3,
        type: 'text',
        title: 'Daily Thoughts',
        content: 'Today I learned a few creative tricks in React. It feels great to code!',
    },
];

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Simulate an API call delay
        const fetchPosts = () => {
            setTimeout(() => {
                setPosts(samplePosts);
            }, 500);
        };
        fetchPosts();
    }, []);

    return (
        <div className="space-y-8">
            <AnimatePresence>
                {posts.map((post) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                        <Post post={post} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default Feed;
