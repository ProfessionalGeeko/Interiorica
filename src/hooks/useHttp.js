import { useState, useCallback } from 'react';
import api from '../services/api';

// Custom Hook for HTTP Request.
const useHttp = () => {
    const [ isLoading, setIsLoading ] = useState(false);

    const sendRequest = useCallback(async (requestConfig,applyFunction) => {
        /*
            requestConfig: HTTP Request Configuration includes requestType, body etc.
            applyFunction: Callback Function to be used after successful completion of request.
            successMessage: Message to be displayed after successful completion of request.
        */
        setIsLoading(true);
        try{
            const response = await api.request(requestConfig);
            if(response.status === 200){
                if(applyFunction){
                    // Handling Payload data with callback function.
                    applyFunction(response.data)
                }
            }
        }catch(error){
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading, sendRequest
    }
}

export default useHttp;