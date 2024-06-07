import React from "react";
import { Box, Typography, Grid, Button, Avatar, Paper } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface HighPriorityAlertProps {
  title: string;
  date: string;
  loadNo: string;
  billTo: string;
  description: string;
}

const HighPriorityAlert: React.FC<HighPriorityAlertProps> = ({
  title,
  date,
  loadNo,
  billTo,
  description,
}) => {
  return (
    <Paper sx={{ padding: 2, height: "100%", borderRadius: 2 }}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Box display="flex" alignItems="center">
            <Avatar sx={{ marginRight: 1 }}>
              <AccountCircleIcon />
            </Avatar>
            <Typography variant="h6" fontWeight="bold">
              {title}
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" color="textSecondary">
            {date}
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
        Load No: {loadNo}, Bill To: {billTo}
      </Typography>
      <Typography variant="body2" sx={{ marginTop: 1 }}>
        {description}
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}
      >
        <Button
          variant="contained"
          disabled
          style={{
            marginLeft: "23rem",
            textDecoration: "underline", // Add underline style
            textTransform: "none", // Disable uppercase transformation
            color: "navy", // Set text color to blue
            border: "none", // Remove border
            boxShadow: "none", // Remove box shadow
            backgroundColor: "transparent", // Make background transparent
          }}
        >
          Ignore
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: "rgba(26, 56, 117, 1)" }}
        >
          Resolve
        </Button>
      </Box>
    </Paper>
  );
};

export default HighPriorityAlert;
