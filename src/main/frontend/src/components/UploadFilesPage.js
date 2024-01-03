import { useEffect, useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, Button, Grid, Paper, Step, StepLabel, Stepper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Dropzone from 'dropzone';
import { SimpleModal } from './SimpleModal';
import 'dropzone/dist/dropzone.css'

export const UploadFilesPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [file, setFile] = useState();

  const handleCloseModal = () => {
    setFile(null);
    setModalOpen(false);
  }

  const handleUpload = () => {
    // TODO: update file
    setActiveStep(1);
  }

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

  const onEntered = () => {
    let dropzone = new Dropzone(
      "#dropzone",
      {
        url: "/test", // 実際はここでアップロードしない
        method: "GET",
        autoProcessQueue: false,
        maxFiles: 1,
        acceptedFiles: "text/csv"
      }
    );
    dropzone.on("addedfile", selectedFile => setFile(selectedFile));
  }

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
            onEntered={onEntered}
            title="Upload new CSV File"
          >
            <Box sx={{ width: "100%" }}>
              <Stepper activeStep={activeStep} alternativeLabel >
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
            {activeStep === 0
              ? (
                <>
                  <form className='dropzone' id="dropzone" style={{ border: "1px solid silver", marginTop: "20px", background: "#f0f0f0" }}></form>
                  <Box display="flex" justifyContent="flex-end" sx={{ my: 3 }}>
                    <Button color="inherit" onClick={handleCloseModal} sx={{ mx: 2 }}>cancel</Button>
                    <Button variant="contained" disabled={!file} onClick={handleUpload}>Upload</Button>
                  </Box>
                </>
              )
              : activeStep === 1
                ? (<></>)
                : (<></>)
            }
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