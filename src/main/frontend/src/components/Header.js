import { AppBar, Toolbar, Typography, Link, Button } from "@mui/material"
import '@fontsource/roboto/500.css'

export const Header = () => {
  return (
    <AppBar
      position="fixed"
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
            href="/users"
            sx={{ my: 1, mx: 1.5, textTransform: "none" }}
          >
            Users
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="/uploadFiles"
            sx={{ my: 1, mx: 1.5, textTransform: "none" }}
          >
            Uploaded Files
          </Link>
        </nav>
        <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  )
}