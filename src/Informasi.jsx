import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import pms from "./pms.jpg";
import { CssBaseline, makeStyles, Paper } from "@mui/material";

const Informasi = () => {
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
            color="white"
            style={{
              fontFamily: "Mulish",
              marginLeft: "30px",
            }}
          >
            Apa itu
          </Typography>

          <Typography
            variant="h3"
            color="white"
            style={{
              fontFamily: "Mulish",
              marginLeft: "30px",
            }}
          >
            Premenstrual Syndrome?
          </Typography>
          <Grid item marginTop="5ch">
            <Paper
              elevation={2}
              style={{
                marginLeft: 25,
                marginRight: 25,
                padding: 8,
                marginTop: -30,
              }}
            >
              <Grid
                container
                marginTop="0ch"
                direction={{
                  xs: "column-reverse",
                  md: "row",
                }}
              >
                <Grid item xs={0.2} md={0.2} />
                <Grid item xs={11.8} md={8}>
                  <p>
                    &emsp; Premenstrual syndrome (PMS) adalah suatu keadaan
                    dimana seorang wanita merasakan beberapa perubahan pada
                    tubuh baik secara fisik, emosi, maupun perilaku yang terjadi
                    sebelum maupun sedang menstruasi, sehingga akan mengganggu
                    aktivitas harian dan selanjutnya akan menghilang bersamaan
                    dengan selesainya fase menstruasi.
                  </p>
                </Grid>
                <Grid item xs={0} md={0.5}></Grid>
                <Grid item xs={12} md={3} justifyContent="center">
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

export default Informasi;
