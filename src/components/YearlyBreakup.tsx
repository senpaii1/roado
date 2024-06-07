import { useTheme } from "@mui/material/styles";
import { Grid, Stack, Typography, Box, Paper } from "@mui/material";
import DashboardCard from "./DashboardCard";
import Chart from "react-apexcharts";

interface YearlyBreakupProps {
  title: string;
  labels: { label: string; value: number; color: string }[];
}

const YearlyBreakup = ({ title, labels }: YearlyBreakupProps) => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = "#FFCB49";
  const secondary = "#7464FF";

  // chart options
  const optionscolumnchart: any = {
    chart: {
      type: "donut",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      // height: 250,
    },
    colors: [primary, primarylight, secondary],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: "75%",
          background: "transparent",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "18px",
              color: "#adb0bb",
              offsetY: -10,
            },
            value: {
              show: true,
              fontSize: "16px",
              color: "#000000",
              offsetY: -5,
              formatter: function (val: any) {
                return val.toString();
              },
            },
            total: {
              show: true,
              showAlways: true,
              label: "Total",
              fontSize: "16px",
              color: "#adb0bb",
              formatter: function (w: any) {
                return w.globals.seriesTotals
                  .reduce((a: number, b: number) => a + b, 0)
                  .toString();
              },
            },
          },
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light",
      fillSeriesColor: false,
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 120,
          },
        },
      },
    ],
  };

  return (
    <Paper sx={{ borderRadius: 5 }}>
      <DashboardCard title={title}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Chart
              options={optionscolumnchart}
              series={labels.map((label) => label.value)}
              type="donut"
              height={160}
              width={"100%"}
            />
          </Grid>
          <Grid item>
            <Stack spacing={1} direction="column">
              {labels.map((label) => (
                <Box
                  key={label.label}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    background: `linear-gradient(to right, white, ${label.color})`,
                    padding: 1,
                    borderRadius: 4,
                    marginBottom: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    color={label.color === primarylight ? "#000000" : "#000000"}
                    sx={{ marginLeft: 1, fontWeight: 500 }}
                  >
                    {label.label}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color={label.color === primarylight ? "#000000" : "#ffffff"}
                    sx={{ marginRight: 1, fontWeight: 500 }}
                  >
                    {label.value}%
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </DashboardCard>
    </Paper>
  );
};

export default YearlyBreakup;
