import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';

const skillCategories = [
  { name: 'REACT' },
  { name: 'TypeScript' },
  { name: 'Vite' },
  { name: 'Tailwind' },
  { name: 'FLUTTER' },
  { name: 'DART' },
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JAVASCRIPT' },
  { name: 'DATABASE' },
];

const CapabilitiesSection: React.FC = () => {
  return (
    <Box
      id="Capabilities"
      component="section"
      sx={{
        py: 10,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 5,
          }}
        >
          <Box sx={{ flex: { md: '0 0 33.33%' } }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: '1.75rem', md: '2.5rem' },
                fontWeight: 600,
              }}
            >
              MY CAPABILITIES
            </Typography>
          </Box>
          <Box sx={{ flex: { md: '0 0 66.67%' } }}>
            <Box>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: 'text.secondary',
                  maxWidth: '800px',
                }}
              >
                ผมมองหาโอกาสในการเพิ่มทักษะใหม่ๆอยู่เสมอ ทั้งการพัฒนาฟรอนท์เอนด์ แบ็กเอนต์ การออกแบบ UX/UI ฐานข้อมูล
                - ทักษะที่มีเป็นเพียงพื้นฐาน สามารถเรียนรู้พัฒนาเพิ่มเติมได้ในอนาคต
              </Typography>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr', md: '1fr 1fr 1fr 1fr' },
                  gap: 4,
                  mt: 4,
                }}
              >
                {skillCategories.map((skill) => (
                  <Box key={skill.name} sx={{ textAlign: 'center', mb: 3 }}>
                    <Paper
                      elevation={0}
                      sx={{
                        bgcolor: 'transparent',
                        p: 3,
                        borderRadius: '25px',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.3s',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                        },
                        cursor: 'pointer',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                      }}
                    >
                      <Typography variant="subtitle1" fontWeight="bold" sx={{ textTransform: 'uppercase' }}>
                        {skill.name}
                      </Typography>
                    </Paper>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      <Box
        sx={{
          width: '85%',
          borderTop: '1px solid rgb(110, 110, 110)',
          margin: '70px auto 0',
        }}
      />
    </Box>
  );
};

export default CapabilitiesSection;