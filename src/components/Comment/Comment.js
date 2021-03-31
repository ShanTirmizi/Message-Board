import React from 'react'
import './Comment.css'

const Comment = ({data}) => {
  return (
    <ul>
      {
        data.map(da => {
          return (
            <li key={da.id}>
              <p className='comment__username'>{da.user.name}</p>
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