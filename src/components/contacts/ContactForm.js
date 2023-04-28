import React from 'react';
import ContactAddress from './ContactAddress'

function ContactForm() {
  return (

	  <section className="contact-area pt-110 pb-110">
        <div className="container">
          <div className="container-inner-wrap">
            <div className="row justify-content-center justify-content-lg-between">
              <div className="col-lg-6 col-md-8 order-2 order-lg-0">
                <div className="contact-title mb-20">
                  <h5 className="sub-title">Бидэнтэй холбогдох</h5>
                  <h2 className="title">Асуултаа ярилцъя<span>.</span></h2>
                </div>
                <div className="contact-wrap-content">
                  <p>Гэрийн нохой бол чонын идэштэн юм. Нохой нь эртний, устаж үгүй болсон чоно, орчин үеийн саарал өнгөнөөс гаралтай.</p>
                  <form className="contact-form">
                    <div className="form-grp">
                      <label htmlFor="name">Нэр <span>*</span></label>
                      <input type="text" id="name" placeholder="Нэрээ оруулна уу..." />
                    </div>
                    <div className="form-grp">
                      <label htmlFor="email">Емайл хаяг <span>*</span></label>
                      <input type="text" id="email" placeholder="info.example@.com" />
                    </div>
                    <div className="form-grp">
                      <label htmlFor="message">Message <span>*</span></label>
                      <textarea name="message" id="message" placeholder="Үзэл бодол..." defaultValue={""} />
                    </div>
                    <div className="form-grp checkbox-grp">
                      <input type="checkbox" id="checkbox" />
                      <label htmlFor="checkbox">Имэйл хаягаа бүү харуул</label>
                    </div>
                    <button type="button" className="btn rounded-btn">Илгээх</button>
                  </form>
                </div>
              </div>

              <ContactAddress/>

            </div>
          </div>
        </div>
      </section>
  )
}

export default ContactForm;
