import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides:{
            root:{
                borderRadius: '8px',
                backgroundColor: 'white',
                margin: "1rem",
                display: "grid",
                boxSizing: "border-box",
                width: "fit-content",
                justifyContent: "center",
                alignContent: "center",
               
            },
        },
    },
  
        MuiLink: {
            styleOverrides:{
                root:{
                    color: 'black'

                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {

                    backgroundColor: '#489c51',
                    color: 'black',
                    borderRadius: '8px',
                    margin: "1rem",
                    fontFamily: "Roboto",
                    
                }
            }

        },
        MuiContainer: {
          styleOverrides: {
              root: {

                  backgroundColor: '#489c51',
                  color: 'black',
                  borderRadius: '8px',
                  margin: "1rem",
                  fontFamily: "Roboto",
                  justifyContent: "center",
                  width: "50rem"
                  
              }
          }

      }
    },
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: '#000000', // Change to your secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 16,
  },
});

export default theme;
