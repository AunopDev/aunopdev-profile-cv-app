import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, Grid, IconButton, Fade } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profileImage from '../assets/images/profile.jpg';

const WorkSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="work"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#161516',
        position: 'relative',
        pt: 10,
        pb: 5,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Fade in={isVisible} timeout={1000}>
              <Box>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 700,
                    mb: 2,
                    lineHeight: 1.2,
                  }}
                >
                  HI, I AM<br />
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    CHANINTORN C.
                  </Box>
                </Typography>

                <Typography
                  variant="subtitle1"
                  component="p"
                  sx={{
                    color: 'text.secondary',
                    mb: 4,
                    maxWidth: '600px',
                  }}
                >
                  นักพัฒนาเว็บไซต์ฝั่งฟรอนท์เอนด์จากประเทศไทย ที่มีความหลงใหลในการสร้าง เว็บไซต์ที่เข้าถึงได้และเป็นมิตรกับผู้ใช้
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={scrollToAbout}
                    sx={{
                      borderRadius: 50,
                      px: 3,
                      py: 0.8,
                      fontSize: '1.5rem',
                      textTransform: 'none',
                    }}
                  >
                    CONTACT ME
                  </Button>

                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton
                      aria-label="linkedin"
                      size="small"
                      sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                    >
                      <LinkedInIcon sx={{ fontSize: '1.5rem' }} />
                    </IconButton>
                    <IconButton
                      aria-label="github"
                      size="small"
                      sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                    >
                      <GitHubIcon sx={{ fontSize: '1.5rem' }} />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Fade>
          </Grid>

          <Grid item xs={12} md={6}>
            <Fade in={isVisible} timeout={1500}>
              <Box
                component="img"
                src={profileImage}
                alt="CHANINTORN CHALERMSUK"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 4,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                }}
              />
            </Fade>
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          position: 'absolute',
          top: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'fadeIn 2s',
          '@keyframes fadeIn': {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          }
        }}></Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 20%, 50%, 80%, 100%': {
              transform: 'translateX(-50%) translateY(0)',
            },
            '40%': {
              transform: 'translateX(-50%) translateY(-20px)',
            },
            '60%': {
              transform: 'translateX(-50%) translateY(-10px)',
            }
          }
        }}
      >

      </Box>
      

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

export default WorkSection;
