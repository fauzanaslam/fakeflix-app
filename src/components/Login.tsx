import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
};

const Login = ({
  open,
  CloseModal,
}: {
  open: boolean;
  CloseModal: () => void;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Modal open={open} onClose={CloseModal}>
      <Box sx={style}>
        <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
          Sign in
        </Typography>
        <Grid sx={{ mb: 2 }}>
          <form>
            <FormControl sx={{ mb: 2 }} fullWidth>
              <TextField
                id="email"
                name="email"
                label="Email atau nomor telepon"
                variant="filled"
              />
              <FormHelperText>
                Please enter a valid email or phone number.
              </FormHelperText>
            </FormControl>
            <FormControl sx={{ mb: 4 }} fullWidth>
              <TextField
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                label="Password"
                variant="filled"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
              <FormHelperText>
                Your password must contain between 4 and 60 characters.
              </FormHelperText>
            </FormControl>
            <Button type="submit" variant="contained" size="large" fullWidth>
              Sign in
            </Button>
          </form>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 1 }}
        >
          <Box>
            <Checkbox />
            <Typography variant="caption">Remember me</Typography>
          </Box>
          <Typography variant="caption" component="a" href="#">
            Need help ?
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="body1" component="span">
            New to Netflix?
          </Typography>
          <Typography variant="body1" color="primary" component="a" href="#">
            &nbsp;Sign up now.
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="caption">
            This page is protected by Google reCAPTCHA to ensure you are not a
            bot.
          </Typography>
          <Typography variant="caption" color="primary" component="a" href="#">
            Learn more.
          </Typography>
        </Grid>
      </Box>
    </Modal>
  );
};

export default Login;
