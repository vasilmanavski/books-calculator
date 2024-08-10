import { Box, Typography } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '0 20px',
      }}
    >
      <BookIcon sx={{ fontSize: 40, color: '#333' }} />
      <Typography variant="h6">
        Books Calculator
      </Typography>
    </Box>
  );
};

export default Header;