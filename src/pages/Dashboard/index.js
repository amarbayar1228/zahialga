
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
  const [fileList, setFileList] = useState([]);
  const [state, setState] = useState({
    loading: false,
});
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
   
useEffect(()=>{
    // getZurag();
    console.log("object");
},[])
const getZurag = () =>{
  console.log("state", state)

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
  console.log("state", state)
    const zurag = [];
    // fileList.forEach(element => {
    //     zurag.push(element.thumbUrl);
    // }); 
    const body = {
        img: state.imageUrl,
    }
    axios.post(`zurag.json`, body).then((res)=>{ 
        console.log("send zurag: ", res);  
    }).catch((err)=>{
        console.log("err: ", err)
    }) 
}

const onPreview = async (file) => {
let src = file.url;

if (!src) {
    src = await new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.originFileObj);

    reader.onload = () => resolve(reader.result);
    });
}

const image = new Image();
image.src = src;
const imgWindow = window.open(src);
imgWindow?.document.write(image.outerHTML);
}; 

const beforeUploadFunc = (even, b) =>{
  console.log("eeveve",even, b)
}
function getBase64(img, callback) {
  console.log("img",img);
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
const handleChange = info => {
  console.log("info",info)
  setFileList(info.fileList)
  if (info.file.status === 'done') {
      setState({loading: true});
      return;
  }
  if (info.file.status === 'uploading') { 
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
          setState({
              imageUrl,
              loading: false,
          }),
          
      );
  }
};
return<div> 

    <SidebarBreadCumb title="Хяналтын самбар"/>
       <section className="blog-details-area" style={{marginLeft: "0px"}}>
        <div className="container">
            <div className="row justify-content-center"> 
                <div className="col-lg-3 col-md-8 ">
                   <Sidebar />
                </div>
                <div className="col-lg-9">
                  <Upload onPreview={onPreview} beforeUpload={beforeUploadFunc} listType="picture-card" fileList={fileList} onChange={handleChange} >{fileList.length < 1 && "+ Image"}</Upload>
                  {blon ?
                    <>
                    {getDogList.map((e)=>(
                        <div>
                             <Image src={e[1].img}/>
                            <img  src={e[1].img[1]}/>
                        </div>
                    ))}
                    </> : ""}
                    <Button onClick={getZurag}>Get</Button>
                  <Button onClick={sendZurag}>Sent</Button>
                </div>
            </div>
        </div> 
    </section>
</div>
}
export default Dashboard;