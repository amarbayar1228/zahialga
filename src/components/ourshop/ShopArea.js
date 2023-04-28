import React from 'react';
import {Link} from 'react-router-dom'

function ShopArea() {
  return (
	  <div className="shop-area pt-110 pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-8 order-2 order-lg-0">
              <aside className="shop-sidebar">
                <div className="widget">
                  <div className="sidebar-search">
                    <form>
                      <input type="text" placeholder="Search ..." />
                      <button type="submit"><i className="fa fa-search" /></button>
                    </form>
                  </div>
                </div>
                <div className="widget">
                  <h4 className="sidebar-title">Категори</h4>
                  <div className="shop-cat-list">
                    <ul>
                      <li><Link to="/shop">Чижигнэх <span>+</span></Link></li>
                      <li><Link to="/shop">Нохойн хоол <span>+</span></Link></li>
                      <li><Link to="/shop">Нохойн хэрэгсэл <span>+</span></Link></li>
                      <li><Link to="/shop">Нохойн гэр <span>+</span></Link></li>
                      <li><Link to="/shop">Аюулгүй хувцас <span>+</span></Link></li>
                      <li><Link to="/shop">Тэжээвэр амьтдыг хамгаалах <span>+</span></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="widget">
                  <h4 className="sidebar-title">Шилдэг Брэнд</h4>
                  <div className="shop-brand-list">
                    <ul>
                      <li><Link to="/shop">Geco</Link></li>
                      <li><Link to="/shop">Лиц цэцэг</Link></li>
                      <li><Link to="/shop">Suppke</Link></li>
                      <li><Link to="/shop">WeBeyond</Link></li>
                      <li><Link to="/shop">Edstudy</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="widget">
                  <h4 className="sidebar-title">Үнээр шүүх</h4>
                  <div className="price_filter">
                    <div id="slider-range" />
                    <div className="price_slider_amount">
                      <span>Үнэ :</span>
                      <input type="text" id="amount" name="price" placeholder="Үнэ оруулах" />
                      <input type="submit" className="btn" defaultValue="Хайх" placeholder="Хайх"/>
                    </div>
                  </div>
                </div>
                <div className="widget shop-widget-banner">
                  <Link to="/shop"><img src="img/product/shop_add.jpg" alt="" /></Link>
                </div>
              </aside>
            </div>
            <div className="col-lg-9">
              <div className="shop-wrap">
                <h4 className="title">Дэлгүүр</h4>
                <div className="shop-page-meta mb-30">
                  <div className="shop-grid-menu">
                    <ul>
                      <li className="active"><a href="/#"><i className="fas fa-th" /></a></li>
                      <li><a href="/#"><i className="fas fa-list" /></a></li>
                    </ul>
                  </div>
                  <div className="shop-showing-result">
                    <p>Нийт 1-12 of 13</p>
                  </div>
                  <div className="shop-show-list">
                    <form>
                      <label htmlFor="show">Харах</label>
                      <select id="show" className="selected">
                        <option value>08</option>
                        <option value>12</option>
                        <option value>16</option>
                        <option value>18</option>
                        <option value>20</option>
                      </select>
                    </form>
                  </div>
                  <div className="shop-short-by">
                    <form>
                      <label htmlFor="shortBy">Эрэмбэлэх</label>
                      <select id="shortBy" className="selected">
                        <option value>Хамгийн сүүлд эрэмбэлэх</option>
                        <option value>Багаас их</option>
                        <option value>Ихээс бага</option>
                        <option value>Алдартай</option>
                      </select>
                    </form>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-sm-6">
                    <div className="shop-item mb-55">
                      <div className="shop-thumb">
                        <Link to="/shop-details"><img src="img/product/shop_item01.jpg" alt="" /></Link>
                      </div>
                      <div className="shop-content">
                        <span>Dog toy’s</span>
                        <h4 className="title"><Link to="/shop-details">Pet Knit Knacks</Link></h4>
                        <div className="shop-content-bottom">
                          <span className="price">28.000₮</span>
                          <span className="add-cart"><Link to="/shop-details">Нэмэх +</Link></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="shop-item mb-55">
                      <div className="shop-thumb">
                        <Link to="/shop-details"><img src="img/product/shop_item02.jpg" alt="" /></Link>
                      </div>
                      <div className="shop-content">
                        <span>Dog toy’s</span>
                        <h4 className="title"><Link to="/shop-details">Squeaky Dog</Link></h4>
                        <div className="shop-content-bottom">
                          <span className="price">19.000₮</span>
                          <span className="add-cart"><Link to="shop-details">Нэмэх +</Link></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="shop-item mb-55">
                      <div className="shop-thumb">
                        <Link to="/shop-details"><img src="img/product/shop_item03.jpg" alt="" /></Link>
                      </div>
                      <div className="shop-content">
                        <span>Dog toy’s</span>
                        <h4 className="title"><Link to="/shop-details">Pet Knit Knacks</Link></h4>
                        <div className="shop-content-bottom">
                          <span className="price">29.000₮</span>
                          <span className="add-cart"><Link to="/shop-details">Нэмэх +</Link></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="shop-item mb-55">
                      <div className="shop-thumb">
                        <Link to="/shop-details"><img src="img/product/shop_item04.jpg" alt="" /></Link>
                      </div>
                      <div className="shop-content">
                        <span>Dog toy’s</span>
                        <h4 className="title"><Link to="/shop-details">Yoda Carriage</Link></h4>
                        <div className="shop-content-bottom">
                          <span className="price">49.000₮</span>
                          <span className="add-cart"><Link to="/shop-details">Нэмэх +</Link></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="shop-item mb-55">
                      <div className="shop-thumb">
                        <Link to="/shop-details"><img src="img/product/shop_item05.jpg" alt="" /></Link>
                      </div>
                      <div className="shop-content">
                        <span>Dog toy’s</span>
                        <h4 className="title"><Link to="/shop-details">Pet Carriage</Link></h4>
                        <div className="shop-content-bottom">
                          <span className="price">9000₮</span>
                          <span className="add-cart"><Link to="/shop-details">Нэмэх +</Link></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="shop-item mb-55">
                      <div className="shop-thumb">
                        <Link to="/shop-details"><img src="img/product/shop_item06.jpg" alt="" /></Link>
                      </div>
                      <div className="shop-content">
                        <span>Dog toy’s</span>
                        <h4 className="title"><Link to="/shop-details">Squeaky Dog</Link></h4>
                        <div className="shop-content-bottom">
                          <span className="price">16.000₮</span>
                          <span className="add-cart"><Link to="/shop-details">Нэмэх +</Link></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="shop-item mb-55">
                      <div className="shop-thumb">
                        <Link to="/shop-details"><img src="img/product/shop_item07.jpg" alt="" /></Link>
                      </div>
                      <div className="shop-content">
                        <span>Dog toy’s</span>
                        <h4 className="title"><Link to="/shop-details">Carriage Dog</Link></h4>
                        <div className="shop-content-bottom">
                          <span className="price">18.000₮</span>
                          <span className="add-cart"><Link to="/shop-details">Нэмэх +</Link></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="shop-item mb-55">
                      <div className="shop-thumb">
                        <Link to="/shop-details"><img src="img/product/shop_item08.jpg" alt="" /></Link>
                      </div>
                      <div className="shop-content">
                        <span>Dog toy’s</span>
                        <h4 className="title"><Link to="/shop-details">Yoda Carriage</Link></h4>
                        <div className="shop-content-bottom">
                          <span className="price">12.000₮</span>
                          <span className="add-cart"><Link to="/shop-details">Нэмэх +</Link></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <div className="shop-item mb-55">
                      <div className="shop-thumb">
                        <Link to="/shop-details"><img src="img/product/shop_item09.jpg" alt="" /></Link>
                      </div>
                      <div className="shop-content">
                        <span>Dog toy’s</span>
                        <h4 className="title"><Link to="/shop-details">Pet Knit Knacks</Link></h4>
                        <div className="shop-content-bottom">
                          <span className="price">32.000₮</span>
                          <span className="add-cart"><Link to="/shop-details">Нэмэх +</Link></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shop-page-meta">
                  <div className="shop-grid-menu">
                    <ul>
                      <li className="active"><a href="/#"><i className="fas fa-th" /></a></li>
                      <li><a href="/#"><i className="fas fa-list" /></a></li>
                    </ul>
                  </div>
                  <div className="shop-showing-result">
                    <p>Ний зүйлс 1-12 of 13</p>
                  </div>
                  <div className="shop-show-list">
                    <form>
                      <label htmlFor="bottomShow">Харах</label>
                      <select id="bottomShow" className="selected">
                        <option value>08</option>
                        <option value>12</option>
                        <option value>16</option>
                        <option value>18</option>
                        <option value>20</option>
                      </select>
                    </form>
                  </div>
                  <div className="shop-pagination">
                    <ul>
                      <li className="active"><Link to="/shop">1</Link></li>
                      <li><Link to="/shop">2</Link></li>
                      <li><Link to="/shop"><i className="fas fa-angle-double-right" /></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ShopArea;
