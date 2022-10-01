import React from "react";

function SignUp() {
    return (
      <div>
        <h1>SignUp</h1>
        <form>
          <label> Name: &emsp;&emsp;&nbsp;&nbsp;
            <input 
            type="text" 
            name="name" 
            placeholder="Name"
            required
            />
          </label> 
          <br /><br />
          <label> Password: &emsp;
            <input 
            type="password" 
            name="password" 
            placeholder="create password" 
            required
            />
          </label> 
          <br /><br />
          <input type="submit" value="create account" />
        </form>
      </div>
    )
}

export default SignUp;