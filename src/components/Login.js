import React from "react"

function Login() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <div>
            <input 
            type="text" 
            name="username" 
            placeholder="username" 
            required
            />
          </div>
          <div>
            <input 
            type="password" 
            name="password" 
            placeholder="Password"
            required
           />
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    )
}

export default Login