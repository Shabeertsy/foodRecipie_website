import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../../context/Context'


export default function Navbar() {
  let { text } = useContext(ApiContext)
  return (
    <div>
      <div className="navbar-inner px-4 border-bottom font-family">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <a className="navbar-brand" href="#">TasteBud</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav m-auto">
              <Link className="nav-item navbar-link nav-link active" to='/'>Home</Link>
              <a className="nav-item navbar-link nav-link" href="#">Dishes</a>
              <a className="nav-item navbar-link nav-link" href="#">Categories</a>
            </div>
          </div>

        </nav>
      </div>
    </div>
  )
}
