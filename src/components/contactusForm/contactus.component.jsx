import {
  Grid,
  Typography,
  Stack,
  Box,
  TextField,
  Button,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import useMediaQuery from "@mui/material/useMediaQuery";

const ContactUsForm = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  return (
    <Grid
      container
      sx={{ backgroundColor: "#D0C1BA" }}
      paddingY={6}
      paddingX={8}
    >
      <Grid
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        item
        sx={{ backgroundColor: `${prefersDarkMode ? 'rgb(30,32,37);': ''}` }}
        md={6}
        xs={12}
        justifyContent="center"
        paddingX={2}
        paddingY={6}
      >
        <Typography variant="h4">Contact Us</Typography>
        <Typography variant="body2" component="div" marginY={2}>
          The way to incredible spaces that reflect your personality are only a
          call away. Interested in working with us? Get in touch today.
        </Typography>
        <Typography variant="body2" component="div" marginY={2}>
          A/Shop No 14, Krishna Kunj Building, 150 feet Road, Bhayandar (W),
          Maharashtra 401101.
        </Typography>
        <Typography variant="body2" component="div" marginY={2}>
          singhsinterior.info@gmail.com
        </Typography>
        <Stack direction="row" spacing={2}>
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </Stack>
        <Box
          component="form"
          marginY={4}
          noValidate
          autoComplete="off"
        >
          <Grid
            container
            spacing={1}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
               <TextField fullWidth id="standard-error" label="Name" variant="standard" margin="normal" />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
            <TextField
              fullWidth
              id="standard-error-helper-text"
              label="Email"
              variant="standard"
              margin="normal"
            />
            </Grid>
          </Grid>
          <div>
            <TextField
              fullWidth
              id="standard-error-helper-text"
              label="Subject"
              variant="standard"
              margin="normal"
            />
          </div>
          <div>
            <TextField
              id="standard-multiline-static"
              fullWidth
              label="Message"
              placeholder="Type your message here."
              multiline
              rows={4}
              variant="standard"
              margin="normal"
            />
          </div>
          <div>
            <Button sx={{marginY: 2}} variant="contained">Submit</Button>
          </div>
        </Box>
      </Grid>
      <Grid
        item
        sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        md={6}
        sm={0}
      >
        <img
          style={{ maxWidth: "100%", height: "100%" }}
          src="https://static.wixstatic.com/media/9cd3c8e697354e27bb900945455bcd4b.jpg/v1/fill/w_850,h_1175,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/9cd3c8e697354e27bb900945455bcd4b.jpg"
          alt="Background"
        />
      </Grid>
    </Grid>
  );
};

export default ContactUsForm;
