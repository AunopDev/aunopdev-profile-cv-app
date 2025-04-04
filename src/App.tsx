import React from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import WorkSection from './components/WorkSection';
import AboutSection from './components/AboutSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/ContactSection';

const App: React.FC = () => {
  return (
    <Box>
      <Navbar />
      <WorkSection />
      <AboutSection />
      <CapabilitiesSection />
      <ExperienceSection />
      <Footer />
    </Box>
  );
};

export default App;
