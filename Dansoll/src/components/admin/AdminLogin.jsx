import React from 'react'
import { Link } from 'react-router-dom'
import './AdminLogin.css'

const AdminLogin = () => {
  return (
    <div>
        <div className="login-container">
          <div className="header">
            <h1 className="heading">Log In</h1>
          </div>
          <div className="login-field">
            <form>
              <label htmlFor="school-id">Admin ID</label>
              <input type="text" id="school-id" placeholder="Input Admin ID here" />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Input Password here"
              />
              <Link to={"/admin"}>
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

export default AdminLogin
