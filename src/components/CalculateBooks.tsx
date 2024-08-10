import React, { useCallback, useMemo, useState } from 'react';
import { Alert, Box, Button, FormControl, InputLabel, MenuItem, Select, Snackbar, Typography } from '@mui/material';

const minutesOptions = [5, 10, 15, 20, 30, 40, 50, 60];

const speedOptions = [
  { value: '175', label: '200 wpm | Sloooooow' },
  { value: '200', label: '200 wpm | Slow' },
  { value: '250', label: '250 wpm | Average' },
  { value: '325', label: '325 wpm | Fast' },
  { value: '350', label: '325 wpm | Very fast' },
];

const periodOptions = [
  '1 month',
  '3 months',
  '6 months',
  '1 year',
  '3 years',
];

const CalculateBooks = () => {
  const [minutes, setMinutes] = useState(0);
  const [speed, setSpeed] = useState('');
  const [period, setPeriod] = useState('');
  const [booksRead, setBooksRead] = useState<number>(null);
  const [isCalculateClicked, setIsCalculateClicked] = useState<boolean>(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const onSubmit = useCallback((e) => {
    e.preventDefault();

    if (minutes == 0 || speed == '' || period == '') {

      setSnackbarMessage('Please fill in all fields.');
      setSnackbarOpen(true);

      return;
    }

    setSnackbarMessage('');
    setSnackbarOpen(false);

    setIsCalculateClicked(!isCalculateClicked);
  }, [minutes, speed, period]);

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const calculateBooks = useMemo(() => {
    const wordsPerMinute = parseInt(speed, 10);

    const periodMonths = {
      '1 month': 1,
      '3 months': 3,
      '6 months': 6,
      '1 year': 12,
      '3 years': 36,
    }[period];

    const daysInPeriod = periodMonths * 30; // Approximate number of days
    const totalMinutes = minutes * daysInPeriod;
    const totalWords = totalMinutes * wordsPerMinute;
    const averageWordsPerBook = 70000; // Assuming an average book has 50,000 words
    const numberOfBooks = Math.ceil(totalWords / averageWordsPerBook);

    setBooksRead(numberOfBooks);

    return numberOfBooks;
  }, [minutes, speed, period]);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Box sx={{ textAlign: 'center' }}>
        <h2>Calculate Your Reading</h2>
      </Box>
      <Box sx={{ textAlign: 'center', width: '25%' }}>
        <form
          onSubmit={onSubmit}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <FormControl fullWidth>
              <InputLabel id='minutes-label'>Minutes per Day</InputLabel>
              <Select
                labelId='minutes-label'
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                label='Minutes per Day'
              >
                {minutesOptions.map(option => (
                  <MenuItem key={option} value={option}>{option} minutes</MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id='speed-label'>Reading Speed</InputLabel>
              <Select
                labelId='speed-label'
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
                label='Reading Speed'
              >
                {speedOptions.map(option => (
                  <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id='period-label'>Period</InputLabel>
              <Select
                labelId='period-label'
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                label='Period'
              >
                {periodOptions.map(option => (
                  <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
              </Select>
            </FormControl>

            {!isCalculateClicked &&
            <Button type='submit' variant='contained' color='primary'>
              Calculate
            </Button>}
          </div>
        </form>

        {!!booksRead && isCalculateClicked && (
          <Box sx={{ marginTop: '32px' }}>
            <Typography variant='h4' sx={{
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
              letterSpacing: '0.5px',
            }}>
              You will read approximately {calculateBooks} books.
            </Typography>
          </Box>
        )}
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000} // Duration in milliseconds
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} // Position snackbar at the bottom center
        sx={{ mt: 2 }} // Add margin-top to ensure it appears below the button
      >
        <Alert onClose={handleCloseSnackbar} severity='error' sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CalculateBooks;