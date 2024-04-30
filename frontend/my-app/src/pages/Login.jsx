import React from 'react'

const Login = () => {
  return (
    <div classname='connect'>
      <h1>Login</h1>

      <form>
        <input type='text' placeholder='email'/> 
        <input type='password' placeholder='password'/>
        <button> Login </button>

      </form>
    </div>
  )
}

export default Login
