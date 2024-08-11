import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import TypingAnimation from 'src/components/TypingAnimation';

const words = ['week', 'month', 'year', 'lifetime'];

const DynamicText = () => {
  const [currentWord, setCurrentWord] = useState('week');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(prevWord => {

        const currentIndex = words.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 1750); // Change word every X seconds

    return () => clearInterval(interval);
  }, [words]);

  return (
    <Typography
      variant='h2'
      component='h1'
      sx={{
        position: 'relative',
        zIndex: 2,
        color: '#fff',
        padding: '0 20px',
        fontWeight: 'bold',
      }}
    >
      How many books can you devour in a
      <TypingAnimation text={currentWord} />
    </Typography>
  );
};

export default DynamicText;