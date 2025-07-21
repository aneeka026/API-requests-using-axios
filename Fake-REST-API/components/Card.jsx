
import React from 'react'


const Card = ({post}) => {
  return (
    <div className='row' >
      {post.map((item,index)=>{
        return <div key={index} className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
          <div className="card-body">
          <div className='card-title '><strong>Id :</strong> {item.id}</div>
          <div className='card-subtitle mb-2 text-primary'> <strong>Title : </strong>{item.title}</div>
          <div className='card-text'><strong>Body :</strong> {item.body}</div>
          
          </div>
          </div>
        </div>
      })}
    </div>
  )
}

export default Card
