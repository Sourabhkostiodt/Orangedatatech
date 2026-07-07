import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import CareersPage from './pages/CareersPage';
import CyberContentPage from './pages/CyberContentPage';
import TeamPage from './pages/TeamPage';
import BlogPage from './pages/BlogPage';
import ServicesPage from './pages/ServicesPage';
import AccessManagementPage from './pages/AccessManagementPage';
import IdentityGovernanceAdministrationPage from './pages/IdentityGovernanceAdministrationPage';
import PrivilegeAccessManagementPage from './pages/PrivilegeAccessManagementPage';
import IamProfessionalServicesPage from './pages/IamProfessionalServicesPage';
import ManagedIdentityServicesPage from './pages/ManagedIdentityServicesPage';
import StrategicConsultingPage from './pages/StrategicConsultingPage';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="min-h-screen bg-theme-page"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/team/:slug" element={<TeamPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/cybersecurity" element={<CyberContentPage />} />
          <Route path="/cybersecurity/services" element={<CyberContentPage />} />
          <Route path="/cybersecurity/services/professional-services" element={<IamProfessionalServicesPage />} />
          <Route path="/cybersecurity/services/identity-access-management-professional-services" element={<IamProfessionalServicesPage />} />
          <Route path="/cybersecurity/services/managed-identity-services" element={<ManagedIdentityServicesPage />} />
          <Route path="/cybersecurity/services/strategic-consulting" element={<StrategicConsultingPage />} />
          <Route path="/cybersecurity/solutions" element={<CyberContentPage />} />
          <Route path="/cybersecurity/solutions/access-management" element={<AccessManagementPage />} />
          <Route path="/cybersecurity/solutions/identity-governance-administration" element={<IdentityGovernanceAdministrationPage />} />
          <Route path="/cybersecurity/solutions/privilege-access-management" element={<PrivilegeAccessManagementPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/mobile-app-development-services" element={<CyberContentPage />} />
          <Route path="/services/data-analytics" element={<CyberContentPage />} />
          <Route path="/services/data-analytics/dataanalytics-for-finance" element={<CyberContentPage />} />
          <Route path="/services/data-analytics/data-analytics-for-marketing" element={<CyberContentPage />} />
          <Route path="/services/data-analytics/data-analytics-for-sales" element={<CyberContentPage />} />
          <Route path="/services/data-analytics/data-analytics-for-risk-management" element={<CyberContentPage />} />
          <Route path="/technologies" element={<CyberContentPage />} />
          <Route path="/technologies/bi-tech/embedded-analytics" element={<CyberContentPage />} />
          <Route path="/technologies/bi-tech/embedded-analytics-with-powerbi" element={<CyberContentPage />} />
          <Route path="/technologies/data-engineering-services" element={<CyberContentPage />} />
          <Route path="/technologies/data-engineering-services/azure-data-factory" element={<CyberContentPage />} />
          <Route path="/technologies/data-engineering-services/advanced-analytics-with-azure-sql" element={<CyberContentPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
