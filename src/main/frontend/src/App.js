import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { AppBar, Button, Container, CssBaseline, Grid, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const defaultTheme = createTheme();

  useEffect(() => {
    axios
      .get("/api/v1/users")
      .then(response => setUsers(response.data))
      .catch((e) => console.log(e))
  }, []);

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles styles={{ ul: { marign: 0, padding: 0, listStyle: 'none' } }} />
        <CssBaseline />
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Toolbar sx={{ flexWrap: 'wrap' }}>
            <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
              Admin Page
            </Typography>
            <nav>
              <Link
                variant="button"
                color="text.primary"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
              >
                Link
              </Link>
              <Link
                variant="button"
                color="text.primary"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
              >
                Link
              </Link>
              <Link
                variant="button"
                color="text.primary"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
              >
                Link
              </Link>
            </nav>
            <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
              Login
            </Button>
          </Toolbar>
        </AppBar>

        <Container maxWidth="md" component="main" sx={{ mx: 3, my: 3 }}>
          <Grid container justifyContent="space-between" alignItems="flex-end">
            <Grid item>
              <Typography
                component="h1"
                variant='h2'
                align="left"
                color="text.primary"
              >
                User List
              </Typography>
            </Grid>

            <Grid item>
              <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                Upload CSV
                <VisuallyHiddenInput type="file" />
              </Button>
            </Grid>
          </Grid>

          <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table sx={{ minWith: 650 }} aria-label="user table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>User Name</TableCell>
                  <TableCell>Division</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.userName}</TableCell>
                    <TableCell>{row.division}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
