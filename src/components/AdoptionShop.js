import axios from "../axios-orders";
import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

function AdoptionShop() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    getDogList();
  },[]);
  const getDogList = () =>{
    axios.get(`dogList.json`).then((res)=>{ 
      const data = Object.entries(res.data).reverse();   
      setData(data)  
    }).catch((err)=>{
        console.log("err: ", err)
    }).finally(()=>{
      // setLoadingTable(false)
    })
  }
  return (
    <section className="adoption-shop-area">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-7 col-lg-9">
          <div className="section-title text-center mb-65">
            <div className="section-icon"><img src="img/icon/pawprint.png" alt="" /></div>
            <h5 className="sub-title">Амьтадтай танилц</h5>
            <h2 className="title">Үрчлүүлэх гөлөг</h2>
            <p>
              Нохойн ДНХ-ийн хамгийн сайн шинжилгээ бол Embark Breed  &amp; Health Kit (Chewy дээрээс үзэх) бөгөөд энэ нь танд хүрэн бор үүлдэр, ихэнх нохойн тухай мэдээллийг өгдөг.
              </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {data.map((e, i)=>(
          <div className="col-lg-4 col-md-6" key={i}>
           <div className="adoption-shop-item">
             <div className="adoption-shop-thumb">
                <img src={e[1].values.img ? e[1].values.img[0] : ""} alt="" />
               <Link to="/shop-details" className="btn">Үрчлэх <img src="img/icon/w_pawprint.png" alt="" /></Link>
             </div>
             <div className="adoption-shop-content">
               <h4 className="title"><Link to="/shop-details">{e[1].values.title} </Link></h4>
               <div className="adoption-meta">
                 <ul>
                   <li><i className="fas fa-cog" /><a href="/#">{e[1].values.type}</a></li>
                   <li><i className="far fa-calendar-alt" /> Төрсөн он : {e[1].values.birth}</li>
                 </ul>
               </div>
               <div className="adoption-rating">
                 <ul>
                   <li className="rating">
                     <i className="fas fa-star" />
                     <i className="fas fa-star" />
                     <i className="fas fa-star" />
                     <i className="fas fa-star" />
                     <i className="fas fa-star" />
                   </li>
                   <li className="price">Нийт дүн : <span>{e[1].values.price.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, "$&,")}₮</span></li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
        ))}
        <div className="col-lg-4 col-md-6">
          <div className="adoption-shop-item">
            <div className="adoption-shop-thumb">
              <img src="img/product/moly.jpg" alt=""  />
              <Link to="/shop-details" className="btn">Үрчлэх <img src="img/icon/w_pawprint.png" alt="" /></Link>
            </div>
            <div className="adoption-shop-content">
              <h4 className="title"><Link to="/shop-details">Bulldog </Link></h4>
              <div className="adoption-meta">
                <ul>
                  <li><i className="fas fa-cog" /><a href="/#">Jerry</a></li>
                  <li><i className="far fa-calendar-alt" /> Төрсөн он : 2019</li>
                </ul>
              </div>
              <div className="adoption-rating">
                <ul>
                  <li className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </li>
                  <li className="price">Нийт дүн : <span>10.000.000₮</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-4 col-md-6">
          <div className="adoption-shop-item">
            <div className="adoption-shop-thumb">
              <img src="img/product/molyjerry.png" alt="" />
              <Link to="/shop-details" className="btn">Үрчлэх <img src="img/icon/w_pawprint.png" alt="" /></Link>
            </div>
            <div className="adoption-shop-content">
              <h4 className="title"><Link to="/shop-details">Базаад зарна</Link></h4>
              <div className="adoption-meta">
                <ul>
                  <li><i className="fas fa-cog" /><a href="/#">Bambar and Jerry</a></li>
                  <li><i className="far fa-calendar-alt" /> Төрсөн он : 2020</li>
                </ul>
              </div>
              <div className="adoption-rating">
                <ul>
                  <li className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </li>
                  <li className="price">Нийт дүн : <span>300.000₮</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        <div className="col-lg-4 col-md-6">
          <div className="adoption-shop-item">
            <div className="adoption-shop-thumb">
              <img src="img/product/adoption_shop_thumb03.jpg" alt="" />
              <Link to="/shop-details" className="btn">Үрчлэх <img src="img/icon/w_pawprint.png" alt="" /></Link>
            </div>
            <div className="adoption-shop-content">
              <h4 className="title"><Link to="/shop-details">Alessia Max</Link></h4>
              <div className="adoption-meta">
                <ul>
                  <li><i className="fas fa-cog" /><a href="/#">German Sherped</a></li>
                  <li><i className="far fa-calendar-alt" /> Birth : 2020</li>
                </ul>
              </div>
              <div className="adoption-rating">
                <ul>
                  <li className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </li>
                  <li className="price">Нийт дүн : <span>$290.000₮</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="adoption-shop-item">
            <div className="adoption-shop-thumb">
              <img src="img/product/adoption_shop_thumb04.jpg" alt="" />
              <Link to="/shop-details" className="btn">Үрчлэх <img src="img/icon/w_pawprint.png" alt="" /></Link>
            </div>
            <div className="adoption-shop-content">
              <h4 className="title"><Link to="/shop-details">Canadian</Link></h4>
              <div className="adoption-meta">
                <ul>
                  <li><i className="fas fa-cog" /><a href="/#">German Sherped</a></li>
                  <li><i className="far fa-calendar-alt" /> Birth : 2021</li>
                </ul>
              </div>
              <div className="adoption-rating">
                <ul>
                  <li className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </li>
                  <li className="price">Нийт дүн : <span>390.000₮</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="adoption-shop-item">
            <div className="adoption-shop-thumb">
              <img src="img/product/adoption_shop_thumb05.jpg" alt="" />
              <Link to="/shop-details" className="btn">Үрчлэх <img src="img/icon/w_pawprint.png" alt="" /></Link>
            </div>
            <div className="adoption-shop-content">
              <h4 className="title"><Link to="/shop-details">Entertainment</Link></h4>
              <div className="adoption-meta">
                <ul>
                  <li><i className="fas fa-cog" /><a href="/#">Siberian Husky</a></li>
                  <li><i className="far fa-calendar-alt" /> Төрсөн он : 2021</li>
                </ul>
              </div>
              <div className="adoption-rating">
                <ul>
                  <li className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </li>
                  <li className="price">Нийт дүн : <span>Үнэгүй</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="adoption-shop-item">
            <div className="adoption-shop-thumb">
              <img src="img/product/adoption_shop_thumb06.jpg" alt="" />
              <Link to="/shop-details" className="btn">Үрчлэх <img src="img/icon/w_pawprint.png" alt="" /></Link>
            </div>
            <div className="adoption-shop-content">
              <h4 className="title"><Link to="/shop-details">Dangerous</Link></h4>
              <div className="adoption-meta">
                <ul>
                  <li><i className="fas fa-cog" /><a href="/#">Golden Retriever</a></li>
                  <li><i className="far fa-calendar-alt" /> Төрсөн он : 2021</li>
                </ul>
              </div>
              <div className="adoption-rating">
                <ul>
                  <li className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </li>
                  <li className="price">Нийт дүн : <span>Үнэгүй</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default AdoptionShop;
