import axios from 'axios'
import React, { useRef } from 'react'
import '../components/homePage.css'


const RegisterPage = () => {


  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneNrRef = useRef();
  // const emailRef = useRef();

  function handleSubmit(event) {
    // event.preventDefault();
    axios.post('https://localhost:7090/api/Users', {
      email: emailRef.current.value,
      name: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      phoneNr: phoneNrRef.current.value
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
        <div className='errands-form' >
            <form id="form" className='homepage-form' onSubmit={handleSubmit}>
                <label>
                Email
                <input className='errands-form-bar-input' type="email" ref={emailRef}/>
                </label>
                <label>
                First Name
                <input className='errands-form-bar-input' type="text" ref={firstNameRef} />
                </label>
                <label>
                Last Name
                <input className='errands-form-bar-input' type="text" ref={lastNameRef} />
                </label>
                <label>
                Phone Number
                <input className='errands-form-bar-input' type="text" ref={phoneNrRef} />
                </label>
                
                <input className='errands-form-submit-btn' type="submit" value="Submit" />    

        </form>
        

        </div>
       


        <div className='errands'>

        </div>




    </div>
  )
}

export default RegisterPage