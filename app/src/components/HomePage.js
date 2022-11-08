import axios from 'axios'
import React, { useRef,useState } from 'react'
import '../components/homePage.css'


const HomePage = () => {


  const emailRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  // const emailRef = useRef();

  function handleSubmit(event) {
    // event.preventDefault();
    axios.post('https://localhost:7090/api/Errands', {
      email: emailRef.current.value,
      title: titleRef.current.value,
      statusId: selectValue,
      description: descriptionRef.current.value
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
      
    });
  }

  const [selectValue, setSelectValue] = useState(1);
  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };

  
  return (
    <div>
        <div className='errands-form' >
            <form id="form" className='homepage-form' onSubmit={handleSubmit}>
                <label>
                Email
                <input className='errands-form-bar-input' type="email" ref={emailRef}/>
                </label>
                <label>
                Title
                <input className='errands-form-bar-input' type="text" ref={titleRef} />
                </label>
                <label >
                  Description
                  <textarea className='errands-form-desc-input' ref={descriptionRef} rows="4" cols="50" form="form" placeholder='Enter text here...'>
                  </textarea>
                </label>
                <div>
                <select value={selectValue} onChange={handleChange} className='errend-options'>
                  <option value="1">Inte påbörjad</option>
                  <option value="2">Påbörjad</option>
                  <option value="3">Klar</option>
                </select>
                </div>
                
                <input className='errands-form-submit-btn' type="submit" value="Submit" />    

        </form>
        

        </div>
       


        <div className='errands'>

        </div>




    </div>
  )
}

export default HomePage