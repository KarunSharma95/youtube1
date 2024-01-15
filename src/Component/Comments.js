import React from 'react'

const commentData = [
    {
        name : "Karun Sharma",
        description : "Such a informative video that i watch twice",
        replies : [
            {
                name : "Faraz Anjum",
                description : "I need to watch it again may be i am missing something",
                replies : [
                    {
                        name : "Karun Sharma",
                        description : "Yes, you can watch there you will get more information",
                        replies : [
                            {
                                name : "Faraz Anjum",
                                description : "Yes, over the same",
                                replies : [
                                    {
                                        name : "Karun Sharma",
                                        description : "It sounds cool",
                                        replies : [
                                
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name : "Atul Singh",
        description : "I like the way how they potrait the things in the video",
        replies : [
            {
                name : "Amit Sharma",
                description : "I think we both are on the same page",
                replies : [
        
                ]
            }
        ]
    },
    {
        name : "Prafull Kumar",
        description : "This is such a nice information for me",
        replies : []
    },
    {
        name : "Ashutosh tripathy",
        description : "I am not getting bore while watching again and again",
        replies : []
    },
    {
        name : "Rishabh Sinha",
        description : "This can be the point of conflict",
        replies : []
    },
   
]

const Comment = ({data})=>{
   
   const {name,description} = data;
    return(
    <div className='flex bg-gray-100  rounded-lg mt-2'>
    <img alt="usericon" className="w-8 m-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZPwe5d-GUlhKYcaBAp7BcDndV_cLAO3GGull63fFlJ58Ey8q_R7Sme0Qz2kd9ARhh3A8&usqp=CAU"/>
    <div>
    <p className='font-serift font-bold'>{name}</p>
    <p>{description}</p>
    
    </div>
    </div>
   )
}

const CommentsList = ({data})=>{
    return (
        
         data.map((comment) => (
            <>
            <Comment data={comment}/>
            <div className='ml-2 pl-2 border border-l-black  rounded-lg'>
                <CommentsList data={comment?.replies}/>
            </div>
            </>
         ))
       
    )}

const Comments = () => {
  return (
    <>
        <p className='font-bold'>Comments :</p>
        <CommentsList data={commentData}/>
    </>
  )
}

export default Comments