import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import $ from 'jquery';
import axios from 'axios'; 
import { Button, Empty, message } from 'antd';

function Header(){
  const [checkId, setCheckId] = useState(false); 
  const [localItems, setLocalItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [deleteLoad, setDelete] = useState(false); 
 
  const handleActive = (e)=>{
    document.querySelectorAll('.main-menu ul li').forEach( el => {
      el.classList.remove('active');
    })
    e.target.parentNode.classList += ' active';
  }
    const subActive = (e)=>{
    document.querySelectorAll('.main-menu ul li').forEach( el => {
      el.classList.remove('active');
    })
    e.target.parentNode.parentNode.parentNode.classList += ' active';
  }
  useEffect(()=>{
    const localId = localStorage.getItem("localId");
    if(localId){ 
      refreshToken();
      localStoreFunc();
    }else{
      setCheckId(false)
    }
    getItemsLocalFunc();
    
    //SubMenu Dropdown Toggle
if ($('.menu-area li.menu-item-has-children ul').length) {
	$('.menu-area .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');

}
    if ($('.mobile-menu').length) {

	var mobileMenuContent = $('.menu-area .main-menu').html();
	$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

	//Dropdown Button
	$('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function () {
		$(this).toggleClass('open');
		$(this).prev('ul').slideToggle(500);
	});
	//Menu Toggle Btn
	$('.mobile-nav-toggler').on('click', function () {
		$('body').addClass('mobile-menu-visible');
	});

	//Menu Toggle Btn
	$('.menu-backdrop, .mobile-menu .close-btn').on('click', function () {
		$('body').removeClass('mobile-menu-visible');
	});
}

   $(".navbar-toggle").on('click', function () {
        $(".navbar-nav").addClass("mobile_menu");
      });
      $(".navbar-nav li a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
      });

        $(".header-search > a").on('click', function () {
        $(".search-popup-wrap").slideToggle();
          return false;
        });

        $(".search-close").on('click',function () {
        $(".search-popup-wrap").slideUp(500);
        }); 
  },[])
 
  const getItemsLocalFunc = () =>{
    const localItems2 = JSON.parse(localStorage.getItem("items")); 
    if(localItems2){
      setLocalItems(localItems2[0]);
        let total = 0;
        localItems2[0].product.forEach(element => {
          total += element.price * element.cnt; 
      });
      setTotalPrice(total);
    }
    
   
  }
  const localStoreFunc = () =>{ 
    setCheckId(true) 
  }
	const refreshToken = async () =>{
        const expireDate = new Date(localStorage.getItem("expireDate"));
        if(expireDate > new Date()){
            const expIn = expireDate.getTime() - new Date().getTime(); 
            await setTimeout(()=>{ 
              document.location.replace("/");
            },expIn)
        } else {
            const body = {
                grant_type: "refresh_token",
                refresh_token: localStorage.getItem("refreshToken")
            }
            axios.post("https://securetoken.googleapis.com/v1/token?key=AIzaSyAA_wX14i2xQr-owSd7-iAxcp4J3qRdgMI", body).then((res)=>{ 
                const expIn =  res.data.expires_in; 
                const expireDate = new Date(new Date().getTime() + parseInt(expIn) * 1000); 
                localStorage.setItem("idToken",  res.data.id_token)
                localStorage.setItem("localId",  res.data.user_id) 
                localStorage.setItem("expireDate", expireDate)
                localStorage.setItem("refreshToken",  res.data.refresh_token) 
                document.location.replace("/");
            }).catch((err)=>{
                console.log("err", err)
                message.error("Token хугацаа дууссан тул refresh хийнэ үү!!")
            })
        }
    }
  
const deleteFunc = (params, index) =>{
  setDelete(true);
  var b = [];

  localItems.product.splice(index, 1); 
    b = JSON.parse(localStorage.getItem("items"));
    b.forEach((element, i) => {
      b[i].product = localItems.product;
    }); 
    setLocalItems(localItems); 
    localStorage.setItem("items", JSON.stringify(b)); 
    message.success("Амжилттай устлаа.");   
    setTimeout(()=>{
      setDelete(false);
      window.location.reload();
    },400);
    
}
const menuFunc = () =>{
  return <li className="header-shop-cart"><a ><i className="flaticon-shopping-bag" /><span>{localItems.length === 0 ? "0" : localItems.product.length}</span></a>
  <ul className="minicart">
    {localItems.length === 0 || localItems.product.length === 0 ? <Empty description={<div>Сагс хоосон байна.</div>} /> :
    <> 
    {localItems.product.map((e, i)=>(
      <li className="d-flex align-items-start" key={i}>
       <div className="cart-img">
         <a href="/#"><img src={e.img ? e.img[0] : "img/product/cart_p01.jpg"} alt="" /></a>
       </div>
       <div className="cart-content">
         <h4><span href="/#">{e.title}</span></h4>
         <div style={{fontSize: "14px", color: "#676565"}}>Тоо ширхэг: {e.cnt}</div>
         <div className="cart-price"> 
           <span className="new">{e.price.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, "$&,")}₮</span>
           {/* <span><del>{e.cnt}</del></span> */}
         </div>
       </div>
       <div className="del-icon">
        <Button icon={<i className="far fa-trash-alt" />} loading={deleteLoad} onClick={()=>deleteFunc(e, i)} size='small' type='primary' style={{marginLeft: "-10px"}}></Button>
         {/* <div onClick={()=>deleteFunc(e, i)}><i className="far fa-trash-alt" /></div> */}
       </div>
     </li>
    ))}
   
    </>
    }
    <li>
      <div className="total-price">
        <span className="f-left">Total:</span>
        <span className="f-right">{totalPrice.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, "$&,")}₮</span>
      </div>
    </li>
    <li>
      <div className="checkout-link">
        <Link to="/cart">Сагс</Link>
        <Link to="/checkout" className="black-color">Захиалах</Link> 
      </div>
    </li>
  </ul>
</li>
}
    return(
<header>
        <div className="header-top-area">
          <div className="container custom-container">
            <div className="row align-items-center">
              <div className="col-md-7">
                <div className="header-top-left">
                  <ul>
                    <li>Утас: 94262047</li>
                    <li><i className="far fa-clock" />Нээх цаг: 7:00 am - 9:00 pm (Mon - Sun)</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="header-top-right">
                  <ul className="header-top-social">
                    <li className="follow">Follow :</li>
                    <li><a href="/#"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href="/#"><i className="fab fa-twitter" /></a></li>
                    <li><a href="/#"><i className="fab fa-instagram" /></a></li>
                    <li><a href="/#"><i className="fab fa-linkedin-in" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="sticky-header" className="menu-area">
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler"><i className="fas fa-bars" /></div>
                <div className="menu-wrap">
                  <nav className="menu-nav show">
                    <div className="logo" ><Link to="/"><span style={{fontWeight: "600", color: "red"}}>SANAA SHOP</span></Link></div> 
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        <li className="active menu-item-has-children"><Link to="/">Дэлгүүр</Link>
                          {/* <ul className="submenu">
                            <li className="active" onClick={(e)=> subActive(e)}><Link to="/">Home One</Link></li>
                            <li><Link to="/home-two" onClick={(e)=> subActive(e)}>Home Two</Link></li>
                          </ul> */}
                        </li>
                        {/* <li><Link to="/doglist" onClick={(e)=> handleActive(e)}>Dog List</Link></li> */}
                        {/* <li className="menu-item-has-children"><Link to="/shop" onClick={(e)=> handleActive(e)}>Дэлгүүр</Link></li> */}
                        {/* <li><Link to="/adoption" onClick={(e)=> handleActive(e)}>Үрчлэлт авах</Link></li> */}
                        {/* <li className="menu-item-has-children"><Link to="/breeder" onClick={(e)=> handleActive(e)}>Үйлдвэр</Link>
                          <ul className="submenu">
                            <li><Link to="/breeder" onClick={(e)=> subActive(e)}>Манай үржүүлэгч</Link></li>
                            <li><Link to="/breeder-details" onClick={(e)=> subActive(e)}>Үржүүлэгч дэлгэрэнгүй</Link></li>
                          </ul>
                        </li> */}
                        {/* <li className="menu-item-has-children"><Link to="/blogs" onClick={(e)=> handleActive(e)}>Блог</Link>
                          <ul className="submenu">
                            <li><Link to="/blogs"  onClick={(e)=> subActive(e)}>Бидний Блог</Link></li>
                            <li><Link to="/blog-details" onClick={(e)=> subActive(e)}>Блог дэлгэрэгүй</Link></li>
                          </ul>
                        </li> */}
                        <li><Link to="/contacts" onClick={(e)=> handleActive(e)}>Холбоо барих</Link></li>
                      </ul>
                    </div>
                    <div className="header-action d-md-none d-block">
                      <ul> 
                      {menuFunc()}
                      </ul>
                    </div>
                    <div className="header-action d-none d-md-block">
                      <ul>
                        <li className="header-search"><a href="/#"><i className="flaticon-search" /></a></li>
                        {menuFunc()}
                        {!checkId ? <li className="header-btn"><Link to="/sign-in" className="btn">Нэвтрэх <img src="img/icon/w_pawprint.png" alt="" /></Link></li> : 
                          <li className="header-btn"><Link to="/dashboard" className="btn">Самбар<img src="img/icon/w_pawprint.png" alt="" /></Link></li> 
                        }
                      </ul>
                    </div>
                  </nav>
                </div>
             
                <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn"><i className="fas fa-times" /></div>
                    <div className="nav-logo"><Link to="/"><img src="img/logo/logo3.png" alt="" title='true' /></Link>
                    </div>
                    <div className="menu-outer">
                        
                    </div>
                    <div style={{marginTop: "20px", display: "flex", justifyContent: "center"}}>
                      {!checkId ? <li className="header-btn"><Link to="/sign-in" className="btn">Нэвтрэх <img src="img/icon/w_pawprint.png" alt="" /></Link></li> : 
                            <li className="header-btn"><Link to="/dashboard" className="btn">Самбар<img src="img/icon/w_pawprint.png" alt="" /></Link></li> 
                      }
                    </div>
                    <div className="social-links">
                      <ul className="clearfix">
                        <li><a href="/#"><span className="fab fa-twitter" /></a></li>
                        <li><a href="/#"><span className="fab fa-facebook-square" /></a></li>
                        <li><a href="/#"><span className="fab fa-pinterest-p" /></a></li>
                        <li><a href="/#"><span className="fab fa-instagram" /></a></li>
                        <li><a href="/#"><span className="fab fa-youtube" /></a></li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="menu-backdrop" />
         
              </div>
            </div>
          </div>
          {/* <div className="header-shape" style={{backgroundImage:"url('img/bg/header_shape.png')"}}/> */}
        </div>
       
        <div className="search-popup-wrap" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="search-close">
            <span><i className="fas fa-times" /></span>
          </div>
          <div className="search-wrap text-center">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2 className="title">... Энд хайх ...</h2>
                  <div className="search-form">
                    <form>
                      <input type="text" name="search" placeholder="Хайх зүйлээ энд бичнэ үү.." />
                      <button className="search-btn"><i className="fas fa-search" /></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      
      </header>
    )
}

export default Header