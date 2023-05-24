import { Button } from "antd";
import SidebarBreadCumb from "../../components/sidebar/sidebarBreadCumb";
import { useEffect } from "react";
import {Link}  from "react-router-dom";
const Checkout = () =>{

    useEffect(()=>{
        
    },[])
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
                              <div style={{display: "flex", justifyContent: "space-between"}}>
                                <div>nameffffff</div>
                                <div>$22</div>
                              </div>
                              <div style={{display: "flex", justifyContent: "space-between"}}>
                                <div>namessssss </div>
                                <div>$22</div>
                              </div>
                            </div>
                            <div style={{display: "flex", fontWeight: "600", justifyContent: "space-between", borderBottom: "1px solid #ebebeb",paddingBottom: "15px", marginBottom: "10px"}}>
                              <div>Total</div>
                              <div>123$</div>
                            </div>
                          </div>  
                            <Link to={"/checkout"}><button className="btn">Захиалга өгөх</button></Link>
                        </form>
                      </div>
                    
                    </aside> 
              </div>
              <div className="col-lg-8">   
                
              </div>
            </div>
        </div> 
        </section>
    </div>
}
export default Checkout;