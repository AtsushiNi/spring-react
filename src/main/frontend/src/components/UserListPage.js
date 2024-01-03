import { useEffect, useState } from 'react';
import axios from 'axios';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { Grid, Typography, Button, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"

export const UserListPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/users")
      .then(response => setUsers(response.data))
      .catch((e) => console.log(e))
  }, []);

  const handleFileChange = (event) => {
    const csvFile = event.target.files[0];

    if(!csvFile) {
      return
    }
    if(!csvFile.name.endsWith(".csv")) {
      alert("CSVファイルを選択してください")
      return
    }

    const formData = new FormData();
    formData.append("file", csvFile);

    axios.post("/api/v1/users/upload", formData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }

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
    <>
      <Grid container justifyContent="space-between" alignItems="flex-end">
        <Grid item>
          <Typography
            variant='h4'
            align="left"
            color="text.primary"
          >
            User List
          </Typography>
        </Grid>

        <Grid item>
          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            Upload CSV
            <VisuallyHiddenInput type="file" accept='.csv' onChange={handleFileChange} />
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
    </>
  )
}