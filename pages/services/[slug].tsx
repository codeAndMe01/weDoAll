import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import Head from 'next/head';
import ContactButton from '../../components/Smart/ContactButton/ContactButton';
import fs from 'fs';
import md from 'markdown-it';
import { Service, ServiceWithContent } from '../../types/interfaces';
import {
  getMarkDownSingleData,
  getMarkdownSinglePath,
} from '../../utils/markdown';
import { SERVICES_PATH } from '../../utils/constants';

// Mapping titles to relevant background images
const backgroundImages: Record<string, string> = {
  "weDoAll - Web Development": "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
  "weDoAll - Machine Learning": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "weDoAll - DevOps": "https://images.unsplash.com/photo-1518770660439-4636190af475",
  "weDoAll - Cyber Security": "https://images.unsplash.com/photo-1614064641938-d0b1f01d94f3",
  "weDoAll - Cloud Computing": "https://images.unsplash.com/photo-1562813733-b31f71025dce",
  "weDoAll - Data Science": "https://images.unsplash.com/photo-1515444744557-7f207b10c04e",
  "weDoAll - Artificial Intelligence": "https://images.unsplash.com/photo-1534751516642-a1af1ef26a1b",
  "weDoAll - Software Development": "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
};

const ServiceDetail = ({
  frontmatter: { title, header, description },
  content,
}: ServiceWithContent) => {
  // Select background image based on title
  const backgroundImage = backgroundImages[title] || "";

  // console.log(backgroundImage,"background")
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="prixite" content="Prixte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section with Dynamic Background Image */}
      <Box
        sx={{
          width: '100%',
          minHeight: '350px',
          background: `url(${backgroundImage}) center/cover no-repeat`,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff',
          padding: '40px 20px',
        }}
      >
        {/* Dark Overlay for Better Readability */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)',
          }}
        ></Box>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h3" fontWeight={700} gutterBottom>
            {header}
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9, fontSize: '1.1rem' }}>
            {description}
          </Typography>
          <Box mt={3}>
            <ContactButton text="Contact Us" />
          </Box>
        </Container>
      </Box>

     {/* Content Section */}
{/* Content Section */}
<Container maxWidth="lg" sx={{ mt: 5, mb: 8, position: 'relative' }}>
  {/* Background Gradient */}
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, rgba(0, 128, 255, 0.1), rgba(255, 255, 255, 0.6))',
      zIndex: -1,
      borderRadius: '12px',
    }}
  ></Box>

  <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
      gap: 4,
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      boxShadow: '0px 10px 30px rgba(0,0,0,0.1)',
      borderRadius: '12px',
      p: { xs: 3, md: 5 },
      lineHeight: 1.8,
      overflow: 'hidden',
    }}
  >
    {/* Left Side - Icon / Illustration */}
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: { xs: '100%', md: '40%' },
      }}
    >
      <img
        src="/images/tech-illustration.svg" // Change dynamically per service
        alt="Technology"
        style={{ width: '100%', maxWidth: '280px' }}
      />
    </Box>

    {/* Right Side - Text Content */}
    <Box sx={{ flex: 2, textAlign: { xs: 'center', md: 'left' } }}>
      <Typography
        variant="h4"
        fontWeight={600}
        sx={{ color: '#0A192F', mb: 2 }}
      >
        Discover {title}
      </Typography>
      <Typography variant="body1" sx={{ color: '#333', opacity: 0.8, mb: 2 }}>
        {description}
      </Typography>
      <div
        className="service-content"
        dangerouslySetInnerHTML={{ __html: md().render(content) }}
      ></div>
    </Box>
  </Box>
</Container>

{/* Floating Design Element */}
<Box
  sx={{
    position: 'absolute',
    bottom: -20,
    right: -30,
    width: '100px',
    height: '100px',
    background: 'radial-gradient(circle, rgba(0, 128, 255, 0.2) 0%, rgba(255, 255, 255, 0) 80%)',
    borderRadius: '50%',
    animation: 'floating 6s ease-in-out infinite',
  }}
></Box>

{/* Keyframes for Floating Effect */}
<style jsx>{`
  @keyframes floating {
    0% { transform: translateY(0); }
    50% { transform: translateY(15px); }
    100% { transform: translateY(0); }
  }
`}</style>


{/* Keyframes for Floating Effect */}
<style jsx>{`
  @keyframes floating {
    0% { transform: translateY(0); }
    50% { transform: translateY(15px); }
    100% { transform: translateY(0); }
  }
`}</style>

    </>
  );
};

export default ServiceDetail;

export async function getStaticPaths() {
  return getMarkdownSinglePath(fs, SERVICES_PATH);
}

export async function getStaticProps({ params: { slug } }: Service) {
  return getMarkDownSingleData(fs, SERVICES_PATH, slug);
}
