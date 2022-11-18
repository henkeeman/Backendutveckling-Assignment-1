import React,{useState, useEffect, useRef } from 'react'
import ErrandCard from './ErrandCard'
import axios from 'axios';
import '../components/ErrandsPage.css'
import CommentCard from './CommentCard';
import { useParams } from "react-router-dom";

const ErrandDetailsPage = () => {

    const [errandCard, setErrandCard] =  useState();
    const [comments, setComments] =  useState();
    const commentRef = useRef();
    const param = useParams();

    
    useEffect(() => {
        getProduct()
        
    }, [])

    const getProduct = async () => {
    await axios.get("https://localhost:7090/api/Errands/GetErrand/"+param._id)
    .then(resp => {
      console.log(resp.data)
      setErrandCard(resp.data)
      setComments(resp.data.comments)
      console.log(resp.data.comments)
    }) 
    }

    function handleSubmit(event) {
      axios.post('https://localhost:7090/api/Comments', {
        comment: commentRef.current.value,
        errandId: param._id
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        
      });
    }


  return (
    <div>
        <div className='card-page-listings'>
            {errandCard ? <ErrandCard props={errandCard}  /> : <div/>}
        </div>

        <div className='errand-details-comment-box'>
              <form id="form" className='homepage-form' onSubmit={handleSubmit}>
                <label >
                  Comment something here:
                  <textarea className='errands-form-desc-input' ref={commentRef} rows="4" cols="50" form="form" placeholder='Enter text here...'>
                  </textarea>
                </label>
                <input className='errands-form-submit-btn' type="submit" value="Submit" />   
              </form>
        </div>

        <div className='errand-details-comments'>
          {comments ? comments.map((comment) => (
                <CommentCard props={comment}></CommentCard>
              )) : <div/>}
        </div>
        
    </div>
  )
}

export default ErrandDetailsPage