import React from 'react';
import {Link} from 'react-router-dom'

function BreederContent() {
  return (
	   <section className="breeder-details-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="breeder-details-content">
                <h4 className="title">Siberian Husky</h4>
                <p>Гэрийн нохой бол чонын идэштэн юм. Нохой t нь эртний устаж үгүй болсон чононоос гаралтай бөгөөд орчин үеийн саарал чоно бол нохойн хамгийн амьд хамаатан юм. Нохой бол гаршуулсан анхны төрөл зүйл юм
                   анчин-хаалгачид. Эдгээрт 6, 12, 16 долоо хоногтой гурван цувралын үндсэн вакцинууд багтана.</p>
                <p>Нохой бол анчин хаалгачдын гаршуулсан анхны төрөл зүйл юм. Үүнд орчин үеийн саарал чоно нохойных болно.</p>
                <div className="breeder-details-img">
                  <img src="img/images/breeder_details.jpg" alt="" />
                </div>
                <h4 className="title">Биогийн тухай</h4>
                <p>Гэрийн нохой нь чонын хорхойтой. Нохой t нь эртний устаж үгүй болсон чононоос гаралтай бөгөөд орчин үеийн саарал чоно бол нохойн хамгийн амьд хамаатан юм. Нохой бол анчдын хийсэн анхны төрөл зүйл юм.</p>
                <div className="breeder-dog-info">
                  <h5 className="title">Нохойны мэдээлэл</h5>
                  <div className="row">
                    <div className="col-md-3 col-sm-4 col-6">
                      <div className="breeder-info-item">
                        <h6>Хүйс:</h6>
                        <span>Эмэгтэй</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-6">
                      <div className="breeder-info-item">
                        <h6>Нас:</h6>
                        <span>1 Жил</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-6">
                      <div className="breeder-info-item">
                        <h6>Өнгө:</h6>
                        <span>Цагаан</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-6">
                      <div className="breeder-info-item">
                        <h6>Pet ID:</h6>
                        <span>09481</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-6">
                      <div className="breeder-info-item">
                        <h6>Size:</h6>
                        <span>Med. 26-60 lbs</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-6">
                      <div className="breeder-info-item">
                        <h6>Хүйс:</h6>
                        <span>Эмэгтэй</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-6">
                      <div className="breeder-info-item">
                        <h6>Хот:</h6>
                        <span>Улаанбаатар</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-6">
                      <div className="breeder-info-item">
                        <h6>Breed:</h6>
                        <span>Husky</span>
                      </div>
                    </div>
                  </div>
                  <Link to="/contacts" className="btn">Өнөөдөр өргөдөл гарга <img src="img/icon/w_pawprint.png" alt="" /></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="breeder-sidebar">
                <div className="widget breeder-widget">
                  <div className="breeder-widget-title mb-20">
                    <h5 className="title">тэжээвэр амьтдаа хайх</h5>
                  </div>
                  <form  className="sidebar-find-pets">
                    <div className="form-grp search-box">
                      <input type="text" placeholder="Хайх" />
                      <button><i className="fas fa-search" /></button>
                    </div>
                    <div className="form-grp">
                      <i className="flaticon-location" />
                      <input type="text" placeholder="Байршил" />
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="form-grp">
                          <i className="flaticon-color-palette" />
                          <input type="text" placeholder="Цагаан" />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-grp">
                          <i className="far fa-calendar-alt" />
                          <input type="text" defaultValue={2021} />
                        </div>
                      </div>
                    </div>
                    <div className="form-grp">
                      <i className="flaticon-sex" />
                      <select name="name" className="selected">
                        <option value>Эмэгтэй</option>
                        <option value>Эрэгтэй</option>
                        <option value>Үрчлэлт</option>
                        <option value>Үржүүлэгч</option>
                      </select>
                    </div>
                    <div className="form-grp">
                      <i className="fas fa-dollar-sign" />
                      <select name="name" className="selected">
                        <option value>Price</option>
                        <option value>100.000₮ - 150.000₮</option>
                        <option value>150.000₮ - 250.000₮</option>
                        <option value>250.000₮ - 350,000₮</option>
                        <option value>350.000₮ - 550.000₮</option>
                        <option value>550.000₮ - 100.000</option>
                      </select>
                    </div>
                    <div className="form-grp">
                      <i className="flaticon-plus-18-movie" />
                      <select name="name" className="selected">
                        <option value>Насанд хүрсэн :</option>
                        <option value>6 Сар</option>
                        <option value>9 Сар</option>
                        <option value>1 Жил</option>
                      </select>
                    </div>
                    <button className="btn">Тэжээвэр амьтдыг хайх</button>
                  </form>
                </div>
                <div className="widget sidebar-newsletter">
                  <div className="sn-icon">
                    <img src="img/icon/sn_icon.png" alt="" />
                  </div>
                  <div className="sn-title">
                    <h4 className="title">Мэдээлэл нэмэх</h4>
                    <p>Бүртгүүлээд мэдээлэл нэмэх</p>
                  </div>
                  <form  className="sn-form">
                    <input type="text" placeholder="Емайл оруулна уу..." />
                    <button className="btn">Илгээх</button>
                  </form>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
  )
}

export default BreederContent;
