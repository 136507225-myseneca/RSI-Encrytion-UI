import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//     },
//   },
//   input: {
//     display: "none",
//   },
// }));

export default function AddressForm() {
  // const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        File Upload
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <input
            style={{ display: "none" }}
            accept="image/*"
            // className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button
              style={{ width: 200 }}
              variant="contained"
              color="primary"
              component="span"
            >
              Upload
            </Button>
          </label>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Button variant="contained" color="secondry" component="span">
            Generate Id
          </Button>
        </Grid>

        <Grid item xs={12}>
          {/* <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
          /> */}
          <TextField
            id="outlined-read-only-input"
            label="ID"
            defaultValue="4a344376-bc63-41ee-bae6-dfc2691cd72b"
            helperText="This is the unique id generated of file"
            multiline
            style={{ width: 300 }}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
