
import {HashRouter as Router, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';  
import ContactPage from './pages/ContactPage' 
import ShopPages from './pages/ShopPages' 
import HometwoPage from './pages/HometwoPage'
import ScrollToTopRoute from './ScrollToTopRoute'  
import SignIn from './pages/Sign-in/Sign-in';
import SignUp from './pages/Sign-up'; 
import Dashboard from './pages/Dashboard';
import AddItem from './pages/add-item'; 
import {ConfigProvider } from "antd";
import Cart from './pages/Cart';
import Checkout from './pages/Check-out';
import OrderHistory from './pages/order-history';
import Success from './pages/success';
function App() { 
  return (
    <ConfigProvider theme={{
      token: {
          colorPrimary: "#f04336"
      }
    }}>
      
    <div className='app'> 
    <Router>
        <Header/>
        <Switch>
            <ScrollToTopRoute exact={true} path='/'>
              <HometwoPage />
            </ScrollToTopRoute>
            {/* <ScrollToTopRoute exact={true} path='/doglist'>
              <DogList/>
            </ScrollToTopRoute> */}
            <ScrollToTopRoute exact={true} path='/order-history'>
              <OrderHistory />
            </ScrollToTopRoute>
            <ScrollToTopRoute exact={true} path='/success'>
              <Success />
            </ScrollToTopRoute>
            <ScrollToTopRoute exact={true} path='/checkout'>
              <Checkout />
            </ScrollToTopRoute>
            <ScrollToTopRoute exact={true} path='/cart'>
              <Cart />
            </ScrollToTopRoute>
            <ScrollToTopRoute exact={true} path='/sign-in'>
              <SignIn />
            </ScrollToTopRoute> 
            <ScrollToTopRoute exact={true} path='/dashboard'>
              <Dashboard />
            </ScrollToTopRoute>
            <ScrollToTopRoute exact={true} path='/add-item'>
              <AddItem />
            </ScrollToTopRoute>
            <ScrollToTopRoute exact={true} path='/sign-up'>
              <SignUp />
            </ScrollToTopRoute> 
            <ScrollToTopRoute exact={true} path='/contacts'>
              <ContactPage/>
            </ScrollToTopRoute>
            {/* <ScrollToTopRoute exact={true} path='/blogs'>
            <BlogPage/>
            </ScrollToTopRoute>
            <ScrollToTopRoute exact={true} path='/blog-details'>
              <BlogDetailsPage/>
            </ScrollToTopRoute> */}
            <ScrollToTopRoute exact={true} path='/shop'>
              <ShopPages/>
            </ScrollToTopRoute>
{/*             
            <ScrollToTopRoute exact={true} path='/shop-details'>
              <ShopDetailsPage/>
            </ScrollToTopRoute>
            <ScrollToTopRoute exact={true} path='/breeder'>
              <BreederPage/>
            </ScrollToTopRoute>
            <ScrollToTopRoute exact={true} path='/breeder-details'>
              <BreederDetailsPage/>
            </ScrollToTopRoute> */} 
        </Switch>
        <Footer/>
    </Router>
  
    </div>
  </ConfigProvider>
  );
}

export default App;
   