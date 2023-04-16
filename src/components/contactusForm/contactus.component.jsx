import { Grid, Typography, Stack, Box, TextField, Button,} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import useMediaQuery from "@mui/material/useMediaQuery";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";

import { useFormik } from 'formik';
import {ContactUsSchema} from "../../validationSchema/contactUsValidationSchema";

import BasicModal from "../modal.component";
import {useState} from "react";

import axios from "axios";

const ContactUsForm = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const saveContactUsRequest = async (formData) => {
    try {
      const docRef = await addDoc(collection(db, "contactUsRequests"), formData);
    } catch (e) {
      alert("Something went wrong! Please try again")
    }
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validationSchema: ContactUsSchema,
    onSubmit: async values => {
      try{
        await saveContactUsRequest(values)
        handleOpen();
        await axios.post('https://interiorica-backend.onrender.com/sendEmail', values);
      } catch (e) {
        console.log(e.toString())
      }finally {
        formik.resetForm()
      }
    },
  });

  return (
    <Grid
      container
      id="contact"
      sx={{ backgroundColor: `${prefersDarkMode ? 'rgb(30,32,37)' : '#DFDFDE'}`}}
      paddingY={6}
      paddingX={8}
    >
      <Grid
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        item
        sx={{ backgroundColor: `${prefersDarkMode ? 'rgb(30,32,37);': '#F7F2F2'}` }}
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
        <BasicModal title={'Thank You!'} description={"We have received your request, our support members will soon contact you!"} open={open} handleOpen={handleOpen} handleClose={handleClose} />
        <Box
          component="form"
          marginY={4}
          noValidate
          autoComplete="off"
          onSubmit={formik.handleSubmit}
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
               <TextField name="name" helperText={formik.touched.name && formik.errors.name}  error={formik.errors.name && formik.touched.name} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} fullWidth id="standard-error" label="Name" variant="standard" margin="normal" />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
            <TextField
                helperText={formik.touched.email && formik.errors.email}
                onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} error={formik.errors.email && formik.touched.email}
              fullWidth
              id="standard-error-helper-text"
              label="Email"
              variant="standard"
              margin="normal"
                name="email"
            />
            </Grid>
          </Grid>
          <div>
            <TextField
                helperText={formik.touched.subject && formik.errors.subject}
              fullWidth
              onChange={formik.handleChange} value={formik.values.subject} onBlur={formik.handleBlur} error={formik.errors.subject && formik.touched.subject}
              id="standard-error-helper-text"
              label="Contact Number"
              variant="standard"
              margin="normal"
              name="subject"
            />
          </div>
          <div>
            <TextField
                helperText={formik.touched.message && formik.errors.message}
                onChange={formik.handleChange} value={formik.values.message} onBlur={formik.handleBlur} error={formik.errors.message && formik.touched.message}
              id="standard-multiline-static"
              fullWidth
              label="Message"
              placeholder="Type your message here."
              multiline
              rows={4}
              variant="standard"
              margin="normal"
              name="message"
            />
          </div>
          <div>
            <Button color="customButtonColor" disabled={!(formik.isValid && formik.dirty)} onClick={formik.handleSubmit} sx={{marginY: 2}} variant="contained">Submit</Button>
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
