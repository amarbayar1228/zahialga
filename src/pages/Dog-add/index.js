import { Button, Image, Input, Space, Table, Typography } from "antd";
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
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const [dogList, setDogList] = useState([]) 
    const [loadingTable, setLoadingTable] = useState(false); 
    useEffect(()=>{
      const localId = localStorage.getItem("localId"); 
      if(localId){
        getDogList();
      } 
    },[])
      const data = dogList.map((e, i)=>( 
        {
          key: i,
          title: e[1].values.title,
          age: e[1].values.age,
          size: e[1].values.size,
          gender: e[1].values.gender,
          color: e[1].values.color,
          description: e[1].values.description,
          pedId: e[1].values.pedId,
          price: e[1].values.price,
          birth: e[1].values.birth,
          country: e[1].values.country,
          type: e[1].values.type,
          img:  e[1].values.img ? e[1].values.img[0] : "",
          action: e,
          allData: e
        }
      ))
      const getDogList = () =>{ 
        setLoadingTable(true);
        const token = localStorage.getItem("idToken"); 

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
            title: 'Pet ID',
            dataIndex: 'pedId',
            key: 'pedId',
            width: '100px',
            ellipsis: true,
            ...getColumnSearchProps('pedId'), 
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
          title: 'Төрсөн он',
          dataIndex: 'birth',
          key: 'birth',
          width: '130px',
          ellipsis: true,
          ...getColumnSearchProps('birth'), 
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
          title: 'Нас',
          dataIndex: 'age',
          key: 'age',
          width: '80px',
          ellipsis: true,
          ...getColumnSearchProps('age'), 
        },
        {
          title: 'Төрөл',
          dataIndex: 'type',
          key: 'type',
          width: '120px',
          ellipsis: true,
          ...getColumnSearchProps('type'), 
        },
        {
          title: 'Хүйс',
          dataIndex: 'gender',
          key: 'gender',
          width: '80px',
          ellipsis: true,
          ...getColumnSearchProps('gender'),
        
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
            title: 'Хот',
            dataIndex: 'country',
            key: 'country',
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
        //   render: (a)=> <div style={{display: "flex"}}> 
        //                   <Paragraph copyable={{text: a }}></Paragraph>
        //                   <div style={{paddingLeft: "5px"}}>{a}</div>
        //                 </div>
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
    return<div>
       <SidebarBreadCumb title="Нохой нэмэх"/>
       <section className="blog-details-area" style={{marginLeft: "0px"}}>
        <div className="container">
            <div className="row justify-content-center"> 
                <div className="col-lg-3 col-md-8 ">
                   <Sidebar />
                </div>
                <div className="col-lg-9"> 
                    <AddDogModal getDogList={getDogList}/>
                    <Table columns={columns} bordered dataSource={data}  scroll={{y: 600, x: 1200}} loading={loadingTable} pagination={{ total: 0, showTotal: (total) => `Total: ${total} items` }} />
                </div>
            </div>
        </div> 
    </section>
    </div>
}
export default DogAdd;