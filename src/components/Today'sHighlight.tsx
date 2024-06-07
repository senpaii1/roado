import React from "react";
import {
  Typography,
  Box,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Card,
  CardContent,
} from "@mui/material";

const TodayHighlight = () => {
  return (
    <Box sx={{ p: 4, overflowY: "hidden" }}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          textDecoration: "underline",
          fontWeight: "bold",
          marginBottom: "0px",
          marginTop: "10px",
        }}
      >
        Today's Highlights (14)
      </Typography>
      <Typography variant="body2" gutterBottom>
        June 8, 2024
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Card sx={{ width: "calc(50% - 8px)" }}>
          <CardContent>
            <Typography variant="subtitle2" gutterBottom>
              Income
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ color: "green", fontSize: "18px" }}
            >
              100000 CAD
            </Typography>
            <Typography variant="body2">2 payments received</Typography>
          </CardContent>
        </Card>

        <Card sx={{ width: "calc(50% - 8px)" }}>
          <CardContent>
            <Typography variant="subtitle2" gutterBottom>
              Expenses
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ color: "red", fontSize: "18px" }}
            >
              50000 CAD
            </Typography>
            <Typography variant="body2">5 payments paid</Typography>
          </CardContent>
        </Card>
      </Box>

      <Typography
        variant="h6"
        gutterBottom
        sx={{
          display: "flex",
          alignItems: "center",
          fontWeight: "bold",
          mb: 1,
        }}
      >
        Completed Activities (14)
        <Typography
          variant="body2"
          color="primary"
          sx={{
            textDecoration: "underline",
            marginLeft: "auto",
            color: "black",
          }}
        >
          View All
        </Typography>
      </Typography>
      <Divider />
      <TableContainer component={Paper} sx={{ mt: 1 }}>
        <Table sx={{ minWidth: 200 }}>
          <TableBody>
            {/* Demo rows */}
            <TableRow>
              <TableCell sx={{ pr: 2 }}>
                <span style={{ color: "blue" }}>Gurpreet Singh</span> (Dispatch
                team) has created Load No, I-I-AAA1325
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ pr: 2 }}>
                <span style={{ color: "blue" }}>Aman</span> Picked Up goods at
                Location_Name for Load No. I-I-AAA-1325
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ pr: 2 }}>
                <span style={{ color: "blue" }}>Gurpreet Singh</span> (Dispatch
                team) has created Load No, I-I-AAA1325
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ pr: 2 }}>
                <span style={{ color: "blue" }}>Gurpreet Singh</span> (Dispatch
                team) has created Load No, I-I-AAA1325
              </TableCell>
            </TableRow>
            {/* Add more demo rows here */}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography
        variant="h6"
        gutterBottom
        sx={{
          display: "flex",
          alignItems: "center",
          fontWeight: "bold",
          mt: 3,
          mb: 1,
        }}
      >
        Scheduled Activities (14)
        <Typography
          variant="body2"
          color="primary"
          sx={{
            textDecoration: "underline",
            marginLeft: "auto",
            color: "black",
          }}
        >
          View All
        </Typography>
      </Typography>
      <Divider />
      <TableContainer component={Paper} sx={{ mt: 1 }}>
        <Table sx={{ minWidth: 200 }}>
          <TableBody>
            {/* Demo rows */}
            <TableRow>
              <TableCell sx={{ pr: 2 }}>
                <span style={{ color: "blue" }}>Gurpreet Singh</span> (Dispatch
                team) has created Load No, I-I-AAA1325
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ pr: 2 }}>
                <span style={{ color: "blue" }}>Gurpreet Singh</span> (Dispatch
                team) has created Load No, I-I-AAA1325
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ pr: 2 }}>
                <span style={{ color: "blue" }}>Gurpreet Singh</span> (Dispatch
                team) has created Load No, I-I-AAA1325
              </TableCell>
            </TableRow>
            <TableRow>
              {/* <TableCell sx={{ pr: 2 }}>
                <span style={{ color: "blue" }}>Gurpreet Singh</span> (Dispatch
                team) has created Load No, I-I-AAA1325
              </TableCell> */}
            </TableRow>
            {/* Add more demo rows here */}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TodayHighlight;
