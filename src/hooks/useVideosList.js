import { useEffect, useState } from "react"
import apiService from "../utils/services/apiService";
import { apiData } from "../utils/app_constants/apiConstants";
import appStringConstants from "../utils/app_constants/appStringConstants";


const useVideosList = () => {

    const [videosList,setVideosList] = useState(null);
    
    useEffect(()=>{
        fetchVideos();
   
    },[]);

   const fetchVideos = async ()=>{
    const data  =  await apiService.get(apiData.fetchPopularVideos,{
        part:'snippet,contentDetails,statistics',
        chart:'mostPopular',
        regionCode:'IN',
        key: appStringConstants.googleApiKey
    })
    console.log(data);
    setVideosList(data);
    }

    return videosList;

}

export default useVideosList