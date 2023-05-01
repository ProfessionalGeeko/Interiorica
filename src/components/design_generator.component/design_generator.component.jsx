import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useDropzone } from 'react-dropzone';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from "@mui/material/useMediaQuery";
import useHttp from "../../hooks/useHttp";

import { useFormik } from 'formik';
import CircularProgress from "@mui/material/CircularProgress";


const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    // marginBottom: '16px',
    marginTop: '5%',
    marginBottom:'5%',
    marginLeft:'3%'
  },
  card: {
    width: '45%',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  },
};

export default function DesignGenerator() {
  const [image, setImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [files, setFiles] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState('');
  const [selectedRoomType, setselectedRoomType] = useState('');
  const { isLoading, sendRequest } = useHttp();

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
  };

  const handleReset = (event) => {
    setSelectedTheme('');
    setselectedRoomType('');
    setImage(null);
    setProcessedImage(null);
    setFiles([]);
  }

  const handleRoomTypeChange = (event) => {
    setselectedRoomType(event.target.value);
  };

  const handleImageProcessing = (data) => {
    // Process the image using a third-party library or custom code
    // For example:
    setProcessedImage(data.data); // Just display the original image for now
  };

  const handleDrop = (acceptedFiles) => {
    // Update state with the dropped file if it's an image
    if (acceptedFiles.length > 0 && acceptedFiles[0].type.startsWith("image/")) {
      setFiles([acceptedFiles[0]]);
      setImage(URL.createObjectURL(acceptedFiles[0]));
      formik.setFieldValue('roomImage', acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    accept: 'image/*',
    maxFiles: 1
  });

    const formik = useFormik({
        initialValues: {
            theme: '',
            room: '',
            roomImage: ''
        },
        onSubmit: async values => {
            let formData = new FormData();
            for (let value in values) {
                formData.append(value, values[value])
            }
            await sendRequest({method: 'POST', url: 'https://interiorica-backend.onrender.com/generate-interior', data: formData}, handleImageProcessing);
        }
    })

  return (
    <form onSubmit={formik.handleSubmit} style={{backgroundColor:`${prefersDarkMode ? 'rgb(30, 32, 37)': ''}`}}>
      <p style={{paddingTop:"5%",textAlign:"center",fontSize:"30px"}}><b>Generate your own design</b></p>
      <div style={{marginTop:"4%"}}>
        <div>
            <ul style={{width:'100%',textAlign:'center'}}>
                <li style={{listStyle:'None',marginBottom:'2%'}}><p><b>1. Choose your room theme</b></p><br></br>
                        <Select
                            name="theme"
                            value={formik.values.theme}
                            onChange={formik.handleChange}
                            label="Select an option"
                            style={{width:"30%",marginBottom:"2%",flexWrap: 'wrap'}}
                        >
                        <MenuItem value="modern">Modern</MenuItem>
                        <MenuItem value="minimalistic">Minimalistic</MenuItem>
                        <MenuItem value="professional">Professional</MenuItem>
                        <MenuItem value="tropical">Tropical</MenuItem>
                        <MenuItem value="vintage">Vintage</MenuItem>
                        <MenuItem value="industrial">Industtrial</MenuItem>
                        <MenuItem value="neoclassic">Neoclassic</MenuItem>
                        </Select>
                </li>
                <li style={{listStyle:'None'}}>
                    <p><b>2. Choose your room type</b></p>
                        <Select
                            name="room"
                            value={formik.values.room}
                            onChange={formik.handleChange}
                            label="Select an option"
                            style={{width:"30%",marginTop:"3%",flexWrap: 'wrap'}}
                        >
                        <MenuItem value="living room">Living Room</MenuItem>
                        <MenuItem value="dining room">Dining Room</MenuItem>
                        <MenuItem value="office">Office</MenuItem>
                        <MenuItem value="bedroom">Bedroom</MenuItem>
                        <MenuItem value="bathroom">Bathroom</MenuItem>
                        <MenuItem value="basement">Basement</MenuItem>
                        <MenuItem value="kitchen">Kitchen</MenuItem>
                        <MenuItem value="gaming room">Gaming Room</MenuItem>
                        <MenuItem value="outdoor patio">Outdoor Patio</MenuItem>
                        </Select>
                </li>
            </ul>
        </div>
      </div>
      <p style={{textAlign:'center',marginTop:"3%"}}><b>3. Upload a picture of your room</b></p>
      <div style={styles.root}>
        <Card style={styles.card}>
            {processedImage && <CardContent>
                <Typography variant="h6" gutterBottom style={{textAlign:'center'}}>
                    Original Design
                </Typography>
                </CardContent>}
          <CardContent>
            {!image && <Box
              sx={{
                width: '100%',
                height: '400px',
                border: '2px dashed #ccc',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '16px',
              }}
              {...getRootProps()}
            >
              <input name="image" value={formik.values.image} {...getInputProps()} />
              <Typography variant="h6" gutterBottom>
                Drag and drop your image here or click to select
              </Typography>
              {files.map((file) => (
                <Typography key={file.name} variant="body1" gutterBottom>
                  {file.name} ({file.size} bytes)
                </Typography>
              ))}
            </Box>}
           {image && <img src={image} alt="upload-preview" style={{ width: '100%' }} />}
          </CardContent>
        </Card>
        {processedImage &&
        <Card style={styles.card}>
            {processedImage && <CardContent>
                <Typography variant="h6" gutterBottom style={{textAlign:'center'}}>
                    Generated Design
                </Typography>
                </CardContent>}
          <CardContent>
            {processedImage && <img src={processedImage} alt="processed-preview" style={{ width: '100%' }} />}
          </CardContent>
        </Card>}
      </div>
        <div style={{display:'flex',justifyContent:'center',marginTop:"3%",paddingBottom:'5%'}}>
            { isLoading ? <CircularProgress color="secondary" /> : <Button color="customButtonColor" variant="contained" onClick={formik.handleSubmit}>Generate Design</Button>}
            <Button color="customButtonColor" variant="contained" onClick={handleReset} style={{marginLeft:'2%'}}>Reset</Button>
        </div>
    </form>
  );
}
