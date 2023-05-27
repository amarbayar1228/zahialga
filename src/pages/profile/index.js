import { Button, Image, Spin, Modal, Upload, Input, Form, InputNumber, message } from "antd"; 
import SidebarBreadCumb from "../../components/sidebar/sidebarBreadCumb";
import css from "./style.module.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../axios-orders";
import { PlusOutlined, EditOutlined } from '@ant-design/icons';  
const { TextArea } = Input;
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const Profile = () =>{
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [getInfo, setInfo] = useState({});
    const [fileList, setFileList] = useState([]);
      
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [loadingS, setLoadingS] = useState(false);
    const [cateList, setCateList] = useState();
    const [dataId, setDataId] = useState(0);
    const handleCancelImg = () => setPreviewOpen(false);
    const handlePreview = async (file) => { 
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      setPreviewImage(file.url || file.preview);
      setPreviewOpen(true);
      setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const handleChange = (file) => {  
        setFileList(file.fileList) 
    };
    
    function getBasee64(img, callback) { 
      const reader = new FileReader();
      reader.addEventListener('load', () => callback(reader.result));
      reader.readAsDataURL(img); 
    }
      
    const uploadButton = (
      <div> <PlusOutlined /> <div style={{marginTop: 8}}>Зураг</div></div>
    );
    const showModal = () => {
        console.log("data: ", data);
        if(data.img){
          if(data.img.length === 1){
            setFileList([
                {
                uid: '-1',
                name: 'image.png',
                status: 'done',
                thumbUrl:  data.img[0],
                }, 
            ]);
          }
        } 
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    useEffect(()=>{ 
        getProfile();
    },[])
    const getProfile = () =>{
        setLoading(true)
        const token = localStorage.getItem("idToken");
        const localId = localStorage.getItem("localId");
        axios.get(`profile.json?orderBy="localId"&equalTo="${localId}"&auth=${token}`).then((res)=>{  
            const data = Object.entries(res.data).reverse();   
            setData(data[0][1].values); 
            setDataId(data[0])
            }).catch((err)=>{
                console.log("err: ", err)
            }).finally(()=>{
                setLoading(false)
        }) 
    }
    const onFinish = (values) => {   
        setLoadingS(true);
        const token = localStorage.getItem("idToken");
        const localId = localStorage.getItem("localId")
        const img = [];  
        fileList.forEach(element => {   
          if(element.originFileObj){ 
            getBasee64(element.originFileObj, imageUrl =>
              img.push(imageUrl), 
           );
          }else{ 
            img.push(element.thumbUrl)
          } 
        });
        if(fileList.length === 1 ){
             setTimeout(() => { 
            const body = {
                localId: localId,
                values: {
                          img: img,
                          lastName: values.lastName,
                          firstName: values.firstName,
                          email: values.email, 
                          isAdmin: data.isAdmin === 0 ? 0 : 1, 
                          phone: values.phone,
                          address: values.address
                        }
            }  
            console.log("body: ", body); 
          axios.patch(`profile/${dataId[0]}.json?&auth=${token}`, body).then((res)=>{  
            message.success("Амжилттай")  
            if(res.data.name) 
              message.success("Амжилттай") 
              setLoadingS(false);
              getProfile();
              setIsModalOpen(false);
            
          }).catch((err)=>{  
              setLoadingS(false);
              message.error("Алдаа")
              setIsModalOpen(false);
          }) 
        }, 800); 
        }else{
            message.error("Зураг оруулна уу!!")
            setLoadingS(false);
        }
       
       
    
      };
      const logout  = () =>{ 
        localStorage.removeItem("idToken")
        localStorage.removeItem("localId")
        localStorage.removeItem("refreshToken")
        localStorage.removeItem("expireDate")
        document.location.replace("/");
    }
    return<div>
        <SidebarBreadCumb title="Профайл" />
       <section className="blog-details-area" style={{marginLeft: "0px"}}>
        <div className="container">
            <div className="row justify-content-center"> 
            {loading ? <Spin size="lage" style={{display: "flex", justifyContent: "center", marginTop: "50px"}}/> : 
               
                <>
                 {data ?
                    <div className={css.Content}>
                        <div className={css.ZuragCont}> 
                            <div style={{borderRadius: "10px", border: "1px solid #ccc"}}>
                                <Image src={data.img ? data.img[0] : "img/user2.png"} width={200}/>
                            </div>
                            <div style={{textAlign: "center", marginTop: "10px"}}>{data.email}</div>
                            <div style={{display: "flex", justifyContent: "center", marginTop: "10px"}}><Button onClick={logout}>Гарах</Button></div>
                        </div>
                        <div className={css.description}>
                            <div className={css.Title}><span style={{fontWeight: "700", marginRight: "10px"}}>Овог:</span>{data.lastName}</div> 
                            <div className={css.Title}> <span style={{fontWeight: "700", marginRight: "10px"}}>Нэр:</span> {data.firstName}</div>  
                            <div className={css.Title}> <span style={{fontWeight: "700", marginRight: "10px"}}>Имайл:</span> {data.email}</div>  
                            <div className={css.Title}><span style={{fontWeight: "700" , marginRight: "10px"}}>Утасны дугаар:</span> {data.phone}</div> 
                            <div className={css.Title}><span style={{fontWeight: "700" , marginRight: "10px"}}>Хаяг байршил:</span>{data.address}</div> 
                            <li className="header-btn" style={{marginTop: "10px"}}><Link to="/profile" className="btn" onClick={showModal}>Засах </Link></li> 
                        </div>
                        <Modal title="Мэдээлэл засах" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
                            <div>
                            <Form  size="middle" initialValues={{ remember: true,
                                lastName: data.lastName,  
                                firstName: data.firstName,
                                phone: data.phone,
                                email: data.email,
                                address: data.address,  
                                img:  data.img ? data.img[0] : "",
                                }}  onFinish={onFinish} >
                                    <Upload
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    listType="picture-circle"
                                    fileList={fileList}
                                    onPreview={handlePreview}
                                    onChange={handleChange} 
                                    >
                                    {fileList.length >= 1 ? null : uploadButton}
                                </Upload> 
                                <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancelImg}>
                                    <img alt="example"style={{width: '100%',}}src={previewImage}/>
                                </Modal>  
                                <Form.Item label="Овог" name="lastName" rules={[{ required: true, message: 'Овог оо оруулна уу!'}]}>
                                        <Input placeholder="Овог" />
                                </Form.Item> 
                                <Form.Item label="Нэр" name="firstName" rules={[{ required: true, message: 'Нэр ээ оруулна уу!'}]}>
                                    <Input placeholder="Нэр" />
                                </Form.Item> 
                                <Form.Item label="Утас" name="phone" rules={[{ required: true, message: ' Утас aa оруулна уу!'}]}>
                                    <Input  placeholder="Утас"   style={{width: "100%"}}/>
                                </Form.Item> 
                                <Form.Item label="Имайл" name="email" rules={[ { required: true, message: 'Имайл хаяг аа оруулна уу!'}]}>
                                 <TextArea placeholder="Имайл" showCount/>
                                </Form.Item>  
                                <Form.Item label="Хаяг" name="address" rules={[ { required: true, message: 'Хаяг байршил аа оруулна уу!'}]}>
                                 <TextArea placeholder="Хаяг байршил аа оруулна уу!" showCount/>
                                </Form.Item>   
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button" style={{width: "100%"}} disabled={loadingS} loading={loadingS} size="large"> Хадгалах </Button> 
                                </Form.Item>
                                </Form>
                            </div>
                        </Modal>
                    </div>
                : null }
                </> 
            }
            </div>
        </div> 
    </section>
    </div>
}
export default Profile;