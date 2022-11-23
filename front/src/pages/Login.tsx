import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <section>
      <form onSubmit={()=> console.log("form submited")}>
        <div>
          <label htmlFor="email">Votre email</label>
          <input type="text" id="email" required/>
        </div>
        <div>
          <label htmlFor="password">Votre MDP</label>
          <input type="text" id="password" required/>
        </div>
        <button type="submit" onClick={()=> console.log("bite")}>OK</button>
      </form>
    </section>
  )
}

export default Login;