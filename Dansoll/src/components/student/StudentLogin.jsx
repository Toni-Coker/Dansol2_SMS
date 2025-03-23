import React from 'react'
import { Link } from 'react-router-dom'
import './StudentLogin.css'

const StudentLogin = () => {
  return (
    <div>
        <div className="login-container">
          <div className="header">
            <h1 className="heading">Log In</h1>
          </div>
          <div className="login-field">
            <form>
              <label htmlFor="school-id">Student ID</label>
              <input type="text" id="school-id" placeholder="Input Student ID here" />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Input Password here"
              />
              <Link to={"/student"}>
                <button className="login-button" type="submit">
                  Log In
                </button>
              </Link>
            </form>
          </div>
        </div>
    </div>
  )
}

export default StudentLogin
