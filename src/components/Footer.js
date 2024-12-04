import React from 'react';
import { Box, Typography } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box 
      mt="80px" 
      bgcolor="#FFF3F4"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '120px'
      }}
    >
      <Typography 
        variant="h5" 
        sx={{ 
          fontSize: { lg: '20px', xs: '16px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          py: 2
        }} 
      >
        <CopyrightIcon sx={{ fontSize: 'inherit' }} />
        {currentYear} Miguel Enrique Dasalla | All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
