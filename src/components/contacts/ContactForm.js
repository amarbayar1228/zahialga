import React, { useState } from 'react';
import ContactAddress from './ContactAddress'
import emailjs from "emailjs-com";
import { Button, message } from 'antd';

function ContactForm() {
  const [mailData, setMailData] = useState({
    client_name: "",
    email: "",
    message: "",
  });
  const [errorS, setError] = useState("");
  const [loadingS, setLoadingS] = useState(false);
  const onChange = (e) => { 
    setMailData({ ...mailData, [e.target.name]: e.target.value })
  };
  const emailSend = () =>{  
    setLoadingS(true);
    console.log("object", mailData.client_name.length);
    if (mailData.client_name.length === 0 || mailData.email.length === 0 || mailData.message.length === 0) {
        setError("Бүх талбарыг бөглөнө үү!!");
        message.error("Бүх талбарыг бөглөнө үү!!");
        setLoadingS(false);
    }else {
    setError("");
    setLoadingS(true);
    emailjs.send(
          "service_vfeb1rk", // service id service_rq0sez5
          "template_3k9z01y", // template id
          mailData,
          "lD7XQ055kOW7q4V1n", // public api lD7XQ055kOW7q4V1n 
        ).then((res) => { 
            // setError(false);
            // clearError();
            setLoadingS(false);
            message.success("Амжилттай илгээлээ!")
            setMailData({ to_name: "", from_name: "", message: "" });
          },
          (err) => { 
            message.error("Амжилтгүй хүсэлт")
            setLoadingS(false);
          }
      );
    }
   
  }
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
                      <input type="text" id="name" name="client_name" placeholder="Нэрээ оруулна уу..." onChange={(e) => onChange(e)}/>
                    </div>
                    <div className="form-grp">
                      <label htmlFor="email">Емайл хаяг <span>*</span></label>
                      <input type="text" id="email"  name="email"  placeholder="info.example@.com"onChange={(e) => onChange(e)} />
                    </div>
                    <div className="form-grp">
                      <label htmlFor="message">Message <span>*</span></label>
                      <textarea name="message" id="message" placeholder="Үзэл бодол..." defaultValue={""} onChange={(e) => onChange(e)}/>
                    </div>
                    <div className="form-grp checkbox-grp">
                      <input type="checkbox" id="checkbox" />
                      <label htmlFor="checkbox">Имэйл хаягаа зөв бичсэн үү?</label>
                    </div> 
                    {/* <button type="button" className="btn rounded-btn" onClick={emailSend}  style={errorS === 0 ? {cursor: "pointer"}: {cursor: "no-drop"}}>Илгээх</button> */}
                  </form>
                  <Button onClick={emailSend} loading={loadingS} disabled={loadingS} size='large' type='primary' style={{padding: "0px 34px", height: "50px", width: "138px", fontSize: "20px"}} className='btn'>Илгээх</Button>
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
