import React from "react";
import { Box, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

const actions = [
  { icon: <AddCircleOutlineIcon />, label: "Create Indents" },
  { icon: <DirectionsCarIcon />, label: "Add Vehicle" },
  { icon: <LocalShippingIcon />, label: "Add Trailer" },
  { icon: <DriveEtaIcon />, label: "Add Driver" },
  { icon: <IndeterminateCheckBoxIcon />, label: "Add Indents" },
];

const QuickActions: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: 3,
        border: "1px solid aliceblue",
        borderRadius: "16px",
        backgroundColor: "white",
      }}
    >
      {actions.map((action, index) => (
        <Box key={index} sx={{ textAlign: "center" }}>
          {action.icon}
          <Typography variant="body1" sx={{ fontWeight: "bold", marginTop: 1 }}>
            {action.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default QuickActions;
