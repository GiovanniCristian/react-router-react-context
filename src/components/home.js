import React from 'react'
import "./home.css";

const Home = () => {
  return (
  <div className='login'>
    <form>
      <label className='name'>
        <p>Username</p>
        <input type="text" />
      </label>
      <label className='pass'>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button className='sub' type="submit">Submit</button>
      </div>
    </form>
  </div>
  )
}

export default Home