
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { AdCard } from './VideoCard';
import  useFilteredVideo from "../utils/useFilteredVideo"
import { useSelector } from 'react-redux';


const Videocontainer = () => {
  
  let {video} = useFilteredVideo();
  const filterVideo = useSelector(store=>store.filter.filterVideo);

//  console.log(JSON.stringify(filterVideo));
 
  const condition = filterVideo?.length > 0 ? filterVideo : video;
  
  return  (
    <div className='flex flex-wrap'>
   {condition.length > 0 && <AdCard data={condition[0]}/>}
    {condition?.map((video)=>{return <Link to={"/watch?v="+video.id} key={video.id}><VideoCard  data={video}/></Link>})}
    </div>
  )
}

export default Videocontainer