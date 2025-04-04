import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';

const skillCategories = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JAVASCRIPT' },
  { name: 'FLUTTER' },
  { name: 'DART' },
  { name: 'IoT' },
  { name: 'REACT' },
  { name: 'DATABASE' },
];

const CapabilitiesSection: React.FC = () => {
  return (
    <Box
      id="capabilities"
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
            gap: 4,
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
                ผมมองหาโอกาสในการเพิ่มทักษะใหม่ๆ อยู่เสมอ ทั้งการพัฒนาฟรอนท์เอนด์ แบล็กเอนต์ การออกแบบ UX/UI ฐานข้อมูล
              </Typography>

              <Grid container spacing={4} justifyContent="flex-start" sx={{ mt: 4 }}>
                {skillCategories.map((skill) => (
                  <Grid item xs={6} sm={4} md={3} key={skill.name}>
                      <Box sx={{ textAlign: 'center', mb: 3 }}>
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
                  </Grid>
                ))}
              </Grid>
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