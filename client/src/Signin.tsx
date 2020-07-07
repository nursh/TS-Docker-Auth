import React from 'react'

export const Signin = () => {
  return (
    <div>
      <button>Sign in With Google</button>
      <button>Sign in with Github</button>

      <form action="">
        <div>
          <label htmlFor="password"></label>
          <input type="text" id="name" name="name" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password"/>
        </div>
      </form>
    </div>
  );
}