import { Button, Popconfirm, message } from "antd";
import axios from "../../../axios-orders";
import { useEffect } from "react";
import { CheckCircleOutlined } from '@ant-design/icons';

const Confirm  =  (props) =>{
    useEffect(()=>{
      

    },[])
    const orderFunc = () =>{ 
        const token = localStorage.getItem("idToken");
        const body = { 
            localId: props.items.localId,            
            orderHistory: {
                itemList:  props.items.orderHistory.itemList,
                orderId: props.items.orderHistory.orderId,
                status: 1,
                userInfo: props.items.orderHistory.userInfo,
                totalPrice: props.items.orderHistory.totalPrice,
            } 
        }   
          axios.patch(`orderHistory/${props.data}.json?&auth=${token}`, body).then((res)=>{  
            message.success("Амжилттай")     
            props.getHistory();  
          }).catch((err)=>{   
              message.error("Алдаа") 
          })  
    }
    return <div>
        {/* Захиалгыг Баталгаажуулах */}
   
        <Popconfirm title="Та захиалгыг баталгаажуулахдаа итгэлтэй байна уу?" onConfirm={orderFunc}> 
            <Button  icon={<CheckCircleOutlined />}></Button>
        </Popconfirm>
    </div>
}
export default Confirm;