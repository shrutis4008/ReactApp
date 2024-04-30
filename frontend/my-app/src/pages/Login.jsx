import React from 'react'

const Login = () => {
  return (
    <div className='connect'>
      <h1>Login</h1>

      <form>
        <input required type='text' placeholder='email'/> 
        <input required type='password' placeholder='password'/>
        <button> Login </button>
        <p> This is an error!</p>
        <a href="/register">Register for a new account here.</a>

      </form>
    </div>
  )
}

export default Login
