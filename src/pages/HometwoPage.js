import React, { useEffect } from 'react' 
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
