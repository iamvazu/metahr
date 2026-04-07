import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import FAQPage from './pages/FAQPage';
import Breadcrumbs from './components/Breadcrumbs';
import FloatingCTA from './components/FloatingCTA';
import ScrollToTop from './components/ScrollToTop';

// Service Pages
import LeadershipDevelopment from './pages/services/LeadershipDevelopment';
import TeamDevelopment from './pages/services/TeamDevelopment';
import LocationService from './pages/LocationService';
import ExecutiveCoaching from './pages/services/ExecutiveCoaching';
import IndividualDevelopment from './pages/services/IndividualDevelopment';
import OrganizationalEffectiveness from './pages/services/OrganizationalEffectiveness';

function App() {
  useEffect(() => {
    // Redirect old HashRouter links to clean URLs
    const hash = window.location.hash;
    if (hash && hash.startsWith('#/')) {
      const path = hash.slice(2);
      window.history.replaceState(null, '', '/' + path);
    }
  }, []);

  return (
    <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-beige selection:bg-teal selection:text-white">
          <Navbar />
          <Breadcrumbs />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/faq" element={<FAQPage />} />
              {/* Services Pages */}
              <Route path="/services/leadership-development" element={<LeadershipDevelopment />} />
              <Route path="/services/team-development" element={<TeamDevelopment />} />
              <Route path="/services/executive-coaching" element={<ExecutiveCoaching />} />
              <Route path="/services/individual-development" element={<IndividualDevelopment />} />
              <Route path="/services/organizational-effectiveness" element={<OrganizationalEffectiveness />} />
              {/* PSEO - Location Pages */}
              <Route path="/locations/:city" element={<LocationService />} />
              <Route path="/locations/:city/:service" element={<LocationService />} />
              {/* Fallback for individual blog posts at root level */}
              <Route path="/:slug" element={<BlogPost />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
