import { Button, Col, Image, Input, Row, Select, Space, Table } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import dataJson from "../.././data/category.json"
import Sidebar from "../../components/sidebar";
import SidebarBreadCumb from "../../components/sidebar/sidebarBreadCumb";
import Add from "./add";
import { useEffect, useRef, useState } from "react"; 
import axios from "./../../axios-orders";
import Highlighter from "react-highlight-words";
import EditItem from "./edit";
import DeleteItem from "./delete";
const AddItem = () =>{
const [loadingTable, setLoadingTable] = useState(false); 
const [itemList, setItemList] = useState([]); 
const [searchText, setSearchText] = useState('');
const [searchedColumn, setSearchedColumn] = useState('');
const searchInput = useRef(null);
// itemList.json?orderBy="itemList/catName"&equalTo="dogClothes"
useEffect(()=>{
    const localId = localStorage.getItem("localId"); 
    if(localId){
      getItemList();
    } 
  },[]);
  
  const data = itemList.map((e, i)=>( 
    {
      key: i,
      catLabel: e[1].itemList.catLabel, 
      title: e[1].itemList.title, 
      size: e[1].itemList.size,
      quantity: e[1].itemList.quantity,
      color: e[1].itemList.color,
      description: e[1].itemList.description,
      id: e[1].itemList.id,
      price: e[1].itemList.price, 
      evaluation: e[1].itemList.evaluation, 
      img:  e[1].itemList.img ? e[1].itemList.img[0] : "",
      action: e,
      allData: e
    }
  ))

  const getItemList = () =>{ 
    //Category sort:  firebaseio.com/itemList.json?orderBy="itemList/catName"&equalTo="dogClothes"
    setLoadingTable(true); 
    axios.get(`itemList.json`).then((res)=>{ 
        const data = Object.entries(res.data).reverse();  
        setItemList(data)  
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
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        width: '100px',
        ellipsis: true,
        ...getColumnSearchProps('id'), 
    },
    {
      title: 'Категори',
      dataIndex: 'catLabel',
      key: 'catLabel',
      width: '140px',
      ellipsis: true,
      ...getColumnSearchProps('catLabel'), 
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
      sorter: (a, b) => a.quantity - b.quantity,
      ...getColumnSearchProps('price'), 
    },
    {
      title: 'Тоо ширхэг',
      dataIndex: 'quantity',
      key: 'quantity',
      width: '140px',
      ellipsis: true,
      sorter: (a, b) => a.quantity - b.quantity,
      ...getColumnSearchProps('quantity'), 
    },
    {
      title: 'Үнэлгээ',
      dataIndex: 'evaluation',
      key: 'evaluation',
      width: '120px',
      ellipsis: true,
      ...getColumnSearchProps('type'), 
    }, 
    {
      title: 'Өнгө',
      dataIndex: 'color',
      key: 'color',
      width: '100px',
      ellipsis: true,
      ...getColumnSearchProps('color'), 
    },
    {
        title: 'Хэмжээ',
        dataIndex: 'size',
        key: 'size',
        width: '100px',
        ellipsis: true,
        ...getColumnSearchProps('size'), 
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
              <EditItem data={action[0]} getItemList={getItemList} info={action[1].itemList}/>
              <DeleteItem  data={action[0]} getItemList={getItemList}/>   
        </div> 
    },
  ];
  
  const onChangeSelect = (value, list) =>{ 
    // setCatLabel(list.label)
    console.log("value: ", value);
    // firebaseio.com/itemList.json?orderBy="itemList/catName"&equalTo="dogClothes"
    if(value === "all"){
      getItemList();
    }else{ 
      axios.get(`itemList.json?orderBy="itemList/catName"&equalTo="${value}"`).then((res)=>{ 
        const data = Object.entries(res.data).reverse();  
        setItemList(data)  
      }).catch((err)=>{
          console.log("err: ", err)
      }).finally(()=>{
        setLoadingTable(false)
      }) 
    }
  }
  const onSearch = (value) => {
    console.log('search:', value);
  };
return<div>
<SidebarBreadCumb title="Бараа нэмэх"/>
    <section className="blog-details-area" style={{marginLeft: "0px"}}>
    <div className="container">
        <div className="row justify-content-center"> 
            <div className="col-lg-3 col-md-8 ">
                <Sidebar />
            </div>
            <div className="col-lg-9"> 
            <div className="d-flex   align-items-center justify-content-between"> 
            <div style={{fontWeight: "600"}}> 
              <>Категори: </>
            <Select size="large" showSearch placeholder="Категори сонгох" style={{width: "220px"}} optionFilterProp="children" onChange={onChangeSelect} onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={dataJson.category.map((e)=>({value: e.value, label: e.label}))}/> 
              </div> 
                <Add getItemList={getItemList}/>
              </div> 
                <Table columns={columns} bordered dataSource={data}  scroll={{y: 600, x: 1200}} loading={loadingTable} pagination={{ total: 0, showTotal: (total) => `Нийт: ${total} - Бараа` }} />
            </div>
        </div>
    </div> 
</section>
</div>
}
export default AddItem;