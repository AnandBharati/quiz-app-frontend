import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterUserAPI } from '../../util/authSlice';
import './register.scss'

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setEmail] = useState('')
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (password === password2) {
      setIsPasswordMatch(true)
    } else {
      setIsPasswordMatch(false);
    }
  }, [password2, password])

  function clickHandler() {
    if (isPasswordMatch) {
      dispatch(RegisterUserAPI({ url: 'http://localhost:5000/auth/new', username: username, email: email, password: password }))
        .unwrap()
        .then((result) => {
          navigate('/login')
        })
    }
  }

  return (
    <div className="register">
      <div className='register-container'>
        <i className='fa fa-solid fa-lock'></i>
        <h1>Register</h1>
        <div className="username-container">
          <input type="text" name="username" id="username" required={true} value={username} onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor="username">Username</label>
        </div>
        <div className="email-container">
          <input type="text" name="email" id="email" required={true} value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="email">email</label>
        </div>
        <div className="password-container">
          <input type="password" name="password" id="password" required={true} value={password} onChange={(e) => setPassword(e.target.value)} />
          <label htmlFor="password">Password</label>
        </div>
        <div className="password-container">
          <input type="password" name="confirm-password" id="confirm-password" required={true} value={password2} onChange={(e) => setPassword2(e.target.value)} />
          <label htmlFor="confirm-password">Confirm password</label>
        </div>

        {!isPasswordMatch && <div className="errorMsg" style={{ color: 'red' }}>password does not match</div>}

        <button type='button' className='btnSignIn' onClick={clickHandler}>Submit</button>

        <div className="links" style={{justifyContent: 'end'}} >
          already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Register