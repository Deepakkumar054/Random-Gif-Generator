import react, { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";

// const API_KEY = process.env.REACT_APP_GIF_API_KEY;
const API_KEY ='E0GkQniFNDPpxBKNBTUKcZ92MpeQG434';

const Random = () => {

    // const [gif, setgif] = useState("");
    // const [loading,setloading]=useState('false');
    
    // async function fetchData(){
    //     setloading(true);
    //     const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        
        
    //     try {
    //         const { data } = await axios.get(url);
    //         setgif(data.data.images.original.url); // Set the gif URL
    //     } catch (error) {
    //         console.error("Error fetching the gif:", error);
    //     }
    //     setloading(false);
    //     // const{data}=await axios.get(url);
    //     // const imageSource = data.data.images.original.url;
    //     // setgif(imageSource);
        
    // }
    // useEffect(()=>{
    //     fetchData();
    // },[])

    const{gif,loading,fetchData}=useGif();

    // function clickHandler() {
    //     fetchData();
    // }
    return (
        <div className="bg-green-400  w-1/2 mt-[20px] rounded-lg border border-black
                flex flex-col items-center gap-y-5">
            <h1 className="text-2xl mt-[15px] underline uppercase font-bold">A Random Gif</h1>

            {
                loading ?(<Spinner/>):(<img src={gif} width="450px" />)
            }

            

            <button onClick={()=>fetchData()}
                className="bg-yellow-50 w-10/12 text-xl rounded-lg font-semibold py-2 mb-[20px]">
                Generate
            </button>
        </div>
    )
}
export default Random

