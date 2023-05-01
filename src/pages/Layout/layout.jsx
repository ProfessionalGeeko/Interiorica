import { Fragment } from "react";
import Navbar from "../../components/navbar/navbar.component";
import Intro from "../../components/intro.component/intro.component";
import AboutUs from "../../components/about_us.component/about_us.component";
import ResidentialDesign from "../residential-design/residentialDesign";
import CommercialDesign from "../commercial-design/commercialDesign";
import YoutubeCardContainer from "../../components/youtube-card/youtube-card-container";
import ScheduleConsultation from "../../components/schedule_consultation.component/schedule_consultation.component";
import ReviewsContent from "../../components/reviews_content.component/reviews_content.component";
import ContactUsForm from "../../components/contactusForm/contactus.component";
import DesignGenerator from "../../components/design_generator.component/design_generator.component";
import {Divider} from "@mui/material";

const Layout = () => {
    return (
        <Fragment>
            <Navbar/>
            <Intro/>
            <Divider/>
            <AboutUs/>
            <DesignGenerator/>
            <ResidentialDesign/>
            <CommercialDesign/>
            <Divider/>
            <YoutubeCardContainer/>
            <Divider/>
            <ScheduleConsultation/>
            <Divider/>
            <ReviewsContent/>
            <ContactUsForm/>
        </Fragment>
    )
};

export default Layout;