import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios2 from "../../axios-orders";
import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
    message,
  } from 'antd';
const { Option } = Select;
const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
};
const SignUp = () =>{   

const history = useHistory();
const [getForm, setForm] = useState({email: '', password1: '', password2: ''});
const [getMsj, setMsj] = useState(false);
const [form] = Form.useForm();
const [autoCompleteResult, setAutoCompleteResult] = useState([]);
const onFinish = (values) => {
  console.log('Received values of form: ', values); 
    const token = localStorage.getItem("idToken");
    const body = {
        email: values.email,
        password: values.password,
        returnSecureToken: true
    }
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBh7ZZbLjzUSTmVC-lNk4I3svpZSNmqvHE", body).then((res)=>{
        const body2 = {
            localId: res.data.localId,
            values: {nickName: values.nickName,
                    isAdmin: 0,
                    phone: values.password,
                    }
        } 
            axios2.post(`profile.json?&auth=${res.data.idToken}`, body2).then((res)=>{
                if(res.data.name);
                message.success("Амжилттай")  
                history.push("/sign-in")
            }).catch((err)=>{ 
                message.error("Амжилтгүй") 
            }) 
        }).catch((err)=>{
            console.log("err: ", err)
        }) 
       
};
const Send = () =>{   
    if(getForm.email === '' || getForm.password1 === '' || getForm.password2 === ''){
        setMsj("Емайл болон Нууц үгээ оруулна уу!");
    }else{
        if(getForm.password1 === getForm.password2){
            setMsj(true);
            const body = {
                email: getForm.email,
                password: getForm.password1,
                returnSecureToken: true
            }
                axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBh7ZZbLjzUSTmVC-lNk4I3svpZSNmqvHE", body).then((res)=>{
                     history.push("/sign-in")
                     
                }).catch((err)=>{
                    console.log("err: ", err)
                })
        }else{
            setMsj("Нууц үг хоорондоо таарахгүй байна!");
        }
        
    } 
}
const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 100,
        }}
      >
        <Option value="976">+976</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  ); 
 
return<section className="adoption-shop-area">
<div className="container">
    <div className="row justify-content-center"> 
        <div className="col-lg-5 col-md-8">
            <div className="contact-title mb-20">  
                <div style={{display: "flex"}}> 
                    <h2 className="title">Бүртгүүлэх <span> \ </span></h2>
                    <h2 className="title" style={{color: "#ccc", marginLeft: "10px", cursor: "pointer"}} onClick={()=>history.push("/sign-in")} > Нэвтрэх<span></span></h2>
                </div>
            </div>
<Form  
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      style={{
        maxWidth: 600,
      }}
      size="large"
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="confirm" label="Confirm Password" dependencies={['password']} hasFeedback
        rules={[{required: true, message: 'Please confirm your password!'},
          ({ getFieldValue }) => ({validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }return Promise.reject(new Error('The two passwords that you entered do not match!'));}})]}>
        <Input.Password />
      </Form.Item>

      <Form.Item name="nickname" label="Nickname" tooltip="What do you want others to call you?" rules={[{required: true, message: 'Please input your nickname!', whitespace: true}]}>
        <Input />
      </Form.Item> 
      <Form.Item name="phone" label="Phone Number" rules={[{required: true,message: 'Please input your phone number!'}]}>
        <Input addonBefore={prefixSelector} style={{width: '100%'}}/>
      </Form.Item>  
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Бүртгүүлэх
        </Button>
      </Form.Item>
    </Form>
            {/* <div className="contact-wrap-content"> 
                <form className="contact-form"> 
                    <div className="form-grp">
                        <label htmlFor="email">Емайл хаяг <span>*</span></label>
                        <input type="email" id="email" placeholder="info.example@.com" onChange={(e)=> setForm({...getForm, email: e.target.value})} />
                    </div> 
                    <div className="form-grp">
                        <label htmlFor="name">Нууц үг <span>*</span></label>
                        <input type="password" id="name" placeholder="Шинэ нууц үгээ оруулна уу..." onChange={(e)=> setForm({...getForm, password1: e.target.value})}/>
                    </div>  
                    <div className="form-grp">
                        <label htmlFor="name">Давтах нууц үг <span>*</span></label>
                        <input type="password" id="name" placeholder="Нууц үгээ давтаж оруулна уу..." onChange={(e)=> setForm({...getForm, password2: e.target.value})}/>
                    </div> 
                    <h5 class="sub-title" style={{color: "red"}}>{getMsj ? getMsj : ""}</h5>
                   
                </form>
                <button onClick={Send} className="btn">Бүртгүүлэх<img src="img/icon/w_pawprint.png" alt=""/></button>
            </div>  */}
        </div>
    </div>
</div> 
</section> 
}
export default SignUp;