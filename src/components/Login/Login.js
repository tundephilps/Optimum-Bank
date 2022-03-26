import React from 'react';

import "./Register.scss"

const Login = () => {
  return <div><form class="dark-box">
  <h1>Optimum Bank</h1>
  <div class="inset">
  <p>
    
    <input required type="email" name="email" id="email" class="dark-input" />
    <label for="email">LOGIN</label>
  </p>
  <p>
    <input type="password" name="password" id="password" class="dark-input" />
    <label for="password">PASSWORD</label>
  </p>
    <p>
    <input type="password" name="password" id="password" class="dark-input" />
    <label for="password">PASSWORD</label>
  </p>
  </div>
  <p class="container">
    <input type="submit" name="go" id="go" value="Submit" class="dark-button" />
  </p>
</form></div>;
};

export default Login;
