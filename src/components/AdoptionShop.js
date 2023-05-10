import { Button, Empty, Modal } from "antd";
import axios from "../axios-orders";
import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

function AdoptionShop() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dogDetails, setDogDetails] = useState();
  const [changeImgs, setImg] = useState("");
  const [loadS, setLoads] = useState(false);
  useEffect(()=>{
    getDogList();
  },[]);
  const getDogList = () =>{
    setLoads(true)
    axios.get(`dogList.json`).then((res)=>{ 
      const data = Object.entries(res.data).reverse();   
      setData(data)  
    }).catch((err)=>{
        console.log("err: ", err)
    }).finally(()=>{
      setLoads(false)
      // setLoadingTable(false)
    })
  }
  const showModal = (e) => { 
    setImg(e[1].values.img[0]);
    setDogDetails(e[1].values);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [val, setVal] = useState(1);
  const increase = ()=>{
    setVal(val+1);
  }
  const decrease = ()=>{
    setVal(val-1);
  }

  const handleActive = (e)=>{
    e.preventDefault();
    
    document.querySelectorAll('.shop-details-dimension ul li').forEach( el => {
      el.classList.remove('active');
    })
    e.target.parentNode.classList = 'active';
  }
   const colorActive = (e)=>{
    e.preventDefault();
    
    document.querySelectorAll('.shop-details-color ul li').forEach( el => {
      el.classList.remove('active');
    })
    e.target.classList += ' active';
  }
  const changeImg = (e) =>{ 
    setImg(e);

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
      {!loadS ? 
       <> 
       {data.length === 0 ? <Empty /> :  
      <div className="row justify-content-center">
        {data.map((e, i)=>(
          <div className="col-lg-4 col-md-6" key={i}>
           <div className="adoption-shop-item">
             <div className="adoption-shop-thumb">
                <img src={e[1].values.img ? e[1].values.img[0] : ""} alt="" />
                <Button size="large" type="primary" onClick={()=>showModal(e)}  className="btn"  style={{padding: "0px 24px", height: "50px", width: "138px", fontSize: "19px"}}>
                  Үрчлэх <img src="img/icon/w_pawprint.png" alt="" style={{width: "20px"}}/>
                </Button>
                <Modal title="Дэлгэрэнгүй мэдээлэл" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={1300} footer={null}>
                  {dogDetails ?
                  <div className="shop-details-wrap"> 
                    <div className="row">
                      <div className="col-7">
                        <div className="shop-details-img-wrap">
                          <div className="tab-content" id="myTabContent">
                            <div className="tab-pane show active" id="item-one" role="tabpanel" aria-labelledby="item-one-tab">
                              <div className="shop-details-img">
                                <img src={changeImgs} alt="" />
                              </div>
                            </div>
                            {/* <div className="tab-pane" id="item-two" role="tabpanel" aria-labelledby="item-two-tab">
                              <div className="shop-details-img">
                                <img src="img/product/shop_details02.jpg" alt="" />
                              </div>
                            </div>
                            <div className="tab-pane" id="item-three" role="tabpanel" aria-labelledby="item-three-tab">
                              <div className="shop-details-img">
                                <img src="img/product/shop_details03.jpg" alt="" />
                              </div>
                            </div>
                            <div className="tab-pane" id="item-four" role="tabpanel" aria-labelledby="item-four-tab">
                              <div className="shop-details-img">
                                <img src="img/product/shop_details04.jpg" alt="" />
                              </div>
                            </div> */}
                          </div>
                        </div>
                        <div className="shop-details-nav-wrap">
                          <ul className="nav nav-tabs" id="myTab" role="tablist">
                            {dogDetails.img.map((e,i)=>(
                              <div key={i}>
                                 <li className="nav-item" role="presentation">
                                  <div style={{cursor: "pointer"}} onClick={()=>changeImg(e)} className="nav-link active" id="item-one-tab" data-toggle="tab" role="tab" aria-controls="item-one" aria-selected="true"><img src={e} alt="" style={{width: "112px"}}/></div>
                                </li>
                              </div>
                            ))}
                            {/* <li className="nav-item" role="presentation">
                              <a className="nav-link active" id="item-one-tab" data-toggle="tab" href="/#item-one" role="tab" aria-controls="item-one" aria-selected="true"><img src="img/product/shop_nav_img01.jpg" alt="" /></a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a className="nav-link" id="item-two-tab" data-toggle="tab" href="/#item-two" role="tab" aria-controls="item-two" aria-selected="false"><img src="img/product/shop_nav_img02.jpg" alt="" /></a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a className="nav-link" id="item-three-tab" data-toggle="tab" href="/#item-three" role="tab" aria-controls="item-three" aria-selected="false"><img src="img/product/shop_nav_img03.jpg" alt="" /></a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a className="nav-link" id="item-four-tab" data-toggle="tab" href="/#item-four" role="tab" aria-controls="item-four" aria-selected="false"><img src="img/product/shop_nav_img04.jpg" alt="" /></a>
                            </li> */}
                          </ul>
                        </div>
                      </div>
                      <div className="col-5">
                        <div className="shop-details-content">
                          <span>{dogDetails.pedId}</span>
                          <h2 className="title">{dogDetails.title}</h2>
                          <div className="shop-details-review">
                            <div className="rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                            <span>( 0 Шүүмж )</span>
                          </div>
                          <div className="shop-details-price">
                            <h2 className="price">{dogDetails.price.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, "$&,")}₮</h2>
                            <h5 className="stock-status">- IN Stock</h5>
                          </div>
                          <p>
                            {/* Гэрийн нохой бол чонын идэштэн юм. Эртний, устаж үгүй болсон чононоос гаралтай нохой, орчин үеийн саарал чоно бол нохойн хамгийн ойрын хамаатан юм. */}
                            {dogDetails.description}
                            </p>
                          <div className="shop-details-dimension">
                            <span>Төрсөн он: {dogDetails.birth}</span> 
                          </div>
                          <div className="shop-details-dimension">
                            <span>Хэмжээ :</span>
                            <ul>
                              <li className="active"><a href="/#" onClick={(e)=> handleActive(e)}>Том</a></li>
                              <li><a href="/#" onClick={(e)=> handleActive(e)}>Дунд</a></li>
                              <li><a href="/#" onClick={(e)=> handleActive(e)}>Жижиг</a></li>
                            </ul>
                          </div> 
                          <div className="shop-details-color">
                            <span>Өнгө :</span>
                            <ul>
                              <li className="active" onClick={(e)=> colorActive(e)}/>
                              <li className="black" onClick={(e)=> colorActive(e)}/>
                              <li className="green" onClick={(e)=> colorActive(e)}/>
                              <li className="blue" onClick={(e)=> colorActive(e)}/>
                            </ul>
                          </div>
                         
                          <div className="shop-details-quantity">
                            <span>Тоо ширхэг :</span>
                            <div className="cart-plus-minus">
                              <input type="text" value={val} readOnly/>
                              <div className="dec qtybutton" onClick={()=>decrease()}>-</div>
                              <div className="inc qtybutton" onClick={()=>increase()}>+</div>
                            </div>
                            <Link to="/breeder-details" className="wishlist-btn"><i className="fas fa-heart" /> Хүслийн жагсаалтад нэмэх</Link>
                            <Link to="/breeder-details" className="cart-btn">Үрчлэх +</Link>
                          </div>
                          <div className="shop-details-bottom">
                            <ul>
                              <li className="sd-category">
                                <span className="title">Категори :</span>
                                <Link to="/shop">HLinknd,</Link>
                                <Link to="/shop">SLinknitizer,</Link>
                                <Link to="/shop"></Link>
                              </li>
                              <li className="sd-sku">
                                <span className="title">SKU :</span>
                                <Link to="/shop">H#21546</Link>
                              </li>
                              <li className="sd-share">
                                <span className="title">Бусадаа хуваалцах :</span>
                                <a href="https://www.facebook.com/Ab1228/"><i className="fab fa-facebook-f" /></a>
                                <a href="https://www.facebook.com/Ab1228/"><i className="fab fa-twitter" /></a>
                                <a href="https://www.facebook.com/Ab1228/"><i className="fab fa-linkedin-in" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> : null}
                </Modal>
                {/* <Link to="/shop-details" className="btn">Үрчлэх <img src="img/icon/w_pawprint.png" alt="" /></Link> */}
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
        {/* <div className="col-lg-4 col-md-6">
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
        </div> */}
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
        {/* <div className="col-lg-4 col-md-6">
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
                  <li className="price">Нийт дүн : <span>290.000₮</span></li>
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
        </div> */}
      </div> 
      }
      </>
      : <div id="preloader">
          <img src="img/preloader.gif" alt="" />
        </div>
      }
    </div>
  </section>

  )
}

export default AdoptionShop;
