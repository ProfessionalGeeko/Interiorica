import Projects from "../../components/projects.component/projects.component";
import { residentialDesignHeader, residentialDesignSubHeader, residentialDesignContent } from "../../constants";
import { useState, useEffect } from "react";
import useHttp from "../../hooks/useHttp";

const  ResidentialDesign = () => {
    const [designImages, setDesignImages] = useState([]);
    const [tagImages, setTagImages] = useState([]);
    const {isLoading, sendRequest} = useHttp();

    const handleResidentData = (data) => {
        let {designImages, ...tagImages} = data;
        setDesignImages(designImages);
        setTagImages(tagImages);
    };

    useEffect(() => {
        sendRequest({method: 'GET', url: '/get-data?documentName=residentialDesign'}, handleResidentData)
    }, [sendRequest])


    return (
        <Projects isLoading={isLoading} data={{Header: residentialDesignHeader, Sub_Header: residentialDesignSubHeader, Content: residentialDesignContent}} designImages={designImages} tagImages={tagImages} />
    )
};

export default ResidentialDesign;