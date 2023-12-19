import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import apiService from "../utils/services/apiService";
import { apiData } from "../utils/app_constants/apiConstants";
import appStringConstants from "../utils/app_constants/appStringConstants";


const useCommentsHook = ()=>{

    const [commentsList,setCommentsList] = useState(null);
    const videoId = useSelector(store=>store.videoPlayer.videoPlayerData.id)

    useEffect(()=>{
        console.log('I am gere');
        console.log(videoId);
        fetchComments();
    },[videoId]);

    const fetchComments = async ()=>{
        const data = await apiService.get(apiData.fetchCommentsList,{
            part:'snippet,replies',
            key : appStringConstants.googleApiKey,
            videoId: videoId
        })
        console.log(data);
        setCommentsList(data);
    }
    return commentsList;
}

export default useCommentsHook;