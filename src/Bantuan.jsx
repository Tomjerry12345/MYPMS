import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import pms from "./pms.jpg";
import { CssBaseline, makeStyles, Paper } from "@mui/material";

const Bantuan = () => {
  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={12}
          md={12}
          style={{
            background: "#C16C6C",
            height: "70vh",
            width: "100vw",
            paddingTop: "15vh",
          }}
        >
          <Typography
            variant="h5"
            textAlign="center"
            style={{
              fontFamily: "Mulish",
              marginLeft: "30px",
            }}
          >
            Bantuan
          </Typography>
          <Grid item marginTop="5ch">
            <Paper
              elevation={2}
              style={{
                marginLeft: 25,
                marginRight: 25,
                padding: 8,
                marginTop: -30,
                background: "#e6edf4",
              }}
            >
              <Grid container marginTop="0ch">
                <Grid item xs={12} md={8}>
                  <p>
                    Premenstrual syndrome (PMS) atau sindrom pramenstruasi
                    adalah gejala-gejala yang dialami wanita sebelum memasuki
                    masa bulanan (menstruasi). Gejala tersebut berupa perubahan
                    fisik, perubahan perilaku, dan perubahan emosi. Umumnya,
                    gejala PMS muncul 1–2 minggu sebelum hari pertama menstruasi
                    setiap bulannya.
                  </p>
                </Grid>
                <Grid item xs={0} md={0.5}></Grid>
                <Grid
                  item
                  xs={12}
                  md={3}
                  display="flex"
                  justifyContent="center"
                >
                  <Box
                    component="img"
                    sx={{
                      width: {
                        md: 250,
                        xs: 290,
                      },
                    }}
                    alt="The house from the offer."
                    src={pms}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Bantuan;
