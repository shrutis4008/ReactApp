import React from 'react'
import Link from 'react-router-dom'

const Register = () => {
  return (
    <div className='connect'>
      <h1>Register</h1>

      <form>
        <input required type='text' placeholder='name'/> 
        <input required type='email' placeholder='email'/> 
        <input required type='password' placeholder='password'/>
        <button> Register </button>
        <p> This is an error!</p>
        <a href="/login">Already have an account?</a>

      </form>
    </div>
  )
}

export default Register
