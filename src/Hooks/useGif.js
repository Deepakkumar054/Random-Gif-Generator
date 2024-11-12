import React from "react";
import axios from 'axios';
// import Spinner from "./Spinner";
import { useState,useEffect } from "react";


const API_KEY ='E0GkQniFNDPpxBKNBTUKcZ92MpeQG434';
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
// const tagMemeurl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;


const useGif=(tag)=>{
   
    const [gif, setgif] = useState("");
    const [loading,setloading]=useState('false');
    
    async function fetchData(tag){
        setloading(true);
        
        
        try {
            const { data } = await axios.get(tag ? `${url}&tag=${tag}`:url);
            setgif(data.data.images.original.url); // Set the gif URL
        } catch (error) {
            console.error("Error fetching the gif:", error);
        }
        setloading(false);
        // const{data}=await axios.get(url);
        // const imageSource = data.data.images.original.url;
        // setgif(imageSource);
        
    }
    useEffect(()=>{
        fetchData('car');
    },[])

    return{gif,loading,fetchData}

}

export default useGif