import { Button } from "antd";
import SidebarBreadCumb from "../../components/sidebar/sidebarBreadCumb";

const Checkout = () =>{
    return<div> 
        <SidebarBreadCumb title="Тооцоо хийх" />
       <section className="blog-details-area">
        <div className="container">
            <div className="row justify-content-center"> 
               Checkout
            </div>
            <div className="row justify-content-center">  
                <div className="col-lg-3 col-md-8 ">
                  2222
                </div>
                <div className="col-lg-9"> 
                    3
                  <Button >Get</Button> 
                </div>
            </div>
        </div> 
        </section>
    </div>
}
export default Checkout;