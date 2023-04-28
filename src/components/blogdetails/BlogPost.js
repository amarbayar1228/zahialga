import React from 'react';
import {Link} from 'react-router-dom'

function BlogPost() {
  return (
	  <section className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="standard-blog-item mb-50">
                <div className="standard-blog-thumb">
                  <img src="img/blog/blog_thumb01.jpg" alt="" />
                </div>
                <div className="standard-blog-content blog-details-content">
                  <div className="blog-post-meta">
                    <ul>
                      <li className="tags"><i className="flaticon-bookmark-1" />
                        <a href="/#">Siberian Husky , </a>
                        <a href="/#">Breed</a>
                      </li>
                      <li><i className="far fa-user" /><a href="/#">Admin</a></li>
                      <li><i className="far fa-bell" /> Mar 10, 2021</li>
                    </ul>
                  </div>
                  <h4 className="title">Таны тэжээвэр амьтдад хэрэгтэй бүх зүйл онлайн тэжээвэр амьтан</h4>
                  <p>Гэрийн тэжээвэр нохой бол чонын шүдтэй амьтан юм. Эртний, устаж үгүй ​​болсон чононоос гаралтай нохой, орчин үеийн саарал чоно бол нохойн хамгийн ойрын хамаатан юм. Нохой бол анчин цуглуулагчдын гаршуулсан анхны төрөл юм. Эдгээрт 6, 12, 16 долоо хоногтой гурван үе шаттайгаар хийгдэх үндсэн вакцинууд багтана.</p>
                  <p>Вакцин хийлгэснээс хойш 3-5 хоногийн дараа нохойд дархлаа үүсч эхэлдэг. Гөлөг бүхэл бүтэн вакциныг хүлээн авах хүртэл эсвэл насанд хүрсэн нохой вакцинд хамрагдах хүртэл тэдний парвовирусын өртөлтийг аль болох багасгах хэрэгтэй.</p>
                  <blockquote>
                    “ Нохой дархлаагаа хөгжүүлж эхэлдэг. Гөлөг бүхэл бүтэн цуврал вакцинаа авах хүртэл эсвэл насанд хүрсэн нохой нь парвовирусын халдвар авах боломжтой болох хүртэл. ”
                    <footer>Б. Амарбаяр</footer>
                  </blockquote>
                  <p>Нохойд өртөх эрсдэлээс хамааран үндсэн бус вакциныг хийдэг. Үүнд Бордетеллагийн эсрэг вакцинууд орно
                     bronchiseptica, Borrelia burgdorferi болон Leptosira бактери. Нохойг гаршуулсан анхны төрөл зүйл нь
                     анчин цуглуулагчдад үндсэн вакцинууд орно.</p>
                  <div className="blog-details-list">
                    <ul>
                      <li><a href="/#">Хэрэгцээ гартал шилдэг онлайн тэжээвэр амьтан</a> – aАпп нь хэрэглэгчдийн анхаарлыг татахуйц интерактив түүх болж хувирдаг. Загвар зохион бүтээгчид хийх хэрэгсэлтэй байдаг</li>
                      <li><a href="/#">Гөлөг вакциныг бүхэлд нь авах хүртэл</a> – Апп нь хэрэглэгчдийн анхаарлыг татахуйц интерактив түүх болж хувирдаг. Загвар зохион бүтээгчид хийх хэрэгсэлтэй байдаг</li>
                    </ul>
                  </div>
                  <p>Чонын хонхорхой. Нохой нь эртний, устаж үгүй ​​болсон чононоос гаралтай бөгөөд орчин үеийн саарал чоно нь нохойн амьд хамаатан юм. Нохой бол анчин цуглуулагчдын олж авсан анхны төрөл юм. Эдгээрт үндсэн вакцинууд багтана.</p>
                  <div className="blog-details-img">
                    <div className="row">
                      <div className="col-md-6">
                        <img src="img/blog/blog_details_img01.jpg" alt="" />
                      </div>
                      <div className="col-md-6">
                        <img src="img/blog/blog_details_img02.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <p>Нохойд өртөх эрсдэлээс хамааран үндсэн бус вакциныг хийдэг. Үүнд Бордетеллагийн эсрэг вакцинууд орно
                     bronchiseptica, Borrelia burgdorferi болон Leptosira бактери. Нохойг гаршуулсан анхны төрөл зүйл нь
                     анчин цуглуулагчдад үндсэн вакцинууд орно.</p>
                  <div className="blog-line" data-background="img/blog/blog_item_line.png" />
                  <div className="blog-details-bottom">
                    <div className="blog-details-tags">
                      <ul>
                        <li className="title"><i className="fas fa-tags" /> Tags :</li>
                        <li><a href="/#">Бизнес</a></li>
                        <li><a href="/#">Ажил</a></li>
                        <li><a href="/#">Мэдлэг</a></li>
                        <li><a href="/#">Онлайн</a></li>
                      </ul>
                    </div>
                    <div className="blog-details-social">
                      <ul>
                        <li><a href="/#"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="/#"><i className="fab fa-twitter" /></a></li>
                        <li><a href="/#"><i className="fab fa-linkedin-in" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="avatar-post mt-50 mb-50">
                <div className="post-avatar-img">
                  <img src="img/blog/post_avatar_img.png" alt="img" />
                </div>
                <div className="post-avatar-content">
                  <h5>Thomas Herlihy</h5>
                  <p>Нохойд өртөх эрсдэлээс хамааран үндсэн бус вакциныг хийдэг. Үүнд Бордетеллагийн эсрэг вакцинууд орно.</p>
                  <div className="blog-details-social">
                    <ul>
                      <li><a href="/#"><i className="fab fa-facebook-f" /></a></li>
                      <li><a href="/#"><i className="fab fa-twitter" /></a></li>
                      <li><a href="/#"><i className="fab fa-linkedin-in" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="blog-next-prev">
                <ul>
                  <li className="blog-prev">
                    <a href="/#"><img src="img/icon/left_arrow.png" alt="img" />Өмнөх нийтлэл</a>
                  </li>
                  <li className="blog-next">
                    <a href="/#">Дараагийн нийтлэл<img src="img/icon/right_arrow.png" alt="img" /></a>
                  </li>
                </ul>
              </div>
              <div className="comment-reply-box">
                <h5 className="title">Хариулт үлдээнэ үү</h5>
                <form className="comment-reply-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input type="text" placeholder="зохиолч *" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input type="email" placeholder="Таны Емайл *" />
                      </div>
                    </div>
                  </div>
                  <div className="form-grp">
                    <textarea name="message" placeholder="Энд сэтгэгдэл бичнэ үү..." defaultValue={""} />
                  </div>
                  <div className="form-grp checkbox-grp">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">Имэйл хаягаа бүү харуул</label>
                  </div>
                  <button type="submit" className="btn">Илгээх</button>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="blog-sidebar">
                <div className="widget">
                  <h4 className="sidebar-title">Хайх</h4>
                  <div className="sidebar-search">
                    <form>
                      <input type="text" placeholder="Хайх ..." />
                      <button type="submit"><i className="fa fa-search" /></button>
                    </form>
                  </div>
                </div>
                <div className="widget">
                  <h4 className="sidebar-title">Categories</h4>
                  <div className="sidebar-cat-list">
                    <ul>
                      <li><a href="/#">Siberian Husky <i className="fas fa-angle-double-right" /></a></li>
                      <li><a href="/#">German Sherped <i className="fas fa-angle-double-right" /></a></li>
                      <li><a href="/#">French Bulldog <i className="fas fa-angle-double-right" /></a></li>
                      <li><a href="/#">Golden Retriever <i className="fas fa-angle-double-right" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="widget">
                  <h4 className="sidebar-title">Recent Post</h4>
                  <div className="rc-post-list">
                    <ul>
                      <li>
                        <div className="rc-post-thumb">
                          <Link to="/blog-details"><img src="img/blog/rc_post_thumb01.jpg" alt="" /></Link>
                        </div>
                        <div className="rc-post-content">
                          <h5 className="title"><Link to="/blog-details">Таны тэжээвэр амьтдад хэрэгтэй бүх зүйл онлайн шилдэг тэжээвэр амьтан</Link></h5>
                          <div className="rc-post-meta">
                            <ul>
                              <li><i className="far fa-calendar-alt" /> April 15, 2021</li>
                              <li>By <a href="/#">Админ</a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="rc-post-thumb">
                          <Link to="/blog-details"><img src="img/blog/rc_post_thumb02.jpg" alt="" /></Link>
                        </div>
                        <div className="rc-post-content">
                          <h5 className="title"><Link to="blog-details">Амьтанд хүний ​​хоол шиг тусгай хоол хэрэгтэй</Link></h5>
                          <div className="rc-post-meta">
                            <ul>
                              <li><i className="far fa-calendar-alt" /> October 15, 2021</li>
                              <li>By <a href="/#">Админ</a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget sidebar-newsletter">
                  <div className="sn-icon">
                    <img src="img/icon/sn_icon.png" alt="" />
                  </div>
                  <div className="sn-title">
                    <h4 className="title">Мэдээлэл нэмэх</h4>
                    <p>Бүртгүүлээд мэдээлэл нэмэх</p>
                  </div>
                  <form className="sn-form">
                    <input type="text" placeholder="Емайл оруулна уу.." />
                    <button className="btn">Бүртгүүлэх</button>
                  </form>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

  )
}

export default BlogPost;
