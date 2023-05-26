import React, { useEffect } from 'react';
import ShopBreadcumb from '../components/ourshop/ShopBreadcumb'
import ShopArea from '../components/ourshop/ShopArea'
import { useHistory } from 'react-router-dom';

function ShopPages(){
	const history = useHistory();
	useEffect(()=>{
		const localId = localStorage.getItem("localId");
		if(localId){

		}else{
			history.push("/sign-in")
		}
	})
	return(
      <main>
	  	<ShopBreadcumb/>
		<ShopArea/>
	  </main>
	)
}
export default ShopPages;
