import { Button, Modal } from "antd";
import { useState } from "react";
import { EyeOutlined } from '@ant-design/icons';
const Items = (props) =>{
const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
    return<div>
    <Button type="dashed" onClick={showModal} icon={<EyeOutlined />}>

      </Button>
      <Modal title="Бараанууд" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <div> 
             {props.items.map((e)=>(
                <div style={{display: "flex",  border: "1px solid #ccc", margin: "5px", padding: "5px", borderRadius: "10px"}}> 
                    <div style={{marginRight: "15px"}}> <img src={e.img} width={100} height={100}/></div>
                    <div> 
                        <div>Барааны нэр: {e.title} </div> 
                        <div>Тоо ширхэг: {e.cnt} </div>
                        <div>Дэлгэрэнгуй: {e.description} </div>
                        <div>Үнэ: {e.price} </div>
                    </div>  
                </div>
             ))} 
        </div>
      </Modal>
    </div>
}
export default Items;