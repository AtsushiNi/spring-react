import { Container, CssBaseline } from '@mui/material';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { UserListPage } from './components/UserListPage';
import { UploadFilesPage } from './components/UploadFilesPage';

function App() {

  const defaultTheme = createTheme();

  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles styles={{ ul: { marign: 0, padding: 0, listStyle: 'none' } }} />
        <CssBaseline />

        <Header />

        <Container maxWidth="md" component="main" sx={{ mx: 3, mt: 12, mb: 4 }}>
          <BrowserRouter>
            <Routes>
              <Route index element={<UserListPage />} />
              <Route index path="/users" element={<UserListPage />} />
              <Route path="/uploadFiles" element={<UploadFilesPage />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
