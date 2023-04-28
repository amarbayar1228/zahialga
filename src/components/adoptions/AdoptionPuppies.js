import React from 'react';
import Slider from 'react-slick'
import {Link} from 'react-router-dom'

function PrevArrow(props){
  const {className,onClick} = props;
  return(
    <button type='button' className ={ className } onClick={ onClick }><img src="img/icon/arrow.png" alt='prev' /></button>
  );
}
function NextArrow(props){
  const {className,onClick} = props;
  return(
    <button type='button' className ={ className } onClick={ onClick }><img src="img/icon/arrow.png" alt='next' /></button>
  );
}

function AdoptionPuppies() {
  const settings = {

  dots: false,
	infinite: true,
	speed: 1000,
	autoplay: false,
	arrows: true,
	autoplaySpeed: 3000,
	prevArrow: <PrevArrow/>,
	nextArrow: <NextArrow/>,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				speed: 1000,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false,
				speed: 1000,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				speed: 1000,
			}
		},
	]
  }
  return (

	  <section className="adoption-area-two pt-110 pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center mb-65">
                <div className="section-icon"><img src="img/icon/pawprint.png" alt="" /></div>
                <h5 className="sub-title">Амьтадтай танилц</h5>
                <h2 className="title">Үрчлүүлэх гөлөгнүүд</h2>
                <p>
                  Нохойн ДНХ-ийн хамгийн сайн шинжилгээ бол Embark Breed  &amp; Health Kit (Chewy дээрээс үзэх) бөгөөд энэ нь танд хүрэн бор үүлдэр, ихэнх нохойн тухай мэдээллийг өгдөг.
                  </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container custom-container">
          <Slider className="row adopt-active" {...settings}>
            <div className="col-xl">
              <div className="adoption-item">
                <div className="adopt-thumb">
                  <Link to="/breeder-details"><img src="img/images/adop_img01.png" alt="" /></Link>
                  <span className="status">Үнэгүй</span>
                </div>
                <div className="adopt-content">
                  <div className="adopt-date"><i className="far fa-calendar-alt" /> Төрсөн он: 2021</div>
                  <h3 className="title"><Link to="/breeder-details">Голден ретривер</Link></h3>
                  <p>Голден ретривер бол дунд оврын буутай нохой юм.</p>
                  <Link to="/breeder-details" className="read-more">Илүүг үзэх <img src="img/icon/pawprint.png" alt="" /></Link>
                </div>
              </div>
            </div>
            <div className="col-xl">
              <div className="adoption-item">
                <div className="adopt-thumb">
                  <Link to="/breeder-details"><img src="img/images/adop_img02.png" alt="" /></Link>
                  <span className="status">Free</span>
                </div>
                <div className="adopt-content">
                  <div className="adopt-date"><i className="far fa-calendar-alt" /> Төрсөн он: 2021</div>
                  <h3 className="title"><Link to="/breeder-details">Герман sharped</Link></h3>
                  <p>Герман sharped бол дунд болон том хэмжээтэй үүлдэр юм.</p>
                  <Link to="/breeder-details" className="read-more">Илүүг үзэх  <img src="img/icon/pawprint.png" alt="" /></Link>
                </div>
              </div>
            </div>
            <div className="col-xl">
              <div className="adoption-item">
                <div className="adopt-thumb">
                  <Link to="/breeder-details"><img src="img/images/adop_img03.png" alt="" /></Link>
                  <span className="status">Free</span>
                </div>
                <div className="adopt-content">
                  <div className="adopt-date"><i className="far fa-calendar-alt" /> Төрсөн он: 2021</div>
                  <h3 className="title"><Link to="/breeder-details">Сибирийн хаски</Link></h3>
                  <p>Сибирийн хаски бол дунд оврын ажилчин чарганы үүлдэр юм.</p>
                  <Link to="/breeder-details" className="read-more">Илүүг үзэх  <img src="img/icon/pawprint.png" alt="" /></Link>
                </div>
              </div>
            </div>
            <div className="col-xl">
              <div className="adoption-item">
                <div className="adopt-thumb">
                  <Link to="/breeder-details"><img src="img/images/adop_img04.png" alt="" /></Link>
                  <span className="status">Free</span>
                </div>
                <div className="adopt-content">
                  <div className="adopt-date"><i className="far fa-calendar-alt" /> Төрсөн он: 2021</div>
                  <h3 className="title"><Link to="/breeder-details">French Bulldog</Link></h3>
                  <p>Франц бульдог бол гэрийн тэжээвэр нохойн үүлдэр бөгөөд хамтрагч байхаар тэжээгддэг.</p>
                  <Link to="/breeder-details" className="read-more">Илүүг үзэх <img src="img/icon/pawprint.png" alt="" /></Link>
                </div>
              </div>
            </div>
            <div className="col-xl">
              <div className="adoption-item">
                <div className="adopt-thumb">
                  <Link to="/breeder-details"><img src="img/images/adop_img05.png" alt="" /></Link>
                  <span className="status">Free</span>
                </div>
                <div className="adopt-content">
                  <div className="adopt-date"><i className="far fa-calendar-alt" /> Төрсөн он: 2021</div>
                  <h3 className="title"><Link to="/breeder-details">Siberian Husky</Link></h3>
                  <p>Франц бульдог бол гэрийн тэжээвэр нохойн үүлдэр бөгөөд хамтрагч байхаар тэжээгддэг.</p>
                  <Link to="/breeder-details" className="read-more">Илүүг үзэх <img src="img/icon/pawprint.png" alt="" /></Link>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
  )
}

export default AdoptionPuppies;
