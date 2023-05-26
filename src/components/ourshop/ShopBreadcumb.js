import React from 'react';
import {Link} from 'react-router-dom'
function ShopBreadcumb() {
  return (
	  <section className="breadcrumb-area breadcrumb-bg" style={{ backgroundImage:'url("img/bg/bg1.jpg")'}}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-content">
                <h2 className="title">Бидний дэлгүүр</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Үндсэн хуудас</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Дэлгүүр</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ShopBreadcumb;
