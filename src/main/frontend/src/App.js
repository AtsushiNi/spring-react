import { AppBar, CssBaseline, Link, Toolbar, Typography, Button, Container, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  const defaultTheme = createTheme();

  useEffect(() => {
    axios
      .get("/api/v1/users")
      .then(response => setUsers(response.data))
      .catch((e) => console.log(e))
  }, []);

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
          <Typography
            component="h1"
            variant='h2'
            align="left"
            color="text.primary"
          >
            User List
          </Typography>

          <TableContainer component={Paper}>
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
