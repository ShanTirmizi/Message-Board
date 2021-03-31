import React from 'react'
import './Comment.css'

const Comment = ({data}) => {
  return (
    <ul>
      {
        data.map(da => {
          return (
            <li key={da.id}> <span className='comment__username'>{da.user.name}</span>
              <p className='comment__comment'>{da.comment}</p>
              {da.replies && <Comment data={da.replies} />}
            </li>
          );
        })
      }
    </ul>
  );
}

export default Comment