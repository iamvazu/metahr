import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    if (location.pathname === '/') return null;

    return (
        <nav aria-label="Breadcrumb" className="container mx-auto px-6 py-4 absolute top-28 left-0 right-0 z-20">
            <ol className="flex items-center space-x-2 text-[10px] font-mono font-bold uppercase tracking-widest text-white/40">
                <li className="flex items-center">
                    <Link to="/" className="hover:text-teal transition-colors flex items-center">
                        <Home size={12} className="mr-2" />
                        Root
                    </Link>
                </li>
                {pathnames.map((value, index) => {
                    const last = index === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const name = value.replace(/-/g, ' ');

                    return (
                        <li key={to} className="flex items-center">
                            <ChevronRight size={10} className="mx-2 text-white/20" />
                            {last ? (
                                <span className="text-teal">{name}</span>
                            ) : (
                                <Link to={to} className="hover:text-teal transition-colors">
                                    {name}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>

            {/* Structured Data for Breadcrumbs */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://metahr.co.in"
                        },
                        ...pathnames.map((val, idx) => ({
                            "@type": "ListItem",
                            "position": idx + 2,
                            "name": val.charAt(0).toUpperCase() + val.slice(1).replace(/-/g, ' '),
                            "item": `https://metahr.co.in/${pathnames.slice(0, idx + 1).join('/')}`
                        }))
                    ]
                })}
            </script>
        </nav>
    );
};

export default Breadcrumbs;
