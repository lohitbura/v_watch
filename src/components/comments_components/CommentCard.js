import React from 'react'

const CommentCard = ({data}) => {


  return (
    <div className='comment-card'>
        <img src={data.snippet.topLevelComment.snippet.authorProfileImageUrl}/>
        <div>
        <h5>{data.snippet.topLevelComment.snippet.authorDisplayName}</h5>
        <div dangerouslySetInnerHTML={{ __html: data.snippet.topLevelComment.snippet.textDisplay }} />
        {/* <p>{data.snippet.topLevelComment.snippet.textDisplay}</p> */}
        </div>
    </div>
  )
}

export default CommentCard