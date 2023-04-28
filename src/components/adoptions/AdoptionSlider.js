import React from 'react';
import {Link} from 'react-router-dom'
import HomeCounter from '../hometwo/HomeCounter'
import Slider from 'react-slick'

function AdoptionSlider() {
  const settings = {
    dots: false,
	infinite: true,
	speed: 1000,
	autoplay: true,
	arrows: false,
	autoplaySpeed: 4000,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 1000,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
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
	  <section className="inner-breeder-area breeder-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-4 col-lg-9 col-md-12 col-sm-9">
              <div className="adoption-content">
                <h5 className="sub-title">Adoption-той танилц</h5>
                <h2 className="title">Work For <span>Adoption</span> Happy Time</h2>
                <p>Нохойн ДНХ-ийн хамгийн сайн шинжилгээ бол Chewy-д хийсэн Embark Breed and Health Kit-ийн шинжилгээ бөгөөд гэрийн тэжээвэр нохойг чонын үр удам болохыг харуулж байна. Нохой нь эртний үеэс гаралтай.</p>
                <div className="adoption-list">
                  <ul>
                    <li><i className="flaticon-tick" /> Embark Breed &amp; Health</li>
                    <li><i className="flaticon-tick" /> Гэрийн нохой бол гаршуулсан нохой юм</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-9 col-md-12 col-sm-9">
              <div className="breeder-info-wrap">
                <div className="row no-gutters justify-content-center">
                  <div className="col-md-6">
                    <Slider className="breeder-active owl-carousel"{...settings}>
                      <div className="breeder-item">
                        <Link to="/breeder-details">
                          <img src="img/images/breeder_img01.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="breeder-item">
                        <Link to="/breeder-details">
                          <img src="img/images/breeder_img02.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="breeder-item">
                        <Link to="/breeder-details">
                          <img src="img/images/breeder_img03.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="breeder-item">
                        <Link to="/breeder-details">
                          <img src="img/images/breeder_img04.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="breeder-item">
                        <Link to="/breeder-details">
                          <img src="img/images/breeder_img05.jpg" alt="" />
                        </Link>
                      </div>
                    </Slider>
                  </div>
                  <div className="col-md-6">
                    <div className="breed-services-info" style={{backgroundImage:'url("img/bg/breed_services_bg.jpg")'}}>
                      <h5 className="sub-title">Нохой үрчлэх</h5>
                      <h3 className="title">Үрчлүүлэх боломжтой</h3>
                      <p>Хамгийн сайн нохойны ДНХ-ийн шинжилгээ бол нохойг хангадаг Embark Breed and Health Kit (Chewy-ээс үзэх) юм.</p>
                      <Link to="/doglist" className="btn">Илүүг үзэх <img src="img/icon/w_pawprint.png" alt="" /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="counter-area mt-70">
          <HomeCounter/>
        </div>
        </div>
          
      </section>
  )
}

export default AdoptionSlider;
