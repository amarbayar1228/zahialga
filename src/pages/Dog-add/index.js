import { Button, Image, Input, Space, Table } from "antd";
import Sidebar from "../../components/sidebar";
import SidebarBreadCumb from "../../components/sidebar/sidebarBreadCumb";
import Highlighter from 'react-highlight-words';
import { useEffect, useRef, useState } from "react";
import { SearchOutlined } from '@ant-design/icons';
import AddDogModal from "./addDogModal";
import axios from "./../../axios-orders";
import EditDog from "./editDog";
import DeleteDog from "./delete";
 
const DogAdd = () =>{ 
const [searchText, setSearchText] = useState('');
const [searchedColumn, setSearchedColumn] = useState('');
const searchInput = useRef(null);
const [dogList, setDogList] = useState([]) 
const [loadingTable, setLoadingTable] = useState(false); 
useEffect(()=>{
  const localId = localStorage.getItem("localId"); 
  if(localId){
    // getDogList();
  } 
},[])
  const data = dogList.map((e, i)=>( 
    {
      key: i,
      title: e[1].values.title, 
      description: e[1].values.description, 
      price: e[1].values.price, 
      type: e[1].values.type,
      img:  e[1].values.img ? e[1].values.img[0] : "",
      action: e,
      allData: e
    }
  ))
const getDogList = () =>{ 
  setLoadingTable(true);
  // const token = localStorage.getItem("idToken"); 

  axios.get(`dogList.json`).then((res)=>{ 
      const data = Object.entries(res.data).reverse();  
      setDogList(data)  
  }).catch((err)=>{
      console.log("err: ", err)
  }).finally(()=>{
    setLoadingTable(false)
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
    title: 'Гарчиг',
    dataIndex: 'title',
    key: 'title',
    width: '100px',
    ellipsis: true,
    ...getColumnSearchProps('title'), 
  },
  {
    title: 'Зураг',
    dataIndex: 'img',
    key: 'img',
    width: '80px',
    render: (img) =><div><Image src={img} width={50}/></div>,
    ellipsis: true, 
  },
  {
    title: 'Үнэ',
    dataIndex: 'price',
    key: 'price',
    width: '100px',
    ellipsis: true,
    ...getColumnSearchProps('price'), 
  }, 
  {
    title: 'Дэлгэрэнгуй',
    dataIndex: 'description',
    key: 'description',
    width: '150px',
    ellipsis: true,
    ...getColumnSearchProps('description'),
    sorter: (a, b) => a.description.length - b.description.length,
    sortDirections: ['descend', 'ascend'], 
  },
  {
    title: 'Үйлдэл',
    dataIndex: 'allData',
    key: 'allData',
    width: '100px',
    fixed: 'right',
    render: (action)=> <div style={{display: "flex", gap: "10px"}}>   
            <EditDog data={action[0]} getDogList={getDogList} info={action[1].values}/>
            <DeleteDog  data={action[0]} getDogList={getDogList}/>   
      </div> 
  },
];

const getUserInfo = () =>{
  
  const body = {
    email: "",
    password: "",
    returnSecureToken: true
}
axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBh7ZZbLjzUSTmVC-lNk4I3svpZSNmqvHE", body).then((res)=>{ 
    if(res.data.registered === true){ 
        const expIn =  res.data.expiresIn;
        const expireDate = new Date(new Date().getTime() + parseInt(expIn) * 1000); 
        localStorage.setItem("idToken",  res.data.idToken)
        localStorage.setItem("localId",  res.data.localId) 
        localStorage.setItem("expireDate", expireDate)
        localStorage.setItem("refreshToken",  res.data.refreshToken)  
        // document.location.replace("/");
    }else{ 
        // message.error(res.data.errors[0].message)
    }
}).catch((err)=>{
    if(err.response.data.error.message === "EMAIL_NOT_FOUND"){
        // setMsj("Имэйл олдсонгүй!");
    }else if(err.response.data.error.message === "INVALID_PASSWORD"){
        // setMsj("Нууц үг буруу байна!");
    }
})  
}
    return<div>
       <SidebarBreadCumb title="Нохой нэмэх"/>
       <section style={{marginLeft: "0px", padding: "50px 0"}}>
        <div className="container">
            <div className="row justify-content-center"> 
                <div className="col-lg-3 col-md-8 ">
                   <Sidebar />
                </div>

                <div className="col-lg-9"> 
                    <AddDogModal getDogList={getDogList}/>
                    <Table columns={columns} bordered dataSource={data}  scroll={{y: 600, x: 1200}} loading={loadingTable} pagination={{ total: 0, showTotal: (total) => `Нийт: ${total} - Нохой` }} />
                </div>
            </div>
        </div> 
    </section>
    </div>
}
export default DogAdd;