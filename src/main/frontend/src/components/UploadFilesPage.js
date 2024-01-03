import { useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, Button, Grid, Paper, Step, StepLabel, Stepper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { SimpleModal } from './SimpleModal';

export const UploadFilesPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => setModalOpen(false);

  const uploadedFiles = [
    { id: 1, originalFileName: "file1.csv", uploadedDate: (new Date()).toLocaleString() },
    { id: 2, originalFileName: "file2.csv", uploadedDate: (new Date()).toLocaleString() }
  ]

  const steps = [
    'Upload new CSV file',
    'Please wait for processing',
    'Verify that the changes are correct',
    'Complete !',
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
          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} onClick={() => setModalOpen(true)}>
            Upload CSV
          </Button>
          <SimpleModal
            open={modalOpen}
            onClose={handleCloseModal}
            title="Upload new CSV File"
          >
            <Box sx={{ width: "100%" }}>
              <Stepper activeStep={0} alternativeLabel >
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
            <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </Typography>
          </SimpleModal>
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