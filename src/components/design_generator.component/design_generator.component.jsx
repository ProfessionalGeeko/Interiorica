import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useDropzone } from 'react-dropzone';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const theme = createTheme({
    palette: {
      primary: {
        main: '#8D8DAA',
        contrastText: '#FFF',
      },
    },
});
const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '16px',
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

  const handleImageProcessing = () => {
    // Process the image using a third-party library or custom code
    // For example:
    setProcessedImage(image); // Just display the original image for now
  };

  const handleDrop = (acceptedFiles) => {
    // Update state with the dropped file if it's an image
    if (acceptedFiles.length > 0 && acceptedFiles[0].type.startsWith("image/")) {
      setFiles([acceptedFiles[0]]);
      setImage(URL.createObjectURL(acceptedFiles[0]));
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    accept: 'image/*',
    maxFiles: 1
  });

  return (
    <div>
      <p style={{marginTop:"5%",textAlign:"center",fontSize:"30px"}}><b>Generate your own design</b></p>
      <div style={{marginTop:"4%"}}>
        <div>
            <ul style={{width:'100%',textAlign:'center'}}>
                <li style={{listStyle:'None',marginBottom:'2%'}}><p><b>1. Choose your room theme</b></p><br></br>
                    <ThemeProvider theme={theme}>
                        <Select
                            value={selectedTheme}
                            onChange={handleThemeChange}
                            label="Select an option"
                            style={{width:"30%",marginBottom:"2%",flexWrap: 'wrap'}}
                        >
                        <MenuItem value="Modern">Modern</MenuItem>
                        <MenuItem value="Minimalistic">Minimalistic</MenuItem>
                        <MenuItem value="Professional">Professional</MenuItem>
                        <MenuItem value="Tropical">Tropical</MenuItem>
                        <MenuItem value="Vintage">Vintage</MenuItem>
                        <MenuItem value="Industtrial">Industtrial</MenuItem>
                        <MenuItem value="Neoclassic">Neoclassic</MenuItem>
                        </Select>
                    </ThemeProvider>
                </li>
                <li style={{listStyle:'None'}}>
                    <p><b>2. Choose your room type</b></p>
                    <ThemeProvider theme={theme}>
                        <Select
                            value={selectedRoomType}
                            onChange={handleRoomTypeChange}
                            label="Select an option"
                            style={{width:"30%",marginTop:"3%",flexWrap: 'wrap'}}
                        >
                        <MenuItem value="option1">Living Room</MenuItem>
                        <MenuItem value="Neoclassic">Dining Room</MenuItem>
                        <MenuItem value="Neoclassic">Office</MenuItem>
                        <MenuItem value="Neoclassic">Bedroom</MenuItem>
                        <MenuItem value="Neoclassic">Bathroom</MenuItem>
                        <MenuItem value="Neoclassic">Basement</MenuItem>
                        <MenuItem value="Neoclassic">Kitchen</MenuItem>
                        <MenuItem value="Neoclassic">Gaming Room</MenuItem>
                        <MenuItem value="Neoclassic">Outdoor Patio</MenuItem>
                        </Select>
                    </ThemeProvider>
                </li>
                
            </ul>
        </div>
      </div>
      <p style={{textAlign:'center',marginTop:"3%"}}><b>3. Upload a picture of your room</b></p>
      <div style={styles.root}>
        <Card style={styles.card}>
            {processedImage && <CardContent>
                <Typography variant="h6" gutterBottom style={{textAlign:'center'}}>
                    Original Image
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
              <input {...getInputProps()} />
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
                    Generated Image
                </Typography>
                </CardContent>}
          <CardContent>
            {processedImage && <img src={processedImage} alt="processed-preview" style={{ width: '100%' }} />}
          </CardContent>
        </Card>}
      </div>
        <div style={{display:'flex',justifyContent:'center',marginTop:"3%",marginBottom:'5%'}}>
            <Button color="customButtonColor" variant="contained" onClick={handleImageProcessing}>Generate Design</Button>
            <Button color="customButtonColor" variant="contained" onClick={handleReset} style={{marginLeft:'2%'}}>Reset</Button>
        </div>
    </div>
  );
}
