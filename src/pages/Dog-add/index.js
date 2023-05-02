import Sidebar from "../../components/sidebar";
import SidebarBreadCumb from "../../components/sidebar/sidebarBreadCumb";

const DogAdd = () =>{
    return<div>
       <SidebarBreadCumb title="Нохой нэмэх"/>
       <section className="blog-details-area" style={{marginLeft: "0px"}}>
        <div className="container">
            <div className="row justify-content-center"> 
                <div className="col-lg-3 col-md-8 ">
                   <Sidebar />
                </div>
                <div className="col-lg-9">
                    Нохой нэмэх
                </div>
            </div>
        </div> 
    </section>
    </div>
}
export default DogAdd;