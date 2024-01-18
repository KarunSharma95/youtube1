import useFilteredVideo from "../utils/useFilteredVideo";
import { addFilteredVideo } from "../utils/filterSlice"; 
import { useDispatch } from "react-redux";

const handleButtonClick = (filterVideo,search)=>{
    const data1 =  (filterVideo?.filter(vid=>{
           return vid?.snippet?.tags?.includes(search.toLowerCase());
       }))
       console.log(data1)
       return (data1);
      };
      

const Button =({name1})=>{

    const {video} = useFilteredVideo();
    const dispatch = useDispatch();
return(
    <div video={video}>
    <button className="bg-gray-200 border-2 px-2 m-2 rounded-lg hover:bg-white text-black font-bold border border-gray-200 transition duration-30" onClick ={()=>{ const data = handleButtonClick(video,name1);
  dispatch(addFilteredVideo(data))}}>{name1}</button>
    </div>
)
}
export default Button;