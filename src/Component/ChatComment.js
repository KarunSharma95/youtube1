import React from 'react'

const ChatComment = ({name,comment}) => {
    console.log(name,comment)
  return (
    <div className='flex items-center bg-gray-50 shadow-md mt-1'>
        <img alt="usericon" className="w-8 m-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZPwe5d-GUlhKYcaBAp7BcDndV_cLAO3GGull63fFlJ58Ey8q_R7Sme0Qz2kd9ARhh3A8&usqp=CAU"/>
        <span className='px-2 font-bold'>{name}</span>
        <span>{comment}</span>
    </div>
  )
}

export default ChatComment