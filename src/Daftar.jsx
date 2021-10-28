import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import pms from "./pms.jpg";
import { CssBaseline, makeStyles, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Daftar = () => {
  const [state, setState] = useState({
    sensitif: true,
    labil: false,
    cemas: false,
    saraf: false,
    depresiri: false,
    nyeri: false,
    endema: false,
    perut: false,
    berat: false,
    bengkak: false,
    pusing: false,
    Kelelahan: false,
    Lapar: false,
    jantung: false,
    pinsang: false,
    depresi: false,
    tidur: false,
    stres: false,
    verbalisasi: false,
    menangis: false,
    pelupa: false,
    lemah: false,
    bingung: false,
    bundir: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const {
    sensitif,
    labil,
    cemas,
    saraf,
    depresiri,
    nyeri,
    endema,
    perut,
    berat,
    bengkak,
    pusing,
    Kelelahan,
    Lapar,
    jantung,
    pinsang,
    depresi,
    tidur,
    stres,
    verbalisasi,
    menangis,
    pelupa,
    lemah,
    bingung,
    bundir,
  } = state;
  const error =
    [
      sensitif,
      labil,
      cemas,
      saraf,
      depresiri,
      nyeri,
      endema,
      perut,
      berat,
      bengkak,
      pusing,
      Kelelahan,
      Lapar,
      jantung,
      pinsang,
      depresi,
      tidur,
      stres,
      verbalisasi,
      menangis,
      pelupa,
      lemah,
      bingung,
      bundir,
    ].filter((v) => v).length !== 2;

  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={12}
          md={12}
          style={{
            background: "#C16C6C",
            height: "50vh",
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
            Diagnosa Premenstrual Syndrome
          </Typography>
          <Grid container justifyContent="center">
            <Grid item marginTop="5ch" xs={10} md={9}>
              <Paper
                elevation={2}
                style={{
                  padding: 8,
                  marginTop: -30,
                }}
              >
                <Grid container>
                  <Grid item xs={12} md={12} textAlign="center">
                    <h4>Pilih Gejala</h4>
                  </Grid>
                  <Grid item>
                    <Box sx={{ display: "flex" }}>
                      <FormControl
                        sx={{ m: 3 }}
                        component="fieldset"
                        variant="standard"
                      >
                        <FormGroup>
                          <Grid
                            container
                            justifyContent="center"
                            direction="row"
                          >
                            <Grid item xs={12} md={4.5}>
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={sensitif}
                                      onChange={handleChange}
                                      name="sensitif"
                                    />
                                  }
                                  label="Sensitif"
                                />
                              </Grid>
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={labil}
                                      onChange={handleChange}
                                      name="labil"
                                    />
                                  }
                                  label="Perasaan Labil"
                                />
                              </Grid>
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={cemas}
                                      onChange={handleChange}
                                      name="cemas"
                                    />
                                  }
                                  label="Perasaan Cemas"
                                />
                              </Grid>
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={saraf}
                                      onChange={handleChange}
                                      name="saraf"
                                    />
                                  }
                                  label="Saraf Tegang"
                                />
                              </Grid>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={depresiri}
                                    onChange={handleChange}
                                    name="depresiri"
                                  />
                                }
                                label="Depresi Ringan"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={nyeri}
                                    onChange={handleChange}
                                    name="nyeri"
                                  />
                                }
                                label="Nyeri Pada Payudara"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={endema}
                                    onChange={handleChange}
                                    name="endema"
                                  />
                                }
                                label="Endema (Pembengkakan)"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={perut}
                                    onChange={handleChange}
                                    name="perut"
                                  />
                                }
                                label="perut kembung"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={berat}
                                    onChange={handleChange}
                                    name="berat"
                                  />
                                }
                                label="Peningkatan Berat Badan"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={bengkak}
                                    onChange={handleChange}
                                    name="bengkak"
                                  />
                                }
                                label="Pembengkakan Tangan dan Kaki"
                              />
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={pusing}
                                      onChange={handleChange}
                                      name="pusing"
                                    />
                                  }
                                  label="Pusing Kepala"
                                />
                              </Grid>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={Kelelahan}
                                    onChange={handleChange}
                                    name="Kelelahan"
                                  />
                                }
                                label="Sering Kelelahan"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={Lapar}
                                    onChange={handleChange}
                                    name="Lapar"
                                  />
                                }
                                label="Rasa Lapar Terus-menerus/Nafsu makan bertambah"
                              />
                            </Grid>
                            <Grid item xs={12} md={1}></Grid>
                            <Grid item xs={12} md={4.5}>
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={jantung}
                                      onChange={handleChange}
                                      name="jantung"
                                    />
                                  }
                                  label="Jantung Berdebar Kencang"
                                />
                              </Grid>
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={pinsang}
                                      onChange={handleChange}
                                      name="pinsang"
                                    />
                                  }
                                  label="pinsang"
                                />
                              </Grid>
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={depresi}
                                      onChange={handleChange}
                                      name="depresi"
                                    />
                                  }
                                  label="Depresi"
                                />
                              </Grid>
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={tidur}
                                      onChange={handleChange}
                                      name="tidur"
                                    />
                                  }
                                  label="Gangguan Tidur"
                                />
                              </Grid>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={stres}
                                    onChange={handleChange}
                                    name="stres"
                                  />
                                }
                                label="Stres"
                              />
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={verbalisasi}
                                    onChange={handleChange}
                                    name="verbalisasi"
                                  />
                                }
                                label="Sulit Dalam Mengucapkan Kata-Kata (Verbalisasi)"
                              />
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={menangis}
                                      onChange={handleChange}
                                      name="menangis"
                                    />
                                  }
                                  label="Ingin Menangis"
                                />
                              </Grid>
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={pelupa}
                                      onChange={handleChange}
                                      name="pelupa"
                                    />
                                  }
                                  label="Pelupa"
                                />
                              </Grid>
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={lemah}
                                      onChange={handleChange}
                                      name="lemah"
                                    />
                                  }
                                  label="Lemah"
                                />
                              </Grid>
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={bingung}
                                      onChange={handleChange}
                                      name="bingung"
                                    />
                                  }
                                  label="Bingung"
                                />
                              </Grid>
                              <Grid item xs={12} md={12}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={bundir}
                                      onChange={handleChange}
                                      name="bundir"
                                    />
                                  }
                                  label="Rasa Ingin Bunuh diri"
                                />
                              </Grid>
                              <Button
                                variant="contained"
                                sx={{ m: 3, width: "25ch" }}
                                style={{
                                  background: "#C16C6C",
                                  boxSizing: "border-box",
                                  borderRadius: "12px",
                                }}
                                // onClick={() => history.push("/home")}
                              >
                                Mulai Diagnosa
                              </Button>
                            </Grid>
                          </Grid>
                        </FormGroup>
                      </FormControl>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Daftar;
