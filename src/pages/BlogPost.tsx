import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '@/src/constants';
import { ArrowLeft, Calendar } from 'lucide-react';

export const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="pt-40 pb-32 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6">Article Not Found</h1>
        <p className="text-nordic-grey mb-8">The article you are looking for does not exist or has been removed.</p>
        <button 
          onClick={() => navigate('/blog')}
          className="px-8 py-4 bg-terracotta text-white font-bold rounded-full hover:bg-terracotta/90 transition-all flex items-center"
        >
          <ArrowLeft size={18} className="mr-2" /> Back to Blog
        </button>
      </div>
    );
  }

  // Helper to split the content into paragraphs since we added \n\n in constants.ts
  const paragraphs = post.content?.split('\n\n') || [post.excerpt];

  return (
    <div className="pt-32 pb-24 top-0">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/blog" 
            className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-nordic-grey hover:text-terracotta transition-colors mb-12"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Articles
          </Link>

          <header className="mb-12 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 text-xs font-bold uppercase tracking-widest text-terracotta mb-6">
              <Calendar size={14} /> {post.date}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-nordic-black">
              {post.title}
            </h1>
          </header>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="max-w-5xl mx-auto px-6 lg:px-12 mb-16"
      >
        <div className="aspect-[21/9] rounded-[2rem] overflow-hidden soft-shadow">
          <img 
            src={post.image.startsWith('http') ? post.image : `/${post.image}`} 
            alt={post.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>

      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="prose prose-lg prose-headings:font-bold prose-headings:text-nordic-black prose-p:text-nordic-grey prose-p:leading-relaxed mx-auto"
        >
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg text-nordic-grey leading-relaxed mb-8">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
