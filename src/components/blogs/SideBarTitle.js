import React from 'react';
import {Link} from 'react-router-dom'

function SideBarTitle() {
  return (

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
                          <h5 className="title"><Link to="/blog-details">Амьтанд хүний ​​хоол шиг тусгай хоол хэрэгтэй</Link></h5>
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
  )
}

export default SideBarTitle;
