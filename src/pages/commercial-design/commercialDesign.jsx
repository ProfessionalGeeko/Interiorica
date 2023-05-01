import Projects from "../../components/projects.component/projects.component";
import {
    commercialDesignHeader,
    commercialDesignSubHeader,
    commercialDesignContent,
    residentialDesignHeader, residentialDesignSubHeader, residentialDesignContent
} from "../../constants";
import { useState, useEffect } from "react";
import useHttp from "../../hooks/useHttp";

const CommercialDesign = () => {
    const [designImages, setDesignImages] = useState([]);
    const [tagImages, setTagImages] = useState([]);
    const {isLoading, sendRequest} = useHttp();

    const handleCommercialData = (data) => {
        let {designImages, ...tagImages} = data;
        setDesignImages(designImages);
        setTagImages(tagImages);
    };

    useEffect(() => {
        sendRequest({method: 'GET', url: '/get-data?documentName=commercialDesign'}, handleCommercialData)
    }, [sendRequest])

    return (
        <Projects isLoading={isLoading} data={{Header: commercialDesignHeader, Sub_Header: commercialDesignSubHeader, Content: commercialDesignContent}} designImages={designImages} tagImages={tagImages} />
    )
}

export default CommercialDesign;