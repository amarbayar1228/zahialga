import { Button, Modal } from "antd";
import axios from "../../../axios-orders";
import { useState } from "react";
import { UserOutlined } from '@ant-design/icons';


const UserInfo = (props) =>{ 
const [isModalOpen, setIsModalOpen] = useState(false);
const [profile, setProfile] = useState();
const showModal = () => { 
setIsModalOpen(true); 
} 
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

return <div> <Button type="primary" onClick={showModal} icon={<UserOutlined />}>
         
      </Button>
      <Modal title="Хэрэглэгчийн мэдээлэл" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <div> 
            {props.items ? 
                <div>
                    <div>Овог: {props.items.orderHistory.userInfo.firstName} </div>
                    <div> Нэр: {props.items.orderHistory.userInfo.lastName}</div>
                    <div>Имэйл: {props.items.orderHistory.userInfo.email} </div>
                    <div> Утасны дугаар: {props.items.orderHistory.userInfo.phone}</div>
                    <div>Гэрийн хаяг: {props.items.orderHistory.userInfo.address} </div>
                </div>

            : null}
             {/* {props.items.map((e)=>(
                <div style={{border: "1px solid #ccc", margin: "5px", padding: "5px", borderRadius: "10px"}}> 
                    <div>Барааны нэр: {e.title} </div>
                    <div>Тоо ширхэг: {e.cnt} </div>
                    <div>Дэлгэрэнгуй: {e.description} </div>
                    <div>Үнэ: {e.price} </div>
                </div>
             ))}  */}
        </div>
      </Modal>
</div> 
}
export default UserInfo;