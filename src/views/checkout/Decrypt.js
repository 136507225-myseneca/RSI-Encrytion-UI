import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import SnackbarContent from "./components/Snackbar/SnackbarContent";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

import Check from "@material-ui/icons/Check";

export default function Decrypt() {
  return (
    <React.Fragment>
      <SnackbarContent
        message={
          <span>
            <b>SUCCESS ALERT:</b> Decryted Successfuly and Id found in database
          </span>
        }
        close
        color="success"
        icon={Check}
      />
      <Typography variant="h6" gutterBottom>
        Decrypt with stored private key
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextField
            id="outlined-read-only-input"
            label="Encrypted Id"
            defaultValue="jDtGnpWFGHmOcdWG3jV5arvf158kmCj2JQd8huM0Y2tZ+J23i5rYC3q8aUnGf9SI7BaSIQhRd6I5jtFzOQbH39oBDriXwtTgMxseGm7RBQVhKVs7jkW+BsOJjPVhVjBi9FA31Nqhe0GsNHGvMj5j1d+Cwsr1f03a8/O7zBqF4KQ="
            helperText="This is the encryted Id"
            fullWidth
            rows={4}
            multiline
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Button
            fullWidth
            variant="contained"
            color="secondry"
            component="span"
          >
            Dencrypt and check DataBase
          </Button>
        </Grid>

        <Grid item xs={12} md={12}>
          <TextField
            id="outlined-read-only-input"
            label="File ID"
            defaultValue="4a344376-bc63-41ee-bae6-dfc2691cd72b"
            helperText="This is the decrypted Id"
            fullWidth
            multiline
            rows={2}
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
