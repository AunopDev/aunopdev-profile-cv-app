import React from 'react';
import { Box, Typography, Container, Divider } from '@mui/material';

interface Experience {
  title: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: 'Developer Student',
    period: '2020 - Present',
    description: 'เป็นนักศึกษาสาขาวิชาเทคโนโลยีดิจิทัลและนวัตกรรม และเคยฝึกงานอยู่ที่ มหาวิทยาลัยเอเชียอาคเนย์ ปัจจุบันยังศึกษาอยู่',
  },
  {
    title: 'Electronic Student',
    period: '2016 - 2019',
    description: 'เป็นนักเรียนช่างอิเล็กทรอนิกส์ และเคยฝึกงานอยู่ที่ วิทยาลัยเทคโนโลยีฐานเทคโนโลยี จบการศึกษาในปี 2019',
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <Box
      id="Experience"
      component="section"
      sx={{
        py: 0.5,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 2,
          }}
        >
          <Box sx={{ flex: { md: '0 0 35%' } }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 1,
                fontSize: { xs: '2rem', md: '2.7rem' },
                fontWeight: 600,
              }}
            >
              MY EXPERIENCE
            </Typography>
          </Box>
          <Box sx={{ flex: { md: '0 0 75%' } }}>
            {experiences.map((exp, index) => (
              <Box key={index} sx={{ mb: 0.5 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                  <Typography variant="h6" sx={{ fontWeight: '600', fontSize: '1.5rem' }}>
                    {exp.title}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: 'primary.main', fontSize: '1rem' }}>
                    {exp.period}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.5, fontSize: '1rem' }}>
                  {exp.description}
                </Typography>
                {index < experiences.length - 1 && (
                  <Divider sx={{ my: 1.5, borderColor: 'rgba(255, 255, 255, 0.05)' }} />
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          width: '85%',
          borderTop: '1px solid rgb(110, 110, 110)',
          margin: '35px auto 0',
          mt: 10,
        }}
      />
    </Box>
  );
};

export default ExperienceSection;