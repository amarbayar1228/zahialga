import { Button, Cascader, Checkbox, Col, Form, Input, InputNumber, Row, Select, message } from "antd";
import SidebarBreadCumb from "../../components/sidebar/sidebarBreadCumb";
import { useEffect, useState } from "react";
import {Link}  from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "../../axios-orders";
const { Option } = Select; 
const Checkout = () =>{
  const [itemList, setItemList] = useState([]);
  const [totalPriceD, setTotalPriceD]  =  useState(0); 
  const [formData, setFormData] = useState({lastName: "",firstName: "", phone: "", address: "", mail: ""})
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [mail, setMail] = useState("");
  const history = useHistory();
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
    const localId = localStorage.getItem("localId");
    const token = localStorage.getItem("idToken"); 
    
    if(lastName === "" || firstName === "" || phone === "" || address === "" || mail === ""){
      message.error("Мэдээлэлээ бөглөнө уу?");
    }else{ 
      const totalSlice = Math.random();
      const dd =  totalSlice + "";
      const ff = dd.slice(9);
      const body = {
        localId: localId, 
        orderHistory: {
          orderId: "#ID" + ff, 
          totalPrice: totalPriceD,
          status: 0,
          itemList:  itemList,
          userInfo: {
            lastName: lastName,
            firstName: firstName,
            phone: phone,
            address: address,
            email: mail,
          }
        }
      } 
      setTimeout(()=>{
        axios.post(`orderHistory.json?&auth=${token}`, body).then((res)=>{
          if(res.data)
          // setBtnLoad(false)
          message.success("Амжилттай");
          localStorage.removeItem("items")
          history.push("success");
        }).catch((err)=>{  
          // setBtnLoad(false)
        }).finally(()=>{
          // setBtnLoad(false);
          // props.getItemList();
          // setIsModalOpen(false);
        })
      },800)  
    }

  }
  const ovogFunc = (e) =>{
    console.log("e: ", e.target.value); 
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
                        </form>
                        <button className="btn" onClick={order}>Захиалах</button>
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
                          <input type="text" placeholder="Овог"   onChange={(e)=>setLastName(e.target.value)}/>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-grp">
                          <i className="far fa-user" />
                          <input type="text"  placeholder="Нэр" onChange={(e)=>setFirstName(e.target.value)}/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="form-grp">
                          <i className="fa fa-envelope" />
                          <input type="text" placeholder="Имэйл" onChange={(e)=>setMail(e.target.value)}/> 
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-grp">
                          <i className="fa fa-phone-alt" />
                          <input type="text" placeholder="Утасны дугаар" onChange={(e)=>setPhone(e.target.value)}/>
                        </div>
                      </div>
                    </div>
                    <div className="form-grp">
                      <i className="flaticon-location" />
                      <input type="text" placeholder="Байршил" onChange={(e)=>setAddress(e.target.value)} />
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