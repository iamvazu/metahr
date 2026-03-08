import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Zap, Share2 } from 'lucide-react';
import { usePost } from '../hooks/usePost';

const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const { post, loading, error } = usePost(slug);

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-teal border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                    <p className="text-navy font-mono text-sm tracking-widest uppercase animate-pulse">Retrieving_Data // DECODING_INSIGHTS</p>
                </div>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="min-h-screen bg-white pt-40 pb-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-black text-navy mb-8">Insight Not Found.</h1>
                    <p className="text-navy/60 mb-12 max-w-lg mx-auto leading-relaxed">
                        The requested post could not be retrieved from our intelligence feed. It may have been relocated or archived.
                    </p>
                    <Link to="/blog" className="inline-flex items-center space-x-3 bg-teal text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-navy transition-all">
                        <ArrowLeft size={16} />
                        <span>Return to Feed</span>
                    </Link>
                </div>
            </div>
        );
    }

    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    const authorName = post._embedded?.author?.[0]?.name || 'MetaHR Intelligence';

    return (
        <div className="bg-white min-h-screen">
            {/* Post Hero */}
            <section className="bg-navy pt-40 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {featuredImage ? (
                        <img 
                            src={featuredImage} 
                            alt={post.title.rendered} 
                            className="w-full h-full object-cover opacity-20 blur-sm scale-110"
                        />
                    ) : (
                        <div className="w-full h-full bg-navy/50"></div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy to-white/0"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center space-x-4 mb-8"
                        >
                            <Link to="/blog" className="text-teal hover:text-white transition-colors flex items-center space-x-2 group">
                                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                <span className="text-[10px] font-mono font-bold tracking-widest uppercase">Back_to_Feed</span>
                            </Link>
                            <span className="w-8 h-px bg-white/20"></span>
                            <span className="text-white/40 text-[10px] font-mono font-bold tracking-widest uppercase">Post_ID.{post.id}</span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-tight"
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap items-center gap-8 text-white/50"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center text-teal">
                                    <User size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-mono font-bold tracking-widest uppercase text-white/30 mb-0.5">Strategist</p>
                                    <p className="text-sm font-bold text-white">{authorName}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/20">
                                    <Calendar size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-mono font-bold tracking-widest uppercase text-white/30 mb-0.5">Published</p>
                                    <p className="text-sm font-bold text-white">
                                        {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Summary Box */}
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-beige/30 border border-navy/5 p-10 md:p-12 rounded-[3rem] mb-20 relative overflow-hidden"
                        >
                            <Zap className="text-teal/20 absolute -top-4 -right-4 size-32 rotate-12" />
                            <h2 className="text-xs font-mono font-bold text-teal uppercase tracking-[0.3em] mb-6 relative z-10">Abstract // EXECUTIVE_SUMMARY</h2>
                            <div 
                                className="text-xl md:text-2xl text-navy/70 leading-relaxed font-medium relative z-10 italic font-serif"
                                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                            />
                        </motion.div>

                        {/* Main Content */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="blog-content prose prose-xl prose-navy max-w-none 
                                prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-navy
                                prose-p:text-navy/70 prose-p:leading-relaxed prose-p:font-medium
                                prose-strong:text-navy prose-strong:font-black
                                prose-a:text-teal prose-a:no-underline hover:prose-a:underline
                                prose-img:rounded-[2.5rem] prose-img:shadow-2xl
                                prose-blockquote:border-l-4 prose-blockquote:border-teal prose-blockquote:bg-slate-50 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:italic prose-blockquote:font-serif prose-blockquote:text-navy/60"
                            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                        />

                        {/* Share & Support */}
                        <div className="mt-32 pt-16 border-t border-navy/5 flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="flex items-center space-x-6">
                                <span className="text-[10px] font-mono font-bold text-navy/30 uppercase tracking-widest">Broadcast_Insight:</span>
                                <div className="flex space-x-4">
                                    <button className="w-12 h-12 rounded-full border border-navy/5 flex items-center justify-center text-navy/40 hover:bg-teal hover:text-white hover:border-teal transition-all">
                                        <Share2 size={18} />
                                    </button>
                                </div>
                            </div>

                            <Link 
                                to="/contact" 
                                className="inline-flex items-center space-x-6 bg-navy text-white px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest hover:bg-teal transition-all group shadow-2xl"
                            >
                                <span>Discuss this insight</span>
                                <Zap size={18} className="group-hover:animate-pulse" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related/Footer CTA */}
            <section className="pt-32 pb-44 bg-slate-50 relative z-10">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-navy mb-8 tracking-tighter uppercase leading-tight">Ready to <br className="sm:hidden" /><span className="text-teal font-serif italic text-navy lowercase tracking-normal">evolve?</span></h2>
                    <p className="text-navy/40 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                        Our frameworks turn insights into organizational impact. Let's discuss how we can partner with your leadership team.
                    </p>
                    <Link to="/contact" className="inline-block bg-teal text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-navy transition-all shadow-xl w-full sm:w-auto">
                        Schedule a Strategy Session
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default BlogPost;
