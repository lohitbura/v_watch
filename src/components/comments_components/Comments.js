import React from 'react'
import useCommentsHook from '../../hooks/useCommentsHook'
import CommentCard from './CommentCard';

const Comments = () => {

  const commentsList = useCommentsHook();

  if(commentsList===null){
    return <div>Loading...</div>
  }

  console.log(commentsList);

  return (
    <div className='comment-list'>
      <h2>Comments</h2>
        {
          commentsList.items.map((data)=><CommentCard data={data}/>)
        }
    </div>
  )
}

export default Comments
