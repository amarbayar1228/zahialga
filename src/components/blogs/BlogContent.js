import React from 'react';
import {Link} from 'react-router-dom'
import SearchBar from './SearchBar'
import Catagories from './Catagories'
import SideBarTitle from './SideBarTitle'
import BlogNewsletter from './BlogNewsletter'

function BlogContent() {
  return (


      <section className="standard-blog-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="standard-blog-item">
                <div className="standard-blog-thumb">
                  <Link to="/blog-details"><img src="img/blog/blog_thumb01.jpg" alt="" /></Link>
                </div>
                <div className="standard-blog-content">
                  <div className="blog-post-meta">
                    <ul>
                      <li className="tags"><i className="flaticon-bookmark-1" />
                        <a href="/#">Siberian Husky , </a>
                        <a href="/#">Breed</a>
                      </li>
                      <li><i className="far fa-user" /><a href="/#">Админ</a></li>
                      <li><i className="far fa-bell" />May 10, 202"</li>
                    </ul>
                  </div>
                  <h2 className="title"><Link to="/blog-details">Таны тэжээвэр амьтанд хэрэгтэй бүх зүйлийг онлайн тэжээвэр амьтдад</Link></h2>
                  <p>Гэрийн нохой бол чонын гаршуулсан удам юм. Эртний, устаж үгүй ​​болсон чононоос гаралтай нохой, орчин үеийн саарал чоно бол нохойн хамгийн ойрын хамаатан юм. Нохой бол анчин цуглуулагчдын гаршуулсан анхны төрөл юм.</p>
                  <Link to="/blog-details" className="read-more">Илүүг үзэх <img src="img/icon/pawprint.png" alt="" /></Link>
                </div>
              </div>
              <div className="standard-blog-item">
                <div className="standard-blog-thumb">
                  <Link to="/blog-details"><img src="img/blog/blog_thumb02.jpg" alt="" /></Link>
                </div>
                <div className="standard-blog-content">
                  <div className="blog-post-meta">
                    <ul>
                      <li className="tags"><i className="flaticon-bookmark-1" />
                        <a href="/#">Siberian Husky , </a>
                        <a href="/#">Breed</a>
                      </li>
                      <li><i className="far fa-user" /><a href="/#">Админ</a></li>
                      <li><i className="far fa-bell" /> Mar 10, 2021</li>
                    </ul>
                  </div>
                  <h2 className="title"><Link to="/blog-details">Гэрийн тэжээвэр амьтанд хүний ​​хоол шиг тусгай хоол хэрэгтэй</Link></h2>
                  <p>Гэрийн нохой бол чонын гаршуулсан удам юм. Эртний, устаж үгүй ​​болсон чононоос гаралтай нохой, орчин үеийн саарал чоно бол нохойн хамгийн ойрын хамаатан юм. Нохой бол анчин цуглуулагчдын гаршуулсан анхны төрөл юм.</p>
                  <Link to="/blog-details" className="read-more">Илүүг үзэх <img src="img/icon/pawprint.png" alt="" /></Link>
                </div>
              </div>
              <div className="standard-blog-item">
                <div className="standard-blog-thumb">
                  <Link to="/blog-details"><img src="img/blog/blog_thumb03.jpg" alt="" /></Link>
                </div>
                <div className="standard-blog-content">
                  <div className="blog-post-meta">
                    <ul>
                      <li className="tags"><i className="flaticon-bookmark-1" />
                        <a href="/#">Siberian Husky , </a>
                        <a href="/#">Breed</a>
                      </li>
                      <li><i className="far fa-user" /><a href="/#">Админ</a></li>
                      <li><i className="far fa-bell" /> Mar 10, 2021</li>
                    </ul>
                  </div>
                  <h2 className="title"><Link to="/blog-details">Гэрийн хоолонд зориулсан тусгай зэрэглэл</Link></h2>
                  <p>Гэрийн нохой бол чонын гаршуулсан удам юм. Эртний, устаж үгүй ​​болсон чононоос гаралтай нохой, орчин үеийн саарал чоно бол нохойн хамгийн ойрын хамаатан юм. Нохой бол анчин цуглуулагчдын гаршуулсан анхны төрөл юм.</p>
                  <Link to="/blog-details" className="read-more">Илүүг үзэх <img src="img/icon/pawprint.png" alt="" /></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-8">
              <aside className="blog-sidebar">
               <SearchBar/>
                <Catagories/>
                <div className="widget">
                  <h4 className="sidebar-title">Сүүлийн нийтлэл</h4>
                    <SideBarTitle/>
                </div>
                <BlogNewsletter/>
              </aside>
            </div>
          </div>
        </div>
      </section>
  )
}

export default BlogContent;
