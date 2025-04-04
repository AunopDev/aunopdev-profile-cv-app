import React from 'react';
import { Box, Container, Typography, IconButton, TextField, Button, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactSection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      id="contact"
      component="footer"
      sx={{
        py: 0.1,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 2,
          }}
        >
          <Box>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 3,
                fontSize: { xs: '1.75rem', md: '2.5rem' },
                fontWeight: 600,
              }}
            >
              LET'S CONNECT
            </Typography>
            <Typography variant="body1" sx={{ mb: 0.5, color: 'text.secondary' }}>
              Say hello at <Link href="mailto:chanintornc@sau.ac.th" sx={{ color: 'text.secondary', textDecoration: 'underline' }}>chanintornc@sau.ac.th</Link>
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
              For more info, here's my <Link href="#" sx={{ color: 'primary.main', textDecoration: 'underline' }}>resume</Link>
            </Typography>

            <Box sx={{ display: 'flex', gap: 0.5, mb: 2 }}>
              <IconButton aria-label="linkedin" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, p: 0.5 }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton aria-label="github" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, p: 0.5 }}>
                <GitHubIcon />
              </IconButton>
              <IconButton aria-label="twitter" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, p: 0.5 }}>
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="instagram" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, p: 0.5 }}>
                <InstagramIcon />
              </IconButton>
            </Box>
          </Box>

          <Box component="form" noValidate autoComplete="off" sx={{ width: '100%' }}>
            <Box>
              <TextField
                fullWidth
                id="name"
                label="Name"
                variant="outlined"
                sx={{
                  mb: 1,
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
                  mb: 1,
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
                  mb: 1,
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
              <Button
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: 50,
                  px: 2,
                  py: 0.5,
                  fontSize: '1.25rem',
                  textTransform: 'none',
                }}
              >
                SUBMIT
              </Button>

            </Box>
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary">
          &copy; {currentYear} Chanintorn Chalermsuk
        </Typography>



      </Container>
    </Box>
  );
};

export default ContactSection;