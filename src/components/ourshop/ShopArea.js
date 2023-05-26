import React from 'react';
import {Link} from 'react-router-dom';
import dataJson from "../../data/category.json";
import axios from '../../axios-orders';
import { Button, Spin, Empty, message } from "antd";
import { useEffect, useRef, useState } from "react"; 
import { 
  LoadingOutlined, 
} from '@ant-design/icons';
function ShopArea() {
  const [itemList, setItemList] = useState([]);
  const [loadingTable, setLoadingTable] = useState(false);
  const [btnLoad, setBtnLoad] = useState(false);
  const [btnLoadIndex, setBtnLoadIndex] = useState(0);
  useEffect(()=>{
    getItemList();
  },[]);
  
  const getItemList = () =>{ 
    //Category sort:  firebaseio.com/itemList.json?orderBy="itemList/catName"&equalTo="dogClothes"
    const token = localStorage.getItem("idToken")
    setLoadingTable(true); 
    axios.get(`itemList.json?&auth=${token}`).then((res)=>{ 
        const data = Object.entries(res.data).reverse();  
        setItemList(data)  
    }).catch((err)=>{
        console.log("err: ", err)
    }).finally(()=>{
      setLoadingTable(false)
    }) 
  }
  
  // const categoryFunc = (value) =>{
  //    setLoadingTable(true)
  //   if(value.value === "all"){
  //     getItemList();
  //   }else{ 
  //     axios.get(`itemList.json?orderBy="itemList/catName"&equalTo="${value.value}"`).then((res)=>{ 
  //       const data = Object.entries(res.data).reverse();  
  //       setItemList(data)  
  //     }).catch((err)=>{
  //         console.log("err: ", err)
  //     }).finally(()=>{
  //       setLoadingTable(false)
  //     }) 
  //   }
  // }
  
  const relatedProductFunc = (params, i ) =>{
    setBtnLoadIndex(i);
    setBtnLoad(true)
    let getBasket = [];
    const notArrived = true;
    getBasket = JSON.parse(localStorage.getItem("items")) ?? [];  
    if(getBasket.length < 1){ 
      getBasket.push({product: [],});
      localStorage.setItem("items", JSON.stringify(getBasket));
    }

    getBasket.forEach((e, i) => { 
      e.product.forEach((el, indexs) => { 
        if (params.id == el.id) { 
          message.warning("Сагсанд байна");   
          setBtnLoad(false)
          notArrived = false;
        }
      });
      
      if (notArrived) {
        getBasket[i].product.push(params);
        localStorage.setItem("items", JSON.stringify(getBasket)); 
        message.success("Сагсанд нэмэгдлээ"); 
        setTimeout(()=>{
          setBtnLoad(false)
          window.location.reload();
        },400);
      } 
    }); 
    
   

  }
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
                {/* <div className="widget">
                  <h4 className="sidebar-title">Категори</h4>
                  <div className="shop-cat-list">
                    <ul>
                      {dataJson.category.map((e, i )=>(
                        <li key={i}><Link to="/shop" onClick={()=>categoryFunc(e)}>{e.label} <span>+</span></Link></li>
                      ))} 
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
                </div> */}
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
                  {loadingTable ? <Spin size="large" style={{marginTop: "50px", marginBottom: "600px"}}/> :
                  <>  {itemList.length === 0 ? <Empty  description={
                    <span>
                      Бараа олдсонгүй
                    </span>
                  } style={{marginTop: "50px", marginBottom: "600px"}}/> : <> 
                  {itemList.map((e,i)=>( 
                    <div className="col-lg-4 col-sm-6" key={i}>
                    <div className="shop-item mb-55">
                      <div className="shop-thumb">
                        <Link to={"/shop-details?" + e[1].itemList.id} ><img src={e[1].itemList.img ? e[1].itemList.img[0]: "img/product/shop_item03.jpg"} alt="" /></Link>
                      </div>
                      <div className="shop-content">
                        <span> {e[1].itemList.title}</span>
                        <h4 className="title"><Link to={"/shop-details?" + e[1].itemList.id}>{e[1].itemList.title}</Link></h4>
                        <div className="shop-content-bottom">
                          <span className="price"> {e[1].itemList.price.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, "$&,")}₮</span>
                          <span className="add-cart"><Link to="/shop" onClick={()=>relatedProductFunc(e[1].itemList, i)}>{btnLoad && i === btnLoadIndex ? <LoadingOutlined /> : "Нэмэх +"}</Link></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))}
                  </>
                }
                  </>
                 
                } 
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
