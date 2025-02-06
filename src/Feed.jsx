import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Post from './Post';

// Sample posts data – replace this with your API call if needed.
const samplePosts = [
    {
        id: 1,
        type: 'image',
        title: 'Anh sieu dep trai cua Nghia',
        content: 'Mlem mlem',
        mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJkJ0nPf2NcykRHn39n1u90qt4ouJH0iGePA&s',
    },
    {
        id: 2,
        type: 'video',
        title: 'Khum biet de gi',
        content: '🤡🤡🤡.',
        mediaUrl:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
    {
        id: 3,
        type: 'text',
        title: 'Miss her ~',
        content:
            'Luoi viet ~',
    },
];

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Simulate an API call delay.
        const timer = setTimeout(() => {
            setPosts(samplePosts);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="space-y-10">
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
