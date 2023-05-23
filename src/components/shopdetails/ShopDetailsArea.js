import React, { useEffect, useState } from 'react'
import{Link, useLocation, useHistory} from 'react-router-dom' 
import Slider from 'react-slick';
import axios from '../../axios-orders';
import { Empty, Spin, message } from 'antd';
// import $ from 'jquery' 


function ShopDetailsArea(){ 
  // const [nav1, setnav1] = useState(null);
  // const [nav2,setNav2] = useState(null);
  const [val, setVal] = useState(1);
  const [loading,setLoading] = useState(false);
  const { search } = useLocation(); 
  const [itemList, setItemList] = useState([]);
  const [changeImgs, setImg] = useState("");
  const [relateProductS, setRelateProduct] = useState([]);
  const [btnLoad, setBtnLoad] = useState(false);
  const [paramsState, setParams] = useState("");
  
  useEffect(()=>{  
    getItems();
  },[])
  const getItems = () =>{
    setLoading(true);
    const searchParam = search.slice(1);
    setParams(searchParam);
    axios.get(`itemList.json?orderBy="itemList/id"&equalTo="${searchParam}"`).then((res)=>{ 
      const data = Object.entries(res.data).reverse();   
      relatedProduct(data[0][1].itemList.catName);
      setItemList(data[0][1].itemList);
      setImg(data[0][1].itemList.img[0]);
      setVal(1);
    }).catch((err)=>{
      setLoading(false);
    })
  }

  const relatedProduct = (params) =>{
    axios.get(`itemList.json?orderBy="itemList/catName"&equalTo="${params}"`).then((res)=>{ 
      const data = Object.entries(res.data).reverse();   
      setRelateProduct(data)  
    }).catch((err)=>{
        console.log("err: ", err)
    }).finally(()=>{
      setLoading(false);
    }) 
  }

  const increase = ()=>{
    setVal(val+1); 
    setItemList({...itemList, cnt: val+1}); 
    console.log("itemList",itemList); 
}
  const decrease = ()=>{ 
    if(val > 1){
      setVal(val-1);
      setItemList({...itemList, cnt: val-1}); 
      console.log("itemList",itemList); 
    }
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
   const settings = {

  dots: false,
	infinite: true,
	speed: 1000,
	autoplay: false,
	arrows: false,
	autoplaySpeed: 3000,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				speed: 1000,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
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
  const changeImg = (e) =>{ 
    setImg(e); 
  }
  const basketAddFunc = () =>{   
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
        if (itemList.id == el.id) { 
        getBasket[0].product[indexs].cnt = val; 
          localStorage.setItem("items", JSON.stringify(getBasket)); 
          message.warning("Сагсанд нэмэгдлээ");  
          setTimeout(()=>{
            setBtnLoad(false)
            window.location.reload();
          },500);
          notArrived = false;
        }
      });

      if (notArrived) {
        getBasket[i].product.push(itemList);
        localStorage.setItem("items", JSON.stringify(getBasket)); 
        message.success("Сагсанд нэмэгдлээ"); 
        setTimeout(()=>{
          setBtnLoad(false)
          window.location.reload();
        },500);
      } 
    }); 

  }

  const relatedProductFunc = (params ) =>{
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
          setBtnLoad(false);
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
	return(
   
		<section className="shop-details-area pt-110 pb-50">
        {loading ? <Spin size='large' style={{display: "flex", justifyContent: "center", margin: "50px auto"}}/> : <> {itemList.length === 0 ? <Empty description={<span>Бараа олдсонгүй</span>}/> :
          <div className="container">
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
                    </div>
                  </div>
                  <div className="shop-details-nav-wrap"> 
                    <ul className="nav nav-tabs" id="myTab" role="tablist"> 
                      {itemList.img.map((e, i)=>(
                        <li className="nav-item" role="presentation" key={i}>
                         <div style={{cursor: "pointer"}} onClick={()=>changeImg(e)} className="nav-link active" id="item-one-tab" data-toggle="tab" role="tab" aria-controls="item-one" aria-selected="true"><img src={e} alt="" style={{width: "112px"}}/></div>
                       </li>
                      ))} 
                    </ul>
                  </div>
                </div>
                <div className="col-5">
                  <div className="shop-details-content">
                    <span>hand sanitizer</span>
                    <h2 className="title">{itemList.title}</h2>
                    <div className="shop-details-review">
                      <div className="rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span>( 01 Review )</span>
                    </div>
                    <div className="shop-details-price">
                      <h2 className="price">{itemList.price.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, "$&,")}₮</h2>
                      <h5 className="stock-status">- IN Stock</h5>
                    </div>
                    <p>{itemList.description}</p>
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
                      <Link to={"/shop-details?" + paramsState} className="wishlist-btn"><i className="fas fa-heart" /> Хүслийн жагсаалтад нэмэх</Link>
                      <Link to={"/shop-details?" + paramsState} className="cart-btn" onClick={basketAddFunc}>{btnLoad ? "Уншиж байна..": "Сагсанд нэмэх +"}</Link>
                    </div>
                    <div className="shop-details-bottom">
                      <ul>
                        <li className="sd-category">
                          <span className="title">Категори :</span>
                          <Link to="/shop">{itemList.catLabel}</Link> 
                        </li>
                        <li className="sd-sku">
                          <span className="title">ID :</span>
                          <Link to="/shop">#{itemList.id}</Link>
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
            </div>
            <div className="row">
              <div className="col-12">
                <div className="product-desc-wrap">
                  <ul className="nav nav-tabs" id="myTabTwo" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="details-tab" data-toggle="tab" href="/#details" role="tab" aria-controls="details" aria-selected="true">Илүү дэлгэрэнгүй</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="val-tab" data-toggle="tab" href="/#val" role="tab" aria-controls="val" aria-selected="false">Мэдээлэл</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="review-tab" data-toggle="tab" href="/#review" role="tab" aria-controls="review" aria-selected="false">Шүүмж (0)</a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContentTwo">
                    <div className="tab-pane fade show active" id="details" role="tabpanel" aria-labelledby="details-tab">
                      <div className="product-desc-content">
                        <p>Гэрийн нохой бол чонын идэштэн юм. Эртний, устаж үгүй болсон чононоос гаралтай нохой, орчин үеийн саарал чоно бол нохойн хамгийн ойрын хамаатан юм. Нохой бол анчин цуглуулагчдын гаршуулсан анхны төрөл юм. Эдгээрт 6, 12, 16 долоо хоногтой гурван үе шаттайгаар хийгдэх үндсэн вакцинууд багтана. чонын новш. Эртний устаж үгүй болсон чононоос гаралтай нохой бөгөөд орчин үеийн саарал чоно нь нохойд хамгийн ойр байдаг.</p>
                        <p>Эдгээрт 6, 12, 16 долоо хоногтой гурван үе шаттайгаар хийгдэх үндсэн вакцинууд багтана. чонын новш. Эртний, устаж үгүй болсон чононоос гаралтай нохой, орчин үеийн саарал чоно нь нохойнд хамгийн ойр байдаг үндсэн вакцинууд байдаг.</p>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="val" role="tabpanel" aria-labelledby="val-tab">
                      <div className="product-desc-info">
                        <div className="row">
                          <div className="col-xl-3 col-md-5">
                            <div className="product-desc-img">
                              <img src="img/product/desc_img.jpg" alt="" />
                            </div>
                          </div>
                          <div className="col-xl-9 col-md-7">
                            <h5 className="small-title">100% Knit Knacks</h5>
                            <p>Cramond Leopard &amp; Pythong Print Anorak Jacket In Beige but also the leap into
                              electronic typesetting, remaining lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <ul className="product-desc-list">
                              <li>65% poly, 35% rayon</li>
                              <li>Partially lined</li>
                              <li>Hidden front button closure with keyhole accents</li>
                              <li>Button cuff sleeves</li>
                              <li>Lightweight semi-sheer fabrication</li>
                              <li>Made in USA</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                      <div className="product-desc-review">
                        <div className="review-title mb-20">
                          <h4 className="title">Хэрэглэгчийн шүүмж (0)</h4>
                        </div>
                        <div className="left-rc">
                          <p>Одоогоор шүүмж алга</p>
                        </div>
                        <div className="right-rc">
                          <a href="/#">Сэтгэгдэл бичих</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="related-products-wrap">
              <h2 className="title">Холбоотой бүтээгдэхүүн</h2>
              <Slider className="row related-product-active"{...settings}> 
              {relateProductS.map((e, i)=>( 
                    <div className="col-lg" key={i}>
                      <div className="shop-item mb-55">
                        <div className="shop-thumb">
                          <Link onClick={getItems} to={"/shop-details?" + e[1].itemList.id}><img src={e[1].itemList.img ? e[1].itemList.img[0] : "img/product/shop_item01.jpg"} alt="" /></Link>
                        </div>
                        <div className="shop-content">
                          <span>Dog toy’s</span>
                          <h4 className="title"><Link to={"/shop-details?" + e[1].itemList.id}>{e[1].itemList.title}</Link></h4>
                          <div className="shop-content-bottom">
                            <span className="price">{e[1].itemList.price.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, "$&,")}₮</span>
                            <span className="add-cart"><Link to={"/shop-details?" + paramsState} onClick={()=>relatedProductFunc(e[1].itemList)}>Нэмэх +</Link></span>
                          </div>
                        </div>
                      </div>
                    </div>
              ))}
               
               
              </Slider>
            </div>
          </div>
          }
          </>
        }
      </section>
	)
}
export default ShopDetailsArea ;