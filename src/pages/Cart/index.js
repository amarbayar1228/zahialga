import { Button, Image, Space, Table, message } from "antd";
import SidebarBreadCumb from "../../components/sidebar/sidebarBreadCumb";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import css from "./style.module.css"

const Cart =  () =>{
    const [itemList, setItemList] = useState([]);
    const [totalPriceD, setTotalPriceD]  =  useState(0);
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
    const nemeh = (cnt, param2) =>{  
      let getBasket = []; 
      getBasket = JSON.parse(localStorage.getItem("items")) ?? [];   
  
      getBasket.forEach((e, i) => { 
        e.product.forEach((el, indexs) => { 
          if (param2.action.id == el.id) {  
            getBasket[0].product[indexs].cnt = cnt + 1; 
            localStorage.setItem("items", JSON.stringify(getBasket));   
          }
        }); 
        getItems();
      }); 

    }

    const hasah = (cnt, param2) =>{
      let getBasket = []; 
      if(cnt <= 1){ 
      }else{
          getBasket = JSON.parse(localStorage.getItem("items")) ?? [];   
          getBasket.forEach((e, i) => { 
            e.product.forEach((el, indexs) => { 
              if (param2.action.id == el.id) {  
                getBasket[0].product[indexs].cnt = cnt - 1; 
                localStorage.setItem("items", JSON.stringify(getBasket));   
              }
            }); 
            getItems();
          }); 
      }
    }
    const deleteFunc = (param1, param2, index) =>{ 
      // let getBasket = []; 
      var b = [];
      const getBasket = JSON.parse(localStorage.getItem("items"));   

        getBasket[0].product.splice(index, 1); 
        b = JSON.parse(localStorage.getItem("items"));
        b.forEach((element, i) => {
          b[i].product = getBasket[0].product;
        });
        localStorage.setItem("items", JSON.stringify(b)); 
        getItems();
        message.success("Амжилттай устлаа");   
        setTimeout(()=>{
          window.location.reload();
        }, 600)
        
        
    }
    const columns = [
        {
          title: 'Зураг',
          dataIndex: 'img',
          key: 'img',
          width: '30px',
          ellipsis: true,
          render: (img) =><div><Image src={img} width={100}/></div>, 
        },
        {
          title: 'Барааны нэр',
          dataIndex: 'title',
          key: 'title',
          width: '30px',
          ellipsis: true,
        },
        {
          title: 'Тоо ширхэг',
          dataIndex: 'cnt',
          key: 'cnt',
          width: '30px',
          render: (cnt, bb) =><div> 
            <Button size="small" style={{marginRight: "8px"}} onClick={()=>hasah(cnt, bb) }>-</Button>
             {cnt}
            <Button size="small" style={{marginLeft: "8px"}} onClick={()=>nemeh(cnt, bb)}>+</Button>
          </div>, 
          ellipsis: true,
        }, 
        {
            title: 'Үнэ',
            dataIndex: 'price',
            key: 'price',
            width: '20px',
            ellipsis: true,
            render: (cnt) =><div> 
            {cnt.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, "$&,")}₮
          </div>,  
        },  
        {
          title: 'Төлөв',
          key: 'action',
          width: '20px',
          ellipsis: true,
          render: (id, record, index) => (
            <Space size="middle"> 
                <Button type="primary" icon={<i className="far fa-trash-alt" />} onClick={()=>deleteFunc(id, record, index)}></Button>
            </Space>
          ),
        },
      ];
      
  const data = itemList.map((e, i)=>( 
    {
      key: i,
      title: e.title,   
      cnt: e.cnt, 
      price: e.price,  
      img:  e.img ? e.img[0] : "",
      action: e, 
    }
  )) 
    return<div>
        <SidebarBreadCumb title="Сагс" />
       <section className="blog-details-area">
        <div className="container">
            {/* <div className="row justify-content-center"> 
                Таны сагсанд байгаа зүйлс 
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
                            <div style={{paddingTop: "8px", paddingBottom: "15px", marginBottom: "10px"}}>
                              <div style={{display: "flex", justifyContent: "space-between"}}>
                                <div>Бүтээгдэхүүн:</div>
                                <div>{totalPriceD}₮</div>
                              </div> 
                            </div>
                            <div style={{display: "flex", fontWeight: "600", justifyContent: "space-between", borderBottom: "1px solid #ebebeb",paddingBottom: "15px", marginBottom: "10px"}}>
                              <div>Нийт дүн:</div>
                              <div>{totalPriceD}₮</div>
                            </div>
                          </div>
                            <Link to={"/checkout"}><button className="btn">Тооцоо хийх</button></Link>
                        </form>
                      </div>
                    
                    </aside> 
              </div>
              <div className="col-lg-8"> 
                <Table columns={columns} dataSource={data}  scroll={{y: 600, x: "auto"}} bordered/>

                <div style={{display: "flex", justifyContent: "space-between"}}>  
                {/* <Link to={"/shop"}> <button className="btn">Худалдан авалт хийх</button></Link> */}
                </div>
              </div>
            </div>
        </div> 
        </section>
       
    </div>  
}
export default Cart;