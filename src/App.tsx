import React from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import WorkSection from './components/WorkSection';
import AboutSection from './components/AboutSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';

const App: React.FC = () => {
  return (
    <Box>
      <Navbar />
      <WorkSection />
      <AboutSection />
      <CapabilitiesSection />
      <ExperienceSection />
      <ContactSection />
    </Box>
  );
};

export default App;
