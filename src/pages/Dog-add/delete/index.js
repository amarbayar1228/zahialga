import { Button, Popconfirm, message } from "antd"
import { DeleteOutlined } from '@ant-design/icons';
import axios from "../../../axios-orders";  

const DeleteDog = (props) =>{  
    const deleteFunc = () =>{  
        const token = localStorage.getItem("idToken"); 
        axios.delete(`dogList/${props.data}.json?&auth=${token}`).then((res)=>{  
          message.success("deleted") 
          props.getDogList();
        }).catch((err)=>{ 
            props.getRegistrationList();
        }) 
    }
    return<div> 
        <Popconfirm title="Sure to delete?" onConfirm={deleteFunc}>
          <Button type="primary" size="small" icon={<DeleteOutlined style={{display: "block"}}/>} danger></Button>
        </Popconfirm>
    </div>
}
export default DeleteDog