import React from 'react';
import { Box, Typography, Container, Button, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import aboutImage from '../assets/images/about.jpg';

const AboutSection: React.FC = () => {

  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: 0.1,
        backgroundColor: 'background.default',
        color: 'text.primary',
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
                mb: 3,
              }}
            >
              ABOUT ME
            </Typography>
          </Box>
          <Box sx={{ flex: { md: '0 0 66.67%' } }}>
            <Box>
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  color: 'text.secondary',
                  lineHeight: 1.7,
                }}
              >
                ผมเป็นนักศึกษารายวิชา TechnologyDigital And Innovation ที่ South East Asia University
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  color: 'text.secondary',
                  lineHeight: 1.7,
                }}
              >
                มีความกระตือรือร้นและอยากรู้ อยากเห็นเกี่ยวกับการแก้ปัญหาต่างๆ ปัจจุบันกำลังศึกษาเรียนรู้เกี่ยวกับ React.js และการออกแบบ เว็บไซต์เล็กน้อย เมื่อไม่ได้เขียนโปรแกรม ผมชอบเล่นฟุตบอล และเล่นเกม FIFA, Minecraft, DeadByDaylight กำลังเรียนรู้เพิ่มเติมเพื่อพัฒนาทักษะอยู่เสมอ
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, mt: 4, flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    borderRadius: 50,
                    px: 4,
                    py: 1,
                    fontSize: '1rem',
                    textTransform: 'none',
                  }}
                >
                  DOWNLOAD RESUME
                </Button>

                <Box sx={{ display: 'flex', gap: 1 }}>

                  <IconButton
                    aria-label="github"
                    size="small"
                    sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                    component="a"
                    href="https://github.com/AunopDev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon sx={{ fontSize: '1.5rem' }} />
                  </IconButton>
                  <IconButton
                    aria-label="instagram"
                    size="small"
                    sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                    component="a"
                    href="https://www.instagram.com/_.ac29._/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon sx={{ fontSize: '1.5rem' }} />
                  </IconButton>
                  <IconButton
                    aria-label="facebook"
                    size="small"
                    sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                    component="a"
                    href="https://www.facebook.com/NoapNope"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon sx={{ fontSize: '1.5rem' }} />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          component="img"
          src={aboutImage}
          alt="About Me Image"
          sx={{
            width: '100%',
            height: 'auto',
            borderRadius: 4,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            mt: 5,
          }}
        />
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

export default AboutSection;