import React from 'react'
import '../components/homePage.css'

const HomePage = () => {
  return (
    <div>
        <h1>Hello World</h1>
        <div className='errands-form'>
            <form>
                <label>
                User:
                <input type="text" name="name" />
                </label>
                <label>
                Ärende:
                <input type="text" name="name" />
                </label>
            <input type="submit" value="Submit" />
        </form>

        </div>
       


        <div className='errands'>

        </div>




    </div>
  )
}

export default HomePage