import { motion } from 'framer-motion';

const Post = ({ post }) => {
    return (
        <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                    {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.content}</p>

                {/* Conditional media rendering */}
                {post.type === 'image' && (
                    <img
                        src={post.mediaUrl}
                        alt={post.title}
                        className="w-full h-auto object-cover rounded"
                    />
                )}
                {post.type === 'video' && (
                    <video controls className="w-full h-auto rounded">
                        <source src={post.mediaUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
                {/* For text posts, no additional media is rendered */}
            </div>
        </motion.div>
    );
};

export default Post;
