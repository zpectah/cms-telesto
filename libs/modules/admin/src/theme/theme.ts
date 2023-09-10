import { createTheme } from '@mui/material/styles';

const adminTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overflow: 'hidden',
        },
      },
    },
  },
});

export { adminTheme };
