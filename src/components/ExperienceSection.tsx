import React from 'react';
import { Box, Typography, Container, Grid, Divider } from '@mui/material';

interface Experience {
  title: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: 'Freelance Developer',
    period: 'Nov 2023 - Present',
    description: 'พัฒนาและปรับปรุงส่วนติดต่อผู้ใช้สำหรับเว็บแอปพลิเคชันโดยใช้ React.js ทำงานร่วมกับทีมออกแบบ UX/UI เพื่อสร้างประสบการณ์ผู้ใช้ที่น่าประทับใจ ปรับปรุงความเร็วในการโหลดเว็บไซต์ด้วยเทคนิคการเพิ่มประสิทธิภาพต่างๆ ร่วมพัฒนาและดูแลสไตล์คอมโพเนนท์ภายในองค์กร',
  },
  {
    title: 'Front-End Intern',
    period: 'Sep 2023 - Nov 2023',
    description: 'พัฒนาเว็บอินเตอร์เฟซโดยใช้ลูกค้าค่าใช้จ่าย HTML, CSS และ JavaScript ช่วยปรับปรุงการเข้าถึง (Accessibility) ของเว็บไซต์ให้สอดคล้องกับมาตรฐาน WCAG ทำงานร่วมกับทีม Backend เพื่อเชื่อมต่อ API',
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <Box
      id="experience"
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
          <Box sx={{ flex: { md: '0 0 25%' } }}> {/* ปรับ flex basis */}
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 0.5,
                fontSize: { xs: '1.2rem', md: '1.8rem' },
                fontWeight: 600,
              }}
            >
              MY EXPERIENCE
            </Typography>
          </Box>
          <Box sx={{ flex: { md: '0 0 75%' } }}> {/* ปรับ flex basis */}
            {experiences.map((exp, index) => (
              <Box key={index} sx={{ mb: 1 }}> {/* ปรับ margin bottom */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: '600', fontSize: '0.9rem' }}>
                    {exp.title}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: 'primary.main', fontSize: '0.8rem' }}>
                    {exp.period}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.4, fontSize: '0.8rem' }}>
                  {exp.description}
                </Typography>
                {index < experiences.length - 1 && (
                  <Divider sx={{ my: 1, borderColor: 'rgba(255, 255, 255, 0.05)' }} />
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
          margin: '15px auto 0', // ปรับ margin top
        }}
      />
    </Box>
  );
};

export default ExperienceSection;