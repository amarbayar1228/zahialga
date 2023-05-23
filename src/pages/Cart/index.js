import { Button, Image, Space, Table } from "antd";
import SidebarBreadCumb from "../../components/sidebar/sidebarBreadCumb";
import { useEffect, useState } from "react";

const Cart =  () =>{
    const [itemList, setItemList] = useState([]);
    useEffect(()=>{
        getItems();
    },[])
    const getItems = () =>{
        const localItems = JSON.parse(localStorage.getItem("items"));
        console.log("localItems: ", localItems);
        if(localItems){
            setItemList(localItems[0].product);
        }
        
    }
    const columns = [
        {
          title: 'Зураг',
          dataIndex: 'img',
          key: 'img',
          width: '70px',
          ellipsis: true,
          render: (img) =><div><Image src={img} width={100}/></div>, 
        },
        {
          title: 'Барааны нэр',
          dataIndex: 'title',
          key: 'title',
          width: '120px',
          ellipsis: true,
        },
        {
          title: 'Тоо ширхэг',
          dataIndex: 'cnt',
          key: 'cnt',
          width: '80px',
          render: (cnt) =><div> 
            <Button size="small" style={{marginRight: "5px"}}>-</Button>
             {cnt}
            <Button size="small" style={{marginLeft: "5px"}}>+</Button>
          </div>, 
          ellipsis: true,
        }, 
        {
            title: 'Үнэ',
            dataIndex: 'price',
            key: 'price',
            width: '90px',
            ellipsis: true,
        },  
        {
          title: 'Төлөв',
          key: 'action',
          width: '50px',
          ellipsis: true,
          render: (_, record) => (
            <Space size="middle"> 
                <Button type="primary" icon={<i className="far fa-trash-alt" />}></Button>
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
            <div className="row justify-content-center"> 
                Таны сагсанд байгаа зүйлс 
            </div>
            <div className="row justify-content-center">  
        <div className="col-lg-3 col-md-8 "> 
              <aside className="breeder-sidebar">
                <div className="widget breeder-widget">
                  <div className="breeder-widget-title mb-20">
                    <h5 className="title">Тооцоо хийх</h5>
                  </div>
                  <form  className="sidebar-find-pets">
                    <div className="form-grp search-box">
                      <input type="text" placeholder="Хайх" />
                      <button><i className="fas fa-search" /></button>
                    </div>
                    <div className="form-grp">
                      <i className="flaticon-location" />
                      <input type="text" placeholder="Байршил" />
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="form-grp">
                          <i className="flaticon-color-palette" />
                          <input type="text" placeholder="Цагаан" />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-grp">
                          <i className="far fa-calendar-alt" />
                          <input type="text" defaultValue={2021} />
                        </div>
                      </div>
                    </div>
                     
                    <div className="form-grp">
                      <i className="fas fa-dollar-sign" />
                      <select name="name" className="selected">
                        <option value>Price</option>
                        <option value>100.000₮ - 150.000₮</option>
                        <option value>150.000₮ - 250.000₮</option>
                        <option value>250.000₮ - 350,000₮</option>
                        <option value>350.000₮ - 550.000₮</option>
                        <option value>550.000₮ - 100.000</option>
                      </select>
                    </div> 
                    <button className="btn">Тооцоо хийх</button>
                  </form>
                </div>
               
              </aside> 
        </div>
                <div className="col-lg-9"> 
                  <Table columns={columns} dataSource={data}  scroll={{y: 600, x: 800}} />
                </div>
            </div>
        </div> 
        </section>
       
    </div>  
}
export default Cart;