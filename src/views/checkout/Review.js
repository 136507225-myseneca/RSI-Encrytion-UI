import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import QRCode from "qrcode";

const products = [
  { name: "Product 1", desc: "A nice thing", price: "$9.99" },
  { name: "Product 2", desc: "Another thing", price: "$3.45" },
  { name: "Product 3", desc: "Something else", price: "$6.51" },
  { name: "Product 4", desc: "Best thing of all", price: "$14.11" },
  { name: "Shipping", desc: "", price: "Free" },
];
const addresses = [
  "1 Material-UI Drive",
  "Reactville",
  "Anytown",
  "99999",
  "USA",
];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Encrypted Id
          </Typography>
          <TextField
            id="outlined-read-only-input"
            label="ENCRYPTED"
            defaultValue="JDtGnpWFGHmOcdWG3jV5arvf158kmCj2JQd8huM0Y2tZ+J23i5rYC3q8aUnGf9SI7BaSIQhRd6I5jtFzOQbH39oBDriXwtTgMxseGm7RBQVhKVs7jkW+BsOJjPVhVjBi9FA31Nqhe0GsNHGvMj5j1d+Cwsr1f03a8/O7zBqF4KQ="
            helperText="This is the encrypted Id"
            fullWidth
            multiline
            rows={4}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Button
            // style={{ width: 500 }}
            // fullWidth
            variant="contained"
            color="primary"
            component="span"
          >
            Generate QRCODE
          </Button>
          <br />
        </Grid>
      </Grid>
      <Typography variant="h6" gutterBottom>
        QRCODE
      </Typography>
      <CardMedia
        style={{ height: "500px", paddingTop: "56.25%" }}
        image={require("./qrcode.png")}
        title="QRCODE"
      />
    </React.Fragment>
  );
}
