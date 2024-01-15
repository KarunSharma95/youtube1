import React,{useState,useEffect} from 'react'
import ChatComment from './ChatComment';
import { useDispatch,useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateName } from '../utils/helper';

const LiveChat = () => {
 
  const [liveMessage,setLiveMessage] = useState();  

 const dispatch = useDispatch(); 
 const message = useSelector(store => store.chat.Message);
//  console.log(message);
  
 useEffect(()=>{
    const i = setInterval(()=>{
      console.log("api log");

      dispatch(addMessage({
       name: generateName(),
       comment : " I created the chat 🎆"
      }))
    },1500);

    return()=>{
        clearInterval(i);
    }
   

  },[])
    
  return (<>
    <div className='p-1 mx-1 border border-black w-[500px] h-[400px] rounded-lg overflow-y-scroll flex flex-col-reverse'>
    {message.map((message1,index)=><ChatComment key={index} name={message1.name} comment={message1.comment}/>)}    
    </div>
    <form className='p-1 m-1 flex h-[100px] rounded-lg border border-gray-500 w-500 items-center bg-slate-50' onSubmit={(e)=>{
      e.preventDefault();
      dispatch(addMessage({
        name : "Karun Sharma",
        comment:liveMessage
      }));
      setLiveMessage("")
    }}>
     <input  className="  pl-2 ml-6 border border-gray-400 h-[40px] w-96 mx-2" type="text" value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)}/>
     <button className="w-10 h-10 border border-gray-400 "><img  alt="send" src="https://t3.ftcdn.net/jpg/02/93/72/48/360_F_293724835_LqDz77Sl5zGWOU5eEcPYMM99qeBiiaiu.jpg"/></button>   
    </form>
  </>
  )
}

export default LiveChat