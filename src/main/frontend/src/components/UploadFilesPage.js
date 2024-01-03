import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

export const UploadFilesPage = () => {
    const uploadedFiles = [
        {id: 1, originalFileName: "file1.csv", uploadedDate: (new Date()).toLocaleString()},
        {id: 2, originalFileName: "file2.csv", uploadedDate: (new Date()).toLocaleString()}
    ]
    return (
    <>
      <Grid container justifyContent="space-between" alignItems="flex-end">
        <Grid item>
          <Typography
            variant='h4'
            align="left"
            color="text.primary"
          >
            Uploaded Files
          </Typography>
        </Grid>

        <Grid item>
          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            Upload CSV
          </Button>
        </Grid>
      </Grid>

      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table sx={{ minWith: 650 }} aria-label="user table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>File Name</TableCell>
              <TableCell>Uploaded Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {uploadedFiles.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.originalFileName}</TableCell>
                <TableCell>{row.uploadedDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
    )
}