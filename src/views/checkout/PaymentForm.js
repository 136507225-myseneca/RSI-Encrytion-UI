import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Keys Generation and Encryption
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
          <Button
            // style={{ width: 500 }}
            fullWidth
            variant="contained"
            color="secondry"
            component="span"
          >
            Generate keys
          </Button>
        </Grid>
        {/* <Grid item xs={12} sm={6}></Grid> */}

        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-read-only-input"
            label="PRIVATE KEY"
            defaultValue="-----BEGIN RSA PRIVATE KEY-----
            MIICWgIBAAKBgE52N+Ap9WL81beS8IVT22/mtyzBmmDg4C3iKEQgcHSt/2iHBLaL
            YWv1Je3UTFfVQPu88SnNjs4Mq74nxKnKNCvqBZ0AAQQPrJbqx3vUbaVQZlj4Pnbw
            eCGHMsO3v3K2+BX++5PuEkDz/MhLmDSFh6IXx4/zCiK+dux7ogOrGrhFAgMBAAEC
            gYBHIoUMFd5kzWeR1IV9y4ZCUME3sZseRCLbVpQ9F8/86ReLlAXg3kMIFq05j2Vb
            qHsPAMEArl3PT8uRTgrOCQX83U+RmcGPdKRAnBlfzS0udmp6mgxzGWuxVuWYMcXB
            7Z460OWrq6neA+NZNbAk035hG4B+IvItp6dprpwd9OJ/7QJBAJFw+OphwCS6YiuD
            RIFn5uMt87S5raM9PF4GIYCKY77cVaiwW3zVfApAWacroB6vAz/OqYRyjs1+eDG6
            YG3aMKsCQQCKGvbPqNVpY8yklFnVURoDy4t049LCbEoIsDUKSoDZxF0jDOUnFdJK
            xW/FXZr3FzHrkJwAD0d7mf4Y0qpkNBrPAkAMpkq/9+iCSUOojS40IxlNwP1lRpD3
            lafedaIMT/0E6Jz6ovwSC29SZO5nP8AZaxdZQVw1DNGmxc0mZhNk+okpAkBVxd9q
            I6K//NK5mMWeXet5Ve58H47jX5wvfzjB9nnGRlXOEhE0UDI2bB86BiPbuJUxh7PL
            ubGcy4xr4FMhPtczAkB3qjYlSTG3yC8xka2UorgYumFKbFKhf59K4kc1C+ofa/+E
            26UiErtnuECIBN5y0fu5/owOb3entuqj8B+pNqHx
            -----END RSA PRIVATE KEY-----"
            helperText="This is the unique private key"
            fullWidth
            rows={8}
            multiline
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-read-only-input"
            label="PUBLIC KEY"
            defaultValue="-----BEGIN PUBLIC KEY-----
            MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgE52N+Ap9WL81beS8IVT22/mtyzB
            mmDg4C3iKEQgcHSt/2iHBLaLYWv1Je3UTFfVQPu88SnNjs4Mq74nxKnKNCvqBZ0A
            AQQPrJbqx3vUbaVQZlj4PnbweCGHMsO3v3K2+BX++5PuEkDz/MhLmDSFh6IXx4/z
            CiK+dux7ogOrGrhFAgMBAAE=
            -----END PUBLIC KEY-----"
            helperText="This is the unique id public key"
            fullWidth
            multiline
            rows={8}
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
            encrypt Id
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-read-only-input"
            label="ID"
            defaultValue="4a344376-bc63-41ee-bae6-dfc2691cd72b"
            helperText="This is file Id"
            fullWidth
            multiline
            rows={4}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
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
      </Grid>
    </React.Fragment>
  );
}
