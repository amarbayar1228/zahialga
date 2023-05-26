import React from 'react';

function ContactAddress() {
  return (
	  	<div className="col-xl-5 col-lg-6 col-md-8">
                <div className="contact-info-wrap">
                  <div className="contact-img">
                    <img src="img/images/contact_img.png" alt="" />
                  </div>
                  <div className="contact-info-list">
                    <ul>
                      <li>
                        <div className="icon"><i className="fas fa-map-marker-alt" /></div>
                        <div className="content">
                          <p>W84 Баянгол дүүрэг 1-р хороо Алтай хотхон Энгельс гудамж 29 байр, 160тоот, 24 r Хороо </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon"><i className="fas fa-phone-alt" /></div>
                        <div className="content">
                          <p>+976 94262047</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon"><i className="fas fa-envelope-open" /></div>
                        <div className="content">
                          <p>Tursanaa@info.com</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="contact-social">
                    <ul>
                      <li><a href="https://www.facebook.com/Ab1228/"><i className="fab fa-facebook-f" /></a></li>
                      <li><a href="https://www.facebook.com/Ab1228/"><i className="fab fa-twitter" /></a></li>
                      <li><a href="https://www.facebook.com/Ab1228/"><i className="fab fa-linkedin-in" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>

  )
}

export default ContactAddress;
