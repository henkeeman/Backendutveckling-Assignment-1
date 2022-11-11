import React,{useState} from 'react'
import '../components/ErrandCard.css'
import axios from 'axios';

const ErrandCard = (errand) => {

    const [selectValue, setSelectValue] = useState(errand.props.status);
    let date = new Date(Date.parse(errand.props.created));
    let dateString = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + (date.getDate() + " " + (date.getHours()) + ":" + (date.getMinutes()));

    const changeStatus = async (e) => {
        //   
        await axios.put("https://localhost:7090/api/Errands/"+errand.props.id,{StatusId: e.target.value})
        .then(resp => {
        console.log(resp.data)
        }) 
    }
    const handleChange = (e) => {
      setSelectValue(e.target.value);
      changeStatus(e);
    };

  return (
    <div>
        <div className='errand-card-line'>

        </div>
        
        <div className='errand-card'>
            <h1 className='card-text'>{errand.props.title}</h1>

            <h2 className='card-text'>{errand.props.description}</h2>

            <select value={selectValue} onChange={handleChange} className='errend-options'>
                <option value="1">Inte påbörjad</option>
                <option value="2">Påbörjad</option>
                <option value="3">Klar</option>
            </select>

            <h3 className='card-text'>{errand.props.email}</h3>
            <h3 className='card-text'>{dateString}</h3>


        </div>
    </div>
    
  )
}

export default ErrandCard