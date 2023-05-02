
import { PlusOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import axios from "../../axios-orders";
import Sidebar from "../../components/sidebar";
import SidebarBreadCumb from "../../components/sidebar/sidebarBreadCumb"; 
import { Button, Image, Modal, Upload } from "antd";
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const Dashboard = () =>{
const [getDogList, setDogList] = useState();
const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [blon, setBlon] = useState(false);
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }, 
  ]);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    console.log("file", file);
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList)
    console.log("file ", newFileList);
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
useEffect(()=>{
    // getZurag();
    console.log("object");
},[])
const getZurag = () =>{

    axios.get(`zurag.json`).then((res)=>{ 
        const data = Object.entries(res.data).reverse();  
        console.log("data: ", data);
        setDogList(data)  
        setBlon(true);
    }).catch((err)=>{
        console.log("err: ", err)
    }).finally(()=>{ 
    }) 
}
const sendZurag = () =>{
    const zurag = [];
    fileList.forEach(element => {
        zurag.push(element.thumbUrl);
    });
    const body = {
        img: zurag,
    }
    axios.post(`zurag.json`, body).then((res)=>{ 
        console.log("send zurag: ", res);  
    }).catch((err)=>{
        console.log("err: ", err)
    }) 
}
return<div> 

    <SidebarBreadCumb title="Хяналтын самбар"/>
       <section className="blog-details-area" style={{marginLeft: "0px"}}>
        <div className="container">
            <div className="row justify-content-center"> 
                <div className="col-lg-3 col-md-8 ">
                   <Sidebar />
                </div>
                <div className="col-lg-9">

                <div>
            {blon ?
                    <>
                    {getDogList.map((e)=>(
                        <div>
                             <Image src={e[1].img[0]}/>
                            <img  src={e[1].img[1]}/>
                        </div>
                    ))}
                    </> : ""}
               
                    
                </div>

                <Upload
                    // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                >
                    {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                    <img
                    alt="example"
                    style={{
                        width: '100%',
                    }}
                    src={previewImage}
                    />
                </Modal>

                <Button onClick={sendZurag}>
                    Send
                </Button>
                <Button  onClick={getZurag}>Get</Button>
                </div>
            </div>
        </div> 
    </section>
</div>
}
export default Dashboard;