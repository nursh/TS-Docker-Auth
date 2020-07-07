import React from 'react'

export const Signin = () => {
  return (
    <div>
      <button className="btn">Sign in With Google</button>
      <button className="btn">Sign in with Github</button>

      <hr/>
      
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
        </div>

        <div>
          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
}