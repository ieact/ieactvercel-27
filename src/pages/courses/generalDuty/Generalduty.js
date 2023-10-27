import { Box, Button, Container, Grid, List, ListItem, Paper, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";

function createData(name, details) {
  return { name, details };
}
const rows = [
  createData("Duration", "90 Days"),
  createData("Study Level", "12TH"),
  createData("Experience", "0 to 1 Years"),
  createData("Minimum Job Entry Age", "18 Years"),
  createData("NSQF Level", "4"),
  createData("Role Description", ""),
];
const GeneralDuty = () => {
  return (
    <>
      <Box
        width="100vw"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          paddingBottom: 3,
          background: "linear-gradient(140deg, #f6d365 0%, #fda085 97%)",
          height: { xs: 150, sm: 125, md: 180, lg: 100 },
        }}
      >
        <Typography variant="h3" color="secondary">
          General Duty
        </Typography>
      </Box>

      <Box
        sx={{
          background: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={7} lg={8}>
              <Box
                sx={{
                
                  background: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
                }}
              >
                <img
                  src={"/courses/electri.svg"}
                  alt="Image"
                  style={{ width: "100%" }}
                />
                <Typography variant="h6">
                  <List>
                    <ListItem>• Sector: Healthcare</ListItem>
                    <ListItem>• Sub Sector: General Duty Assistant</ListItem>
                    <ListItem>• Occupation: Nursing Care Assistant</ListItem>
                    <ListItem>• Reference ID: CON/Q0602</ListItem>
                    <ListItem>• Revised: NCO-2004/7137.2</ListItem>
                  </List>
                </Typography>
                <Typography variant="body1" lineHeight={2}>
                  General Duty Assistant-Healthcare (GDA) are also known as "Nursing Care Assistant," "Nursing Assistant," "Nursing Aide," "Bedside Assistant" or "Orderly" when working in a hospital environment.
                </Typography>
                <Typography variant="h4" lineHeight={1.5}>
                  Brief Description
                </Typography>
                <Typography variant="body1" lineHeight={2}>
                  Individual on the job provides patient care and helps maintain a suitable environment. Some of the key responsibilities of the General Duty Assistant are to provide the patient's daily care, patient's comfort, patient's safety, and patient's health needs.
                </Typography>
                <Typography variant="h4" lineHeight={1.5}>
                  Personal Attributes:
                </Typography>
                <Typography variant="body1" lineHeight={2}>
                  This job requires the individual to work in collaboration with Doctors and Nurses and other healthcare providers and deliver the healthcare services as suggested by them. The individual should be result-oriented. The individual should also be able to demonstrate basic patient care skills, communication skills, and ethical behavior. The individual should be willing to work in wards or clinics in shifts.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={4}>
              <Paper>
                <TableContainer>
                  <Table
                    sx={{
                      minWidth: 250,
                      background: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
                    }}
                    aria-label="caption table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell align="center" colSpan={2}>
                          General Duty Assistant
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Job Role</TableCell>
                        <TableCell align="right">General Duty Assistant</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.details}</TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell align="right" colSpan={2}>
                          <Button>Apply now</Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default GeneralDuty;