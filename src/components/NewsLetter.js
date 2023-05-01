import React from "react";
function Newsletter(){
    return(
        <div className="newsletter-area pb-110 mt-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="newsletter-wrap">
                <div className="newsletter-content">
                  <h2 className="title">Мэдээлэл илгээх</h2>
                  <p><span>*</span> Имэйлээ бүү харуул..</p>
                </div>
                <div className="newsletter-form">
                  <form >
                    <input type="email" placeholder="Емайл ээ оруулна уу..." />
                    <button type="submit" className="btn">Илгээх</button>
                  </form>
                </div>
                <div className="newsletter-shape"><img src="img/images/newsletter_shape01.png" alt="" /></div>
                <div className="newsletter-shape shape-two"><img src="img/images/newsletter_shape02.png" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Newsletter