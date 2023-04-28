import React from 'react';

function BlogNewsletter() {
  return (
	  <div className="widget sidebar-newsletter">
                  <div className="sn-icon">
                    <img src="img/icon/sn_icon.png" alt="" />
                  </div>
                  <div className="sn-title">
                    <h4 className="title">Мэдээлэл Бүртгүүлэх</h4>
                    <p>Бүртгүүлээд Мэдээлэл оруулах</p>
                  </div>
                  <form className="sn-form">
                    <input type="text" placeholder="Емайл оруулна уу" />
                    <button className="btn">Бүртгүүлэх</button>
                  </form>
                </div>
  )
}

export default BlogNewsletter;
