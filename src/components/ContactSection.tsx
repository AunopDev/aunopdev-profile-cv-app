import React from 'react';
import { Box, Container, Typography, IconButton, TextField, Button, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

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
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 600,
              }}
            >
              LET'S CONNECT
            </Typography>
            <Typography variant="body1" sx={{ mb: 0.5, color: 'text.secondary' }}>
              Say hello at <Link href="mailto:bankforgame2546@gmail.com" sx={{ color: 'text.secondary', textDecoration: 'underline' }}>bankforgame2546@gmail.com</Link>
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
              For more info, here's my <Link href="#" sx={{ color: 'primary.main', textDecoration: 'underline' }}>resume</Link>
            </Typography>

            <Box sx={{ display: 'flex', gap: 0.5, mb: 2 }}>

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
          &copy; {currentYear} Aunop Chinnapong (AunopDev)
        </Typography>



      </Container>
      <Box
        sx={{
          width: '85%',
          borderTop: '1px solid rgb(110, 110, 110)',
          margin: '70px auto 0',
          mb: 5,
        }}
      />
    </Box>

  );
};

export default ContactSection;