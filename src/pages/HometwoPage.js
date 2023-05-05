import React, { useEffect } from 'react'
import HomeTwoSlider from '../components/hometwo/HomeTwoSlider'
import Find from '../components/Find'
import BreederAdoption from '../components/breeder/BreederAdoption'
import AdoptionPuppies from '../components/adoptions/AdoptionPuppies'
import Faq from '../components/Faq'
import Brand from '../components/Brand'
import Newsletter from '../components/NewsLetter'
import BlogsHome from '../components/BlogsHome'
import BreedServices from '../components/BreedServices' 
import AdoptionShop from '../components/AdoptionShop' 
function HometwoPage() {
	useEffect(()=>{
		// refreshToken();
		console.log("app");
    
	},[]);
		// const refreshToken = async () =>{
    //     const expireDate = new Date(localStorage.getItem("expireDate"));
    //     if(expireDate > new Date()){
    //         const expIn = expireDate.getTime() - new Date().getTime(); 
    //         await setTimeout(()=>{ 
    //             history.push("/");
    //         },expIn)
    //     } else {
    //         const body = {
    //             grant_type: "refresh_token",
    //             refresh_token: localStorage.getItem("refreshToken")
    //         }
    //         axios.post("https://securetoken.googleapis.com/v1/token?key=AIzaSyAA_wX14i2xQr-owSd7-iAxcp4J3qRdgMI", body).then((res)=>{ 
    //             const expIn =  res.data.expires_in; 
    //             const expireDate = new Date(new Date().getTime() + parseInt(expIn) * 1000); 
    //             localStorage.setItem("idToken",  res.data.id_token)
    //             localStorage.setItem("localId",  res.data.user_id) 
    //             localStorage.setItem("expireDate", expireDate)
    //             localStorage.setItem("refreshToken",  res.data.refresh_token) 
    //             router.push("/");
    //         }).catch((err)=>{
    //             console.log("err", err)
    //         })
    //     }
    // }
  return (
	 <main> 
		<HomeTwoSlider/>
		<Find/>    
		<AdoptionShop/>
		{/* <BreederAdoption/> */}
		{/* <BreedServices/> */}
		<AdoptionPuppies/>
		<Faq afterElment="faq-area"/>
		<Brand/> 
		{/* <BlogsHome/> */}
		<Newsletter/>
	 </main>
  )
}

export default HometwoPage;
