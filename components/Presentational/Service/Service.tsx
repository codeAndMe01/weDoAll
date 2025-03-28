import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceProps {
  img: string;
  title: string;
  description: string;
  path: string;
}

const Service: React.FC<ServiceProps> = ({ img, title, description, path }) => {
  return (
    <Grid item xs={12} sm={6} md={3} className="service">
      <Link href={path} passHref>
        <Box
          className="service-box"
          sx={{
            width: '100%',
            height: '100%',
            p: 3,
            borderRadius: '12px',
            boxShadow: 3,
            textAlign: 'center',
            transition: 'all 0.3s ease-in-out',
            border: '2px solid transparent',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '250px',
            '&:hover': {
              transform: 'translateY(-10px)',
              boxShadow: 6,
              backgroundColor: '#f5f5f5',
              borderColor: '#63AC45',
            },
          }}
        >
          <Box className="service-image-container" sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Image
              width={50}
              height={50}
              src={img}
              alt="service-image"
            />
          </Box>

          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 700,
              color: '#333',
              transition: 'color 0.3s ease-in-out',
              '&:hover': {
                color: '#28a745',
              },
            }}
            mt="18px"
          >
            {title}
          </Typography>

          <Typography
            className="service-description"
            sx={{
              fontSize: 14,
              color: '#666',
              mt: 1,
              transition: 'color 0.3s ease-in-out',
              textAlign: 'center',
              '&:hover': {
                color: '#444',
              },
            }}
          >
            {description}
          </Typography>
        </Box>
      </Link>
    </Grid>
  );
};

export default Service;
