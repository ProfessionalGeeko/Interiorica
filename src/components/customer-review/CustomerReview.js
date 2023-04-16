import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {Grid} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'Project Name',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Project Name',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Project Name',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
        label: 'Project Name',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];

function SwipeableTextMobileStepper() {
    const theme = useTheme();
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box backgroundColor={`${prefersDarkMode ? 'rgb(30,32,37)' : '#DFDFDE'}`} px={8} py={4} sx={{ flexGrow: 1 }}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    backgroundColor: `${prefersDarkMode ? 'rgb(30,32,37)' : '#DFDFDE'}`
                }}
            >
                <Typography fontWeight="bold" >{images[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={`${step.label}-${index}`}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <>
                                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                    <Grid item md={5} sm={8} xs={4} display="flex" justifyContent="center" alignItems="center">
                                        <Box
                                            back
                                            component="img"
                                            sx={{
                                                height: 255,
                                                display: 'block',
                                                overflow: 'hidden',
                                                width: '100%',
                                            }}
                                            src={step.imgPath}
                                            alt={step.label}
                                        />
                                    </Grid>
                                    <Grid px={4} item md={7} sm={8} xs={4} my="auto">
                                        <Typography color={`${prefersDarkMode ? 'white' : 'black'}`} align="justify" component="p" variant="p">
                                            Our satisfied clients keep us alive and prospering. We are happy to be able to provide all of our clients with unparalleled services. We’re pleased to say that due to our efforts, our clients always come back to us for more. Read below to find out all the wonderful things our clients have to say about us. We are sure you will soon be convinced to give us a call.
                                        </Typography>
                                        <Typography fontStyle="italic" color={`${prefersDarkMode ? 'white' : 'black'}`}  component="p" variant="p" align="right">
                                            - Client Name
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </>
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                sx={{
                    backgroundColor: `${prefersDarkMode ? 'rgb(30,32,37)' : '#DFDFDE'}`
                }}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </Box>
    );
}

export default SwipeableTextMobileStepper;