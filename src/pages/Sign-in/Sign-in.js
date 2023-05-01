import axios from 'axios';
import { useState } from 'react'; 
import { useHistory } from 'react-router-dom'

const SignIn = () =>{
const history = useHistory();
const [getForm, setForm] = useState({email: '', password: ''});
const [getMsj, setMsj] = useState(false);
const Send = () =>{   
    if(getForm.email === '' || getForm.password === ''){
        setMsj("Емайл болон Нууц үгээ оруулна уу!");
    }else{
        setMsj(true);
        const body = {
            email: getForm.email,
            password: parseInt(getForm.password),
            returnSecureToken: true
        }
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDH453cwnl9H3yp0QrYeXG_hnoM4zHn5eM", body).then((res)=>{ 
            if(res.data.registered === true){ 
                const expIn =  res.data.expiresIn;
                const expireDate = new Date(new Date().getTime() + parseInt(expIn) * 1000); 
                localStorage.setItem("idToken",  res.data.idToken)
                localStorage.setItem("localId",  res.data.localId) 
                localStorage.setItem("expireDate", expireDate)
                localStorage.setItem("refreshToken",  res.data.refreshToken) 
                refreshToken(expIn * 1000)
                history.push("/"); 
            }else{ 
                // message.error(res.data.errors[0].message)
            }
        }).catch((err)=>{
            if(err.response.data.error.message === "EMAIL_NOT_FOUND"){
                setMsj("Имэйл олдсонгүй!");
            }else if(err.response.data.error.message === "INVALID_PASSWORD"){
                setMsj("Нууц үг буруу байна!");
            }
        })  
    } 
}
const refreshToken = async(expIn) =>{ 
    await setTimeout(()=>{  
        localStorage.removeItem("localId");
        localStorage.removeItem("idToken");
        localStorage.removeItem("expiresIn");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("expireDate");
        history.push("/");
    },expIn)
}
 
return<section className="adoption-shop-area">
        <div className="container">
            <div className="row justify-content-center"> 
                <div className="col-lg-5 col-md-8">
                    <div className="contact-title mb-20"> 
                        {/* <div className="section-title text-center">
                            <div className="section-icon"><img src="img/icon/pawprint.png" alt="" /></div>
                        </div> */}
                        <div style={{display: "flex"}}> 
                            <h2 className="title">Нэвтрэх<span> \ </span></h2>
                            <h2 className="title" style={{color: "#ccc", marginLeft: "10px", cursor: "pointer"}} onClick={()=>history.push("/sign-up")}> Бүртгүүлэх<span></span></h2>
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
                                <input type="password" id="name" placeholder="Нууц үгээ оруулна уу..." onChange={(e)=> setForm({...getForm, password: e.target.value})}/>
                            </div>  
                            <h5 class="sub-title" style={{color: "red"}}>{getMsj ? getMsj : ""}</h5>
                            <button onClick={Send} className="btn">Нэвтрэх<img src="img/icon/w_pawprint.png" alt=""/></button>
                        </form>
                    </div> 
                </div>
            </div>
        </div> 
</section>
}
export default SignIn;