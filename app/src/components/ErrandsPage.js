import React,{useState, useEffect } from 'react'
import ErrandCard from './ErrandCard'
import axios from 'axios';
import '../components/ErrandsPage.css'



const ErrandsPage = () => {

    const [errandCards, setErrandCards] =  useState();
    
    useEffect(() => {
        getAllProducts()
        
    }, [])

    const getAllProducts = async () => {
    await axios.get("https://localhost:7090/api/Errands")
    .then(resp => {
      console.log(resp.data)
      let errandsSort = resp.data;

      errandsSort.sort((a, b) => {
        const timeA = a.created;
        const timeB = b.created;
        if (timeA > timeB)
          return -1;
        else if (timeA < timeB)
          return 1;
        return 0; //Ifall samma tid
      });
      
      setErrandCards(errandsSort)
    }) 
    }


  return (
    <div>
        <div className='card-page-listings'>
            {errandCards ? errandCards.map((errand) => (
              <ErrandCard props={errand}  />
            )) : <div/>}
        </div>
        
    </div>
  )
}

export default ErrandsPage