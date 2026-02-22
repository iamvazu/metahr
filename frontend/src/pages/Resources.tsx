import { motion } from 'framer-motion';
import { Award, Zap, Brain, MessageSquare, BookOpen, Globe, Users, Target } from 'lucide-react';
import { usePosts } from '../hooks/usePosts';

const Resources = () => {
    const { posts, loading: loadingPosts } = usePosts();

    const credentials = [
        "SHRM - Senior Certified Professional (SHRM-SCP)",
        "Gallup Global Strengths Coach",
        "Hogan Assessments Certified Practitioner",
        "The Leadership Challenge Licensed User",
        "Everything DiSC® Certified Facilitator"
    ];

    return (
        <div className="bg-white">
            {/* Resources Hero */}
            <section className="bg-navy pt-32 pb-16 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-8"
                    >
                        <span className="px-6 py-2 rounded-full border border-teal/60 text-teal text-[10px] font-mono font-bold tracking-[0.4em] uppercase bg-black/40 backdrop-blur-xl animate-status-beat">
                            RESOURCES.INDEX // GLOBAL_BENCHMARKS
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-black !text-white mb-8 tracking-tighter leading-none"
                    >
                        Globally Benchmarked <br />
                        <span className="text-teal font-serif italic">Tools for Growth.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl !text-beige/60 font-light max-w-3xl mx-auto leading-relaxed"
                    >
                        Access our suite of scientifically-backed assessments and learning resources to drive continuous improvement.
                    </motion.p>
                </div>
                {/* Decorative Laser Line */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent"></div>
            </section>

            <div className="container mx-auto px-6 py-32">
                {/* Assessment Profiles */}
                <div className="text-center mb-24">
                    <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">Precision Diagnostics // MEASURING_PERFORMANCE</span>
                    <h2 className="text-4xl md:text-6xl font-black text-navy mb-8 tracking-tighter">Behavioral Assessment <span className="text-teal font-serif italic leading-tight">Profiles.</span></h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-10 mb-40">
                    {[
                        {
                            name: "Hogan Assessments",
                            desc: "Predicting performance by looking at the 'Bright Side' (day-to-day strengths), the 'Dark Side' (derailers under stress), and the 'Inside' (core values).",
                            icon: <Brain className="text-teal" size={32} />,
                            features: ["HPI: Bright Side", "HDS: Dark Side", "MVPI: Inside"],
                            label: "DIAG_HOGAN"
                        },
                        {
                            name: "CliftonStrengths®",
                            desc: "Uncover the unique set of talents that give you your power and edge. Learn to leverage what you do naturally best for higher performance.",
                            icon: <Zap className="text-teal" size={32} />,
                            features: ["Top 5 Core Themes", "Full 34 Profile", "Team Talent Map"],
                            label: "DIAG_STRENGTHS"
                        },
                        {
                            name: "Everything DiSC®",
                            desc: "A behavioral tool to help individuals understand their style—Dominance, Influence, Steadiness, or Conscientiousness—to improve communication.",
                            icon: <MessageSquare className="text-teal" size={32} />,
                            features: ["Personal Styles", "Comparison Reports", "Team Culture Reports"],
                            label: "DIAG_DISC"
                        }
                    ].map((tool, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-beige/10 border border-navy/5 p-12 rounded-[4rem] hover:border-teal/30 hover:shadow-3xl transition-all h-full flex flex-col group"
                        >
                            <span className="text-[10px] font-mono font-bold text-navy/20 block mb-8 tracking-widest">{tool.label}</span>
                            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-10 shadow-3xl shadow-navy/5 group-hover:bg-navy group-hover:text-white transition-all duration-500">
                                {tool.icon}
                            </div>
                            <h3 className="text-2xl font-black text-navy mb-6 tracking-tight">{tool.name}</h3>
                            <p className="text-navy/50 text-base leading-relaxed mb-10 flex-grow font-medium">{tool.desc}</p>
                            <ul className="space-y-4 pt-8 border-t border-navy/10">
                                {tool.features.map(f => (
                                    <li key={f} className="flex items-center space-x-3 text-navy/60 text-xs font-black uppercase tracking-widest">
                                        <div className="w-1.5 h-1.5 rounded-full bg-teal"></div>
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Latest Thinking (Dynamic from WordPress) */}
                <div className="mb-40">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">Intelligence_Feed // LATEST_THINKING</span>
                            <h2 className="text-4xl md:text-6xl font-black text-navy tracking-tighter leading-tight">Global Leadership <br /><span className="text-teal font-serif italic text-gradient uppercase">Insights.</span></h2>
                        </div>
                        <a href="https://9z4.7b6.myftpupload.com/wp-admin/edit.php" target="_blank" rel="noreferrer" className="inline-flex items-center space-x-3 text-navy/40 hover:text-teal transition-colors group">
                            <span className="text-[10px] font-mono font-bold tracking-widest uppercase">Admin: Manage_Posts</span>
                            <Zap size={14} className="group-hover:animate-pulse" />
                        </a>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {loadingPosts ? (
                            // Loading Skeletons
                            [1, 2, 3].map((n) => (
                                <div key={n} className="animate-pulse bg-beige/10 rounded-[3rem] p-10 h-[500px] border border-navy/5">
                                    <div className="bg-navy/5 w-full h-48 rounded-2xl mb-8"></div>
                                    <div className="bg-navy/5 w-2/3 h-6 rounded-full mb-6"></div>
                                    <div className="bg-navy/5 w-full h-4 rounded-full mb-3"></div>
                                    <div className="bg-navy/5 w-full h-4 rounded-full mb-3"></div>
                                    <div className="bg-navy/5 w-1/2 h-4 rounded-full"></div>
                                </div>
                            ))
                        ) : posts && posts.length > 0 ? (
                            posts.map((post, i) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group relative h-full flex flex-col bg-white border border-navy/5 rounded-[3rem] overflow-hidden hover:border-teal/30 hover:shadow-3xl transition-all duration-700"
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
                                </motion.div>
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center bg-beige/10 rounded-[4rem] border-2 border-dashed border-navy/5">
                                <p className="text-navy/40 font-mono text-sm tracking-widest uppercase">No insights detected in database. Check WP-ADMIN // POSTS</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Engagement Formats */}
                <div className="bg-navy rounded-[5rem] p-16 md:p-32 text-white relative overflow-hidden mb-40 ring-1 ring-white/10">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">Partnership.Models // ENGAGEMENT_MATRIX</span>
                            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter leading-none">How We <br /><span className="text-teal font-serif italic uppercase">Partner.</span></h2>
                            <p className="text-white/40 text-xl font-light mb-16 max-w-xl leading-relaxed">
                                We offer flexible engagement models designed to meet your team where they are, whether global or hyper-local.
                            </p>
                            <div className="space-y-10">
                                {[
                                    { title: "Virtual Interventions", desc: "Interactive, live digital workshops that bridge geographic divides.", icon: <Globe size={28} /> },
                                    { title: "In-Person Workshops", desc: "Immersion-based learning focused on deep behavior change.", icon: <Users size={28} /> },
                                    { title: "One-on-One Coaching", desc: "Dedicated sessions for leadership alignment and performance labs.", icon: <Target size={28} /> }
                                ].map((format, i) => (
                                    <div key={i} className="flex items-start space-x-8 group">
                                        <div className="shrink-0 w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-white transition-all duration-500">
                                            {format.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2 tracking-tight">{format.title}</h4>
                                            <p className="text-white/40 leading-relaxed font-light">{format.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white p-12 md:p-20 rounded-[4rem] text-center shadow-3xl text-navy relative group overflow-hidden">
                            <div className="absolute top-0 right-0 p-8">
                                <motion.div
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-3 h-3 bg-teal rounded-full"
                                />
                            </div>
                            <BookOpen className="mx-auto mb-8 text-teal" size={56} />
                            <h3 className="text-3xl font-black mb-6 tracking-tight">Meta Learning Hub</h3>
                            <span className="inline-block border-2 border-teal/20 text-teal px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10">Initializing_Portal</span>
                            <p className="text-navy/50 text-lg mb-0 leading-relaxed font-medium">
                                Our upcoming LMS portal will host exclusive leadership modules and pre-diagnostic tools for registered partners.
                            </p>
                        </div>
                    </div>
                    {/* Background Decorative Rings */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
                </div>

                {/* Credentials Section */}
                <div className="bg-white text-center">
                    <div className="max-w-5xl mx-auto">
                        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-10 block">Benchmarked_Wisdom // CREDENTIALS</span>
                        <h2 className="text-4xl md:text-7xl font-black text-navy mb-16 tracking-tighter leading-none">Professional <br /><span className="text-teal font-serif italic uppercase text-gradient">Accreditations.</span></h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {credentials.map((c, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-beige/10 border border-navy/5 p-10 rounded-[3rem] text-navy font-bold hover:border-teal/30 hover:shadow-3xl transition-all duration-500 group flex items-center space-x-6"
                                >
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-teal group-hover:bg-navy group-hover:text-white transition-all duration-500 shrink-0 shadow-lg shadow-navy/5">
                                        <Award size={24} />
                                    </div>
                                    <span className="text-left text-xs uppercase tracking-widest leading-relaxed">{c}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;
