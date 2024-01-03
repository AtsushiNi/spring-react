import { AppBar, CssBaseline, Link, Toolbar, Typography, Button, Container, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';

function App() {

  const defaultTheme = createTheme();

  const rows = [
    { id: 1, userName: "佐藤 太郎", division: "営業課" },
    { id: 2, userName: "田中 花子", division: "人事課" },
    { id: 3, userName: "鈴木 次郎", division: "開発課" },
    { id: 4, userName: "山田 みゆき", division: "営業課" },
    { id: 5, userName: "小林 光太", division: "総務課" },
    { id: 6, userName: "中村 真理", division: "開発課" },
    { id: 7, userName: "林 良一", division: "人事課" },
    { id: 8, userName: "渡辺 美香", division: "総務課" },
    { id: 9, userName: "斉藤 勇太", division: "開発課" },
    { id: 10, userName: "岡田 さやか", division: "営業課" },
    { id: 11, userName: "佐々木 裕子", division: "人事課" },
    { id: 12, userName: "松本 啓太", division: "総務課" },
    { id: 13, userName: "井上 貴子", division: "開発課" },
    { id: 14, userName: "三浦 雄一", division: "営業課" },
    { id: 15, userName: "高橋 みさ", division: "人事課" },
    { id: 16, userName: "西村 大介", division: "開発課" },
    { id: 17, userName: "松田 美希", division: "総務課" },
    { id: 18, userName: "枝村 和彦", division: "開発課" },
    { id: 19, userName: "大西 由美", division: "営業課" },
    { id: 20, userName: "石井 勇介", division: "人事課" }
  ]

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
                {rows.map((row) => (
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
