import React,{useState} from 'react'
import '../components/CommentCard.css'

const CommentCard = (errand) => {

    let date = new Date(Date.parse(errand.props.created));
    let dateMin;
    let dateHours;
      if(date.getMinutes() < 10)
        dateMin = ("0" + date.getMinutes());
      else
        dateMin = date.getMinutes()
      if(date.getHours() < 10)
        dateHours = ("0" + date.getHours());
      else
        dateHours = date.getHours()  

    let dateString = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + (date.getDate() + " " + (dateHours) + ":" + (dateMin));


  return (
    <div>
        <div className='comment-card-line'>

        </div>
        
        <div className='comment-card'>
          
            <h2 className='card-text'>{errand.props.comment}</h2>

            <h3 className='card-text'>{dateString}</h3>

        </div>
    </div>
    
  )
}

export default CommentCard