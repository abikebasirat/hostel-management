// import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

const AdminReg = () => {
  return (
    <div className='container form__ --100vh'>
     <div className='form-container'>
        <p className='title'>Create an account</p>

        <form className='form'>
            <div className='--dir-column'>
                <label htmlFor="text">Full name:</label>
                <input 
                type='text'
                className='input'
                placeholder='Enter your name'
                required />
            </div>
            <div className='--dir-column'>
                <label htmlFor="email">Email:</label>
                <input 
                type='email'
                className='input'
                placeholder='example@gmail.com'
                required />
            </div>
            <div className='--dir-column'>
                <label htmlFor="password">Password:</label>
                <input 
                type='password'
                className='input'
                placeholder='Enter your password'
                required />
            </div>

            <div className='--dir-column'>
                <label htmlFor="password">Confirm password:</label>
                <input 
                type='password'
                className='input'
                placeholder='confirm your password'
                required />
            </div>
            <button className='--btn'>Create an account</button>
            <p>Already have an account? <Link to="/login">Login</Link> ||  <Link to="/homedash">Go Home</Link></p>
        </form>
     </div>
    </div>
  )
}

export default AdminReg