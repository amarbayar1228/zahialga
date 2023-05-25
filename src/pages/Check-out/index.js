import { Button, Cascader, Checkbox, Col, Form, Input, InputNumber, Row, Select } from "antd";
import SidebarBreadCumb from "../../components/sidebar/sidebarBreadCumb";
import { useEffect, useState } from "react";
import {Link}  from "react-router-dom";
const { Option } = Select; 
const Checkout = () =>{
  const [itemList, setItemList] = useState([]);
  const [totalPriceD, setTotalPriceD]  =  useState(0); 
  const [formData, setFormData] = useState({lastName: "",firstName: "", phone: "", address: "", mail: ""})
   

    useEffect(()=>{
      getItems();
    },[])
    
    const getItems = () =>{
      const localItems = JSON.parse(localStorage.getItem("items"));
      if(localItems){
          setItemList(localItems[0].product); 
          let totalPrice = 0;
          localItems[0].product.forEach(element => { 
            totalPrice += element.price * element.cnt
          });
          setTotalPriceD(totalPrice.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, "$&,"));
      }
  }   
  const order = () =>{
    console.log("order: ", formData);
  }
  const ovogFunc = (e) =>{
    console.log("e: ", e.target.value);
    setFormData(...formData, {lastName: e.target.value})
  }
    return<div> 
        <SidebarBreadCumb title="Захиалга" />
       <section className="blog-details-area">
        <div className="container">
            {/* <div className="row justify-content-center"> 
               Checkout
            </div> */}
             <div className="row justify-content-center">  
              <div className="col-lg-4 col-md-8 "> 
                    <aside className="breeder-sidebar">
                      <div className="widget breeder-widget">
                        <div className="breeder-widget-title mb-20">
                          <h5 className="title">Сагс нийт</h5>
                        </div>
                        <form  className="sidebar-find-pets">  
                          <div>
                            <div style={{display: "flex", fontWeight: "600", justifyContent: "space-between", borderBottom: "1px solid #ebebeb",paddingBottom: "15px", marginBottom: "10px"}}>
                              <div >Бараа </div>
                              <div>Үнэ</div>
                            </div>
                            <div style={{borderBottom: "1px solid #ebebeb",paddingTop: "8px", paddingBottom: "15px", marginBottom: "10px"}}>

                              {itemList.map((e)=>(
                                <div style={{display: "flex", justifyContent: "space-between", fontSize: "14px"}}>
                                  <div>{e.title} <span style={{fontSize: "12px"}}>x {e.cnt}</span></div>
                                  <div>{e.price.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, "$&,")}₮</div>
                                </div>
                              ))}
                              
                            </div>
                            <div style={{display: "flex", fontWeight: "600", justifyContent: "space-between", borderBottom: "1px solid #ebebeb",paddingBottom: "15px", marginBottom: "10px"}}>
                              <div>Нийт үнэ:</div>
                              <div>{totalPriceD}₮</div>
                            </div>
                          </div>  
                          <button className="btn" onClick={order}>Захиалах</button>
                        </form>
                      </div>
                      
                    </aside> 
              </div>
              <div className="col-lg-8">   
              <aside className="breeder-sidebar">
                <div className="widget breeder-widget">
                  <div className="breeder-widget-title mb-20">
                    <h5 className="title">Дэлгэрэнгүй мэдээлэл</h5>
                  </div>
                  <form  className="sidebar-find-pets">
                  <div className="row">
                      <div className="col-6">
                        <div className="form-grp">
                          <i className="far fa-user" />
                          <input type="text" placeholder="Овог"   onChange={ovogFunc}/>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-grp">
                          <i className="far fa-user" />
                          <input type="text"  placeholder="Нэр" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="form-grp">
                          <i className="fa fa-envelope" />
                          <input type="text" placeholder="Имэйл" /> 
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-grp">
                          <i className="fa fa-phone-alt" />
                          <input type="text" placeholder="Утасны дугаар" />
                        </div>
                      </div>
                    </div>
                    <div className="form-grp">
                      <i className="flaticon-location" />
                      <input type="text" placeholder="Байршил" />
                    </div> 
                  </form>
                </div> 
              </aside>
              </div>
            </div>
        </div> 
        </section>
    </div>
}
export default Checkout;