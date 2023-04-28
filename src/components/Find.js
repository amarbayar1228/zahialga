import React from 'react';
import {Link} from 'react-router-dom'


function Find() {
  return (
    <div className="find-area">
    <div className="container custom-container">
      <div className="row">
        <div className="col-12">
          <form >
            <div className="find-wrap">
              <div className="location">
                <i className="flaticon-location" />
                <input type="text" defaultValue="Байpшил болон Zip" />
              </div>
              <div className="find-category">
                <ul>
                  <li><Link to="/shop"><i className="flaticon-dog" /> Нохой хайх</Link></li>
                  <li><Link to="/shop"><i className="flaticon-happy" /> Муур хайх</Link></li>
                  <li><Link to="/shop"><i className="flaticon-dove" /> Шувууд хайх </Link></li>
                </ul>
              </div>
              <div className="other-find">
                <div className="dropdown">
                  <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Бусад амьтдыг хайх
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link className="dropdown-item" to="/shop">Нохой хайх</Link>
                    <Link className="dropdown-item" to="/shop">Муур хайх</Link>
                    <Link className="dropdown-item" to="/shop">Шувууд хайх</Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Find;
