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
import ShopPages from './ShopPages'
function HometwoPage() {
	useEffect(()=>{ 
		console.log("app"); 
	},[]); 
  return (
	 <main> 
		{/* <HomeTwoSlider/> */}
		{/* <Find/>     */}
    <ShopPages />
		{/* <AdoptionShop/> */}
		{/* <BreederAdoption/> */}
		{/* <BreedServices/> */}
		{/* <AdoptionPuppies/> */}
		{/* <Faq afterElment="faq-area"/> */}
		{/* <Brand/>  */}
		{/* <BlogsHome/> */}
		{/* <Newsletter/> */}
	 </main>
  )
}

export default HometwoPage;
