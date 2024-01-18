import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {toggle} from "../utils/cartSlice";
import { YOUTUBE_SEARCH_API } from "../utils/Config";
import { extractCache } from "../utils/cacheSlice";
import useFilteredVideo from "../utils/useFilteredVideo";
import { addFilteredVideo } from "../utils/filterSlice";


const handleSearchClick = (filterVideo,search)=>{
    const data1 =  (filterVideo?.filter(vid=>{
           return vid?.snippet?.title?.toLowerCase().includes(search.toLowerCase());
       }))
       return (data1);
   };
const Header = ()=>{
    
    let {video} = useFilteredVideo();
    
      
    const [searchSuggestion, setSearchSuggestion]= useState([]);
    const [showSuggestion, setShowSuggestion]= useState(false);
    let [search,setSearch] = useState("");

    // console.log("Header : -" + filterVideo);
    
    const dispatch = useDispatch();
    const toggleHandler = ()=>{
        dispatch(toggle());
    }
    const cacheResult = useSelector(store => store.cache);
    
    useEffect(()=>{
        
        const timer = setTimeout(() => {
            if(cacheResult[search]){
                setSearchSuggestion(cacheResult[search]);
            }else{
                getSearchSuggestion();
            }
        },200);
        return ()=>{
            clearTimeout(timer);
        }
        
    },[search]);
    
    const getSearchSuggestion = async ()=>{
        // console.log("API - " + search )
        const data = await fetch(YOUTUBE_SEARCH_API + search);
        const json = await data.json();
        setSearchSuggestion(json[1]);

        dispatch(extractCache({
            [search] :json[1]
        }));
    }
    

    return(
       
     <>
     <div className="grid grid-flow-col shadow-md">
     <div className="col-span-1 flex items-center">
     <button  className="cursor cursor-pointer" onClick={()=>toggleHandler()}><img className="w-8 h-8 m-2 " alt="hamburger" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScoBJJLsiD_eZTJ7hpQu-Fhr2zLuTPr9PFgA&usqp=CAU"/></button>
     <a><img className="w-28 m-2" alt="Youtube" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRONuWvQHJt5ooi822FbtizsibO3m7cNHMHNg&usqp=CAU"/></a>
     </div>
     <div className="pl-5 col-span-10 text-center align-middle p-2 relative">
     <div className="relative">
        <input type="text" className=" h-8 w-1/2 border-2 rounded-l-full pl-10"  value={search} onChange={(e)=>{setSearch(e.target.value)}} onFocus={()=>{setShowSuggestion(true)}} onBlur={()=>{setShowSuggestion(false)}} />
        <button className="w-8 h-8 border-2 p-2 rounded-r-full" onClick={()=>{ const data = handleSearchClick(video,search);
        dispatch(addFilteredVideo(data));
        setSearch('');
        }}>
    <img alt="search-icon"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO3vAp3RACb6sS2WgSJ4RaLkkTAsiv7JVFVg&usqp=CAU"/></button>
     </div>
     {showSuggestion && <div className="absolute bg-white ml-[17rem] w-[33rem]">
        <ul className="">
          {searchSuggestion?.map(suggestion =>(<li className="text-left ml-2 mt-2 flex"><img  className="w-3 h-3 mr-2 mt-2" alt="search-icon"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO3vAp3RACb6sS2WgSJ4RaLkkTAsiv7JVFVg&usqp=CAU"/>{suggestion}</li>))}  
        </ul>
     </div>}
     </div>
     
     <div className="col-span-1">
         <img alt="usericon" className="w-8 m-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZPwe5d-GUlhKYcaBAp7BcDndV_cLAO3GGull63fFlJ58Ey8q_R7Sme0Qz2kd9ARhh3A8&usqp=CAU"/>
     </div>
     </div>
     </>
    );
}
export default Header;