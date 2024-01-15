



import { useEffect, useState } from 'react';
import { YOUTUBE_API } from './Config';

const useFilteredVideo = () => {
    
    let [filterVideo,setFilterVideo] =useState([]);
    let [video,setVideo] =useState([]);
    
    useEffect(()=>{
    getVideoList();
    },[])
    console.log("useFilterVideo :- " + filterVideo);
    async function getVideoList(){
        const data= await fetch(YOUTUBE_API);
        const json= await data.json();
        setVideo(json.items);
    }
   return {video,filterVideo,setFilterVideo,setVideo}
}

export default useFilteredVideo