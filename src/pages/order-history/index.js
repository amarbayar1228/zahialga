import { Button, Image, Input, Space, Table, Tag } from "antd";
import Sidebar from "../../components/sidebar";
import SidebarBreadCumb from "../../components/sidebar/sidebarBreadCumb";
import Highlighter from 'react-highlight-words';
import { useEffect, useRef, useState } from "react";
import { SearchOutlined } from '@ant-design/icons'; 
import axios from "./../../axios-orders"; 
import Items from "./items";
import Confirm from "./confirm";
import UserInfo from "./user-info";
 
const OrderHistory = () =>{ 
const [searchText, setSearchText] = useState('');
const [searchedColumn, setSearchedColumn] = useState('');
const searchInput = useRef(null);
const [hisData, setData] = useState([]) 
const [loadingTable, setLoadingTable] = useState(false); 
const [isAdmin, setIsAdmin]= useState(0);
useEffect(()=>{
  const localId = localStorage.getItem("localId"); 
  if(localId){
    getHistory(); 
  } 
},[])
  const data = hisData.map((e, i)=>( 
    {
      key: i,
      orderId: e[1].orderHistory.orderId, 
      totalPrice: e[1].orderHistory.totalPrice, 
      status: e[1].orderHistory.status,
      action: e,
      allData: e
    }
  ))
const getHistory = () =>{ 
  setLoadingTable(true); 
  const token = localStorage.getItem("idToken");   
  const localId = localStorage.getItem("localId");
      axios.get(`profile.json?orderBy="localId"&equalTo="${localId}"&auth=${token}`).then((res)=>{  
      const data = Object.entries(res.data).reverse();   
      setIsAdmin(data[0][1].values.isAdmin); 
      console.log("admin", data[0][1].values.isAdmin);
        if(data[0][1].values.isAdmin == 1){
            axios.get(`orderHistory.json?&auth=${token}`).then((res)=>{ 
                const data = Object.entries(res.data).reverse();  
                console.log("admin 1: ", data);
                setData(data)  
            }).catch((err)=>{
                console.log("err: ", err)
            }).finally(()=>{
                setLoadingTable(false)
            })
        }else{ 
            axios.get(`orderHistory.json?orderBy="localId"&equalTo="${localId}"&auth=${token}`).then((res)=>{ 
                const data = Object.entries(res.data).reverse();  
                console.log("bish: ", data);
                setData(data)  
            }).catch((err)=>{
                console.log("err: ", err)
            }).finally(()=>{
                setLoadingTable(false)
            })
        }
        
          // setItemList(data)  
      }).catch((err)=>{
          console.log("err: ", err)
      }) 

}
const handleSearch = (selectedKeys, confirm, dataIndex) => {
  confirm();
  setSearchText(selectedKeys[0]);
  setSearchedColumn(dataIndex);
};
const handleReset = (clearFilters) => {
  clearFilters();
  setSearchText('');
};
const getColumnSearchProps = (dataIndex) => ({
  filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
    <div style={{padding: 8,}}onKeyDown={(e) => e.stopPropagation()}>
      <Input
        ref={searchInput}
        placeholder={`Search ${dataIndex}`}
        value={selectedKeys[0]}
        onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
        onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
        style={{
          marginBottom: 8,
          display: 'block',
        }}
      />
      <Space>
        <Button type="primary" onClick={() => handleSearch(selectedKeys, confirm, dataIndex)} icon={<SearchOutlined />} size="small" style={{width: 90,}}>Search</Button>
        <Button onClick={() => clearFilters && handleReset(clearFilters)}size="small"style={{width: 90,}}>Reset</Button> 
      </Space>
    </div>
  ),
  filterIcon: (filtered) => (
    <SearchOutlined
      style={{
        color: filtered ? '#1890ff' : undefined,
      }}
    />
  ),
  onFilter: (value, record) =>
    record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
  onFilterDropdownOpenChange: (visible) => {
    if (visible) {
      setTimeout(() => searchInput.current?.select(), 100);
    }
  },
  render: (text) =>
    searchedColumn === dataIndex ? (
      <Highlighter
        highlightStyle={{
          backgroundColor: '#ffc069',
          padding: 0,
        }}
        searchWords={[searchText]}
        autoEscape
        textToHighlight={text ? text.toString() : ''}
      />
    ) : (
      text
    ),
});
const columns = [
  {
    title: '№',
    dataIndex: 'key',
    key: 'key',
    width: '50px',
    ellipsis: true,
  }, 
  {
    title: 'Захиалгын дугаар',
    dataIndex: 'orderId',
    key: 'orderId',
    width: '100px',
    ellipsis: true,
    ...getColumnSearchProps('orderId'), 
  }, 
  {
    title: 'Нийт үнэ',
    dataIndex: 'totalPrice',
    key: 'totalPrice',
    width: '100px',
    ellipsis: true,
    ...getColumnSearchProps('totalPrice'), 
  },  
  {
    title: 'Төлөв',
    dataIndex: 'status',
    key: 'status',
    width: '100px',
    ellipsis: true,
    render: (action)=> <div style={{display: "flex", gap: "10px"}}>    
            {action === 0 ?  <Tag color="processing">Хүлээгдэж байна</Tag> : <Tag color="success">Баталгаажсан</Tag>} 
      </div> 
  },  
  {
    title: 'Үйлдэл',
    dataIndex: 'allData',
    key: 'allData',
    width: '100px',
    fixed: 'right',
    render: (action)=> <div style={{display: "flex", gap: "10px"}}>  
    {console.log("status: ", action)}  
           <Items items={action[1].orderHistory.itemList}/>
            {isAdmin == 1 ? 
            <> 
               {action[1].orderHistory.status == 0 ?  <Confirm data={action[0]} getHistory={getHistory} items={action[1]}/> : null}
                <UserInfo data={action[0]} getHistory={getHistory} items={action[1]}/>
            </>
            : null} 

      </div> 
  },
];

 
    return<div>
       <SidebarBreadCumb title="Захиалгын түүх"/>
       <section style={{marginLeft: "0px", padding: "50px 0"}}>
        <div className="container">
            <div className="row justify-content-center"> 
                <div className="col-lg-3 col-md-8 ">
                   <Sidebar />
                </div> 
                <div className="col-lg-9"> 
                    {/* <AddDogModal getDogList={getDogList}/> */}
                    <Table columns={columns} bordered dataSource={data}  scroll={{y: 600}} loading={loadingTable} pagination={{ total: 0, showTotal: (total) => `Нийт: ${total} - Нохой` }} />
                </div>
            </div>
        </div> 
    </section>
    </div>
}
export default OrderHistory;