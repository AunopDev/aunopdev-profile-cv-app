import React from 'react';
import { Box, Container, Typography, IconButton, TextField, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      id="contact"
      component="footer"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            mb: 5,
            fontSize: { xs: '1.75rem', md: '2.5rem' },
            fontWeight: 600,
          }}
        >
          LET'S CONNECT
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, // จัดเลย์เอาต์เป็น 2 คอลัมน์บนหน้าจอขนาด md ขึ้นไป
            gap: 4,
          }}
        >
          <Box>
            <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
              Say hello at chanintornc@sau.ac.th
            </Typography>

            <Box sx={{ display: 'flex', gap: 1, mb: 4 }}>
              <IconButton aria-label="linkedin" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton aria-label="github" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                <GitHubIcon />
              </IconButton>
              <IconButton aria-label="twitter" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="instagram" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                <InstagramIcon />
              </IconButton>
            </Box>
          </Box>

          <Box component="form" noValidate autoComplete="off">
            <Box>
              <TextField
                fullWidth
                id="name"
                label="Name"
                variant="outlined"
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                  },
                }}
              />
            </Box>
            <Box>
              <TextField
                fullWidth
                id="email"
                label="Email"
                variant="outlined"
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                  },
                }}
              />
            </Box>
            <Box>
              <TextField
                fullWidth
                id="subject"
                label="Subject"
                variant="outlined"
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                  },
                }}
              />
            </Box>
            <Box>
              <TextField
                fullWidth
                id="message"
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                  },
                }}
              />
            </Box>
            <Box>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: 50,
                  px: 3,
                  py: 1,
                  fontSize: '0.8rem',
                  textTransform: 'none',
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            &copy; {currentYear} Chanintorn Chalermsuk
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;