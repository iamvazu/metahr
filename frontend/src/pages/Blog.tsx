import { motion } from 'framer-motion';
import { Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts';
import ScrollIndicator from '../components/ScrollIndicator';

const Blog = () => {
    const { posts, loading: loadingPosts } = usePosts();

    return (
        <div className="bg-white">
            {/* Blog Hero */}
            <section className="bg-navy relative overflow-hidden min-h-[80vh] flex flex-col justify-center pt-32 pb-24">
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0 text-white">
                    <img src="/blog_hero_bg.png" alt="" className="w-full h-full object-cover opacity-20 scale-105" />
                    <div className="absolute inset-0 bg-navy/60 z-10"></div>
                </div>

                <div className="container mx-auto px-6 relative z-20 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block"
                    >
                        Intelligence_Feed // LATEST_THINKING
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl lg:text-8xl font-black !text-white mb-8 tracking-tighter leading-[0.85]"
                    >
                        Global Leadership <br />
                        <span className="text-skyBlue font-serif italic text-gradient uppercase block mt-2">Insights.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl !text-beige/60 font-light max-w-2xl mx-auto leading-relaxed"
                    >
                        Explore our latest research, thought leadership, and tactical insights for modern organizational growth.
                    </motion.p>
                </div>

                <ScrollIndicator className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20" color="white" />
            </section>


            <div className="container mx-auto px-6 py-32">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {loadingPosts ? (
                        [1, 2, 3, 4, 5, 6].map((n) => (
                            <div key={n} className="animate-pulse bg-beige/10 rounded-[3rem] p-10 h-[500px] border border-navy/5">
                                <div className="bg-navy/5 w-full h-48 rounded-2xl mb-8"></div>
                                <div className="bg-navy/5 w-2/3 h-6 rounded-full mb-6"></div>
                                <div className="bg-navy/5 w-full h-4 rounded-full mb-3"></div>
                                <div className="bg-navy/5 w-full h-4 rounded-full mb-3"></div>
                                <div className="bg-navy/5 w-1/2 h-4 rounded-full"></div>
                            </div>
                        ))
                    ) : (posts && posts.length > 0) ? (
                        posts.map((post, i) => (
                            <Link
                                key={post.id}
                                to={`/blog/${post.slug}`}
                                className="block group relative h-full flex flex-col bg-white border border-navy/5 rounded-[3rem] overflow-hidden hover:border-teal/30 hover:shadow-3xl transition-all duration-700"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    {post._embedded?.['wp:featuredmedia']?.[0]?.source_url ? (
                                        <img
                                            src={post._embedded['wp:featuredmedia'][0].source_url}
                                            alt={post.title.rendered}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-navy/5 flex items-center justify-center text-navy/10">
                                            <Zap size={48} />
                                        </div>
                                    )}
                                    <div className="absolute top-6 left-6">
                                        <span className="px-4 py-1.5 bg-black/60 backdrop-blur-md text-teal text-[9px] font-mono font-bold tracking-widest uppercase rounded-full">
                                            POST_ID.{post.id}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-10 flex flex-col flex-grow">
                                    <div className="flex items-center space-x-3 mb-6">
                                        <div className="w-1 h-4 bg-teal"></div>
                                        <span className="text-[10px] font-mono font-bold text-navy/30 uppercase tracking-widest">
                                            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-black text-navy mb-6 group-hover:text-teal transition-colors leading-tight" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h3>
                                    <div className="text-navy/50 text-sm leading-relaxed mb-8 font-medium line-clamp-3" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
                                    <div className="mt-auto pt-8 border-t border-navy/5 flex items-center justify-between">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-navy group-hover:translate-x-2 transition-transform duration-500">Read_Protocol »</span>
                                        <Award size={18} className="text-navy/10 group-hover:text-teal transition-colors" />
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center bg-beige/10 rounded-[4rem] border-2 border-dashed border-navy/5">
                            <p className="text-navy/40 font-mono text-sm tracking-widest uppercase">No insights detected in database. Check WP-ADMIN // POSTS</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blog;
