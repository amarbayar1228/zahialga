import React from "react";
import {Link} from 'react-router-dom'


function Footer() {
  return (
    <footer>
    <div className="footer-top-area footer-bg">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-3">
            <div className="footer-widget">
              <div className="f-logo">
                <Link to="/">
                  {/* <img src="img/logo/logo3.png" alt="" />  hvswel zurag hiij bolno*/}
                  <span style={{fontWeight: "600", color: "red"}}>SANAA SHOP </span>
                  </Link>
              </div>
              <div className="footer-text">
                <p>Хамгийн сайн  text text text text </p>
              </div>
              <div className="footer-contact">
                <div className="icon"><i className="fas fa-headphones" /></div>
                <div className="content">
                  <h4 className="title"><a href="tel:0987654321">+97694262047</a></h4>
                  <span>Залга яг одоо</span>
                </div>
              </div>
              <div className="footer-social">
                <ul>
                  <li><a href="https://www.facebook.com/Ab1228/"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href="https://www.facebook.com/Ab1228/"><i className="fab fa-twitter" /></a></li>
                  <li><a href="https://www.facebook.com/Ab1228/"><i className="fab fa-youtube" /></a></li>
                  <li><a href="https://www.facebook.com/Ab1228/"><i className="fab fa-linkedin-in" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-2">
            {/* <div className="footer-widget">
              <h4 className="fw-title">Манай бодлого</h4>
              <div className="fw-link">
                <ul>
                  <li><Link to="/contacts">Нууцлалын бодлого</Link></li>
                  <li><Link to="/contacts">Үйлчилгээний нөхцөл</Link></li>
                  <li><Link to="/contacts">Редакцийн бодлого</Link></li>
                  <li><Link to="/contacts">Буцаах бодлого</Link></li> 
                  <li><Link to="/contacts">Бидний нөхцөл</Link></li>
                </ul>
              </div>
            </div> */}
          </div>
          <div className="col-2">
            <div className="footer-widget">
              <h4 className="fw-title">Бидний үйлчилгээ</h4>
              <div className="fw-link">
                <ul> 
                  <li><Link to="/contacts">Бидэнтэй холбоо барих</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="footer-widget">
              <h4 className="fw-title">Instagram</h4>
              <div className="fw-insta">
                <ul>
                  <li><a href="https://www.facebook.com/Ab1228/"><img src="img/bg/bg1.jpg" alt="" /></a></li>
                  <li><a href="https://www.facebook.com/Ab1228/"><img src="img/bg/bg1.jpg" alt="" /></a></li>
                  <li><a href="https://www.facebook.com/Ab1228/"><img src="img/bg/bg1.jpg" alt="" /></a></li>
                  <li><a href="https://www.facebook.com/Ab1228/"><img src="img/bg/bg1.jpg" alt="" /></a></li>
                  <li><a href="https://www.facebook.com/Ab1228/"><img src="img/bg/bg1.jpg" alt="" /></a></li>
                  <li><a href="https://www.facebook.com/Ab1228/"><img src="img/bg/bg1.jpg" alt="" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="footer-shape"><img src="img/images/footer_shape01.png" alt="" /></div>
      <div className="footer-shape shape-two"><img src="img/images/footer_shape02.png" alt="" /></div> */}
    </div>
    <div className="copyright-area">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="copyright-text">
              <p>Зохиогчийн эрх © 2023 SANAASHOP. Бүх эрх хуулиар хамгаалагдсан.</p>
            </div>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <div className="footer-lang">
              <div className="dropdown">
                <button className="dropdown-toggle" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src="img/icon/united-states.png" alt="" /> English
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                  <Link className="dropdown-item" to="/"><img src="img/icon/russia.png" alt="" />Russia</Link>
                  <Link className="dropdown-item" to="/"><img src="img/icon//thailand.png" alt="" />Thailand</Link>
                  <Link className="dropdown-item" to="/"><img src="img/icon/india.png" alt="" />India</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

  )
}

export default Footer;
