import React from "react";
import { Typography, Grid, IconButton, Box } from "@mui/material";
import YearlyBreakup from "../components/YearlyBreakup";
import QuickActions from "../components/QuickActions";
import HighPriorityAlert from "../components/AlertCard";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Dashboard: React.FC = () => {
  const primary = "#1976d2";
  const primarylight = "#FFCB49";
  const secondary = "#7464FF";

  const ordersLabels = [
    { label: "Upcoming", value: 38, color: primary },
    { label: "Ongoing", value: 40, color: primarylight },
    { label: "Completed", value: 25, color: secondary },
  ];

  const expensesLabels = [
    { label: "Freight Charge", value: 38, color: primary },
    { label: "Driver Charge", value: 40, color: primarylight },
    { label: "Other Charges", value: 25, color: secondary },
  ];

  return (
    <Grid container spacing={2} sx={{ overflow: "hidden" }}>
      <Grid item xs={12} style={{ position: "relative", marginBottom: "50px" }}>
        <Box style={{ position: "absolute" }}>
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            border: "none",
            borderRadius: "10px",
            backgroundColor: "#fff",
            padding: "2px",
            position: "absolute",
            width: "10%",
            right: "0",
          }}
        >
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
      </Grid>
      <Grid container item xs={12} spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <YearlyBreakup title="Orders" labels={ordersLabels} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <YearlyBreakup title="Trips" labels={ordersLabels} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <YearlyBreakup title="Revenue" labels={ordersLabels} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <YearlyBreakup title="Expenses" labels={expensesLabels} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          Quick Actions
        </Typography>
        <QuickActions />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom fontWeight="bold">
          High Priority Alerts (14)
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <HighPriorityAlert
              title="Driver Raised Concern"
              date="01/06/2024"
              loadNo="12454"
              billTo="Roado Demo Bangalore"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque urna at eros gravida, eget scelerisque urna interdum."
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <HighPriorityAlert
              title="Refer Temp. out of range"
              date="01/06/2024"
              loadNo="12454"
              billTo="Roado Demo Bangalore"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque urna at eros gravida, eget scelerisque urna interdum."
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
