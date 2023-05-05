import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const SignUp = () =>{   
const history = useHistory();
const [getForm, setForm] = useState({email: '', password1: '', password2: ''});
const [getMsj, setMsj] = useState(false);

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
                axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDH453cwnl9H3yp0QrYeXG_hnoM4zHn5eM", body).then((res)=>{
                     history.push("/sign-in")
                     
                }).catch((err)=>{
                    console.log("err: ", err)
                })
        }else{
            setMsj("Нууц үг хоорондоо таарахгүй байна!");
        }
        
    } 
}
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
            <div className="contact-wrap-content"> 
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
            </div> 
        </div>
    </div>
</div> 
</section> 
}
export default SignUp;