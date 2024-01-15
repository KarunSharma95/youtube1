import React from 'react'

const VideoCard = ({data,addata=""}) => {
  
  const longTitle = data?.snippet?.title;
  const maxLength = 18;
  
  const shortTitle = (longTitle,maxLength)=>{
      return longTitle?.length > maxLength ? longTitle.slice(0,maxLength) + "..." : "" ;
  }
  return (
    <>
    <div className='w-56 border-2 rounded-xl shadow-lg m-6 p-1'>
        <img alt="thumbnail" className="rounded-lg mb-2" src={data?.snippet?.thumbnails?.medium?.url}/>
        <h1 className='text-wrap font-bold mb-4 truncate'>{shortTitle(longTitle,maxLength)}</h1>
        <h1>{" Published on : " + new Date(data?.snippet?.publishedAt).toLocaleDateString() }</h1>
        <h1>{(data?.statistics?.viewCount)/1000 +" K views "}</h1>
        <h1 className='font-serif font-bold'>{addata}</h1>
    </div>
    </>
  )
}

export const AdCard = ({data})=>{
  return(
    <div className='hover:border-2 rounded-lg border-gray-500 p-0 m-0'>
    <VideoCard data={data} addata="Sponser Ad."/>
    </div>
  )
}

export default VideoCard