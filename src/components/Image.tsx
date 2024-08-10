import { Box } from '@mui/material';
import DynamicText from 'src/components/DynamicText';

const Image = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(38vh - 50px)',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url(src/assets/image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        textAlign: 'center',
        padding: '0 20px',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(128, 128, 128, 0.5)', // Semi-transparent grey overlay
          zIndex: 1,
        }}
      />
      <DynamicText />
    </Box>
  );
};

export default Image;