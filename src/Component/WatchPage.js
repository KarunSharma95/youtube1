import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/cartSlice';
import { useSearchParams } from 'react-router-dom';
import Comments from './Comments';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const [searchParams] = useSearchParams();

    
    const dispatch = useDispatch();
   
    useEffect(()=>{
     dispatch(closeMenu());
    },[]);

  return (
    <div className='m-2 p-1 flex flex-col w-full'>
      <div className='flex'>
      <iframe width="1000" height="500" src={"https://www.youtube.com/embed/"+ searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
      <div className=''><LiveChat/></div>
      </div>
      <Comments/>
    </div>
  )
}

export default WatchPage;