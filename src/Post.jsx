import React, { useState } from 'react';
import { motion } from 'framer-motion';
import VideoPlayer from './VideoPlayer';

const Post = ({ post }) => {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    const toggleLike = () => {
        setLiked((prev) => !prev);
        setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
    };

    return (
        <motion.div
            className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-yellow-200"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            {/* Post Header */}
            <div className="bg-yellow-400 px-6 py-4">
                <h2 className="text-2xl font-bold text-white">{post.title}</h2>
            </div>

            {/* Post Content & Media */}
            <div className="p-6 flex-grow">
                <p className="text-gray-700 mb-4">{post.content}</p>
                {post.type === 'image' && (
                    <img
                        src={post.mediaUrl}
                        alt={post.title}
                        className="w-full h-auto object-cover rounded"
                    />
                )}
                {post.type === 'video' && <VideoPlayer src={post.mediaUrl} />}
                {/* For text-only posts, no additional media is shown */}
            </div>

            {/* Post Footer */}
            <div className="px-6 py-4 border-t border-gray-200 flex justify-between items-center">
                <button
                    onClick={toggleLike}
                    className="flex items-center space-x-2 text-gray-600 hover:text-yellow-300 transition"
                >
                    <span className="text-xl">
                        {liked ? '❤️' : '🤍'}
                    </span>
                    <span>{likeCount}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-yellow-300 transition">
                    <span className="text-xl">💬</span>
                    <span>Comments</span>
                </button>
            </div>
        </motion.div>
    );
};

export default Post;
