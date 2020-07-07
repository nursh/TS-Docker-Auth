import React from 'react'

export const Signup = () => {
  return (
    <div>
      <button className="btn">Sign up With Google</button>
      <button className="btn">Sign up with Github</button>

      <hr />

      <form>
        <div>
          <label htmlFor="username"></label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
}