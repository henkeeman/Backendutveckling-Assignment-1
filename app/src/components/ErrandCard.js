import React,{useState} from 'react'
import '../components/ErrandCard.css'
import axios from 'axios';
import { Link } from 'react-router-dom'

const ErrandCard = (errand) => {

    const [selectValue, setSelectValue] = useState(errand.props.status);
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
          <Link to={'/errands/' + errand.props.id}>
            <h1 href="/hej" className='card-text'>{errand.props.title}</h1>
          </Link>

            <h2 className='card-text'>{errand.props.description}</h2>

            <select value={selectValue} onChange={handleChange} className='errend-options'>
                <option value="1">Inte påbörjad</option>
                <option value="2">Påbörjad</option>
                <option value="3">Klar</option>
            </select>

            <h3 className='card-text'>{errand.props.user.email}</h3>
            <div className='card-text-names'>
              <h4 className='card-text'>{errand.props.user.name} </h4>
              <h4 className='card-text'>{errand.props.user.lastName} </h4>
            </div>
            <h3 className='card-text'>{dateString}</h3>


        </div>
    </div>
    
  )
}

export default ErrandCard