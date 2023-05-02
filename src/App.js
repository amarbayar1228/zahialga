
import {HashRouter as Router, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'; 
import DogList from './pages/DogList';
import AdoptionsPages from './pages/AdoptionsPages'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import BlogDetailsPage from './pages/BlogDetailsPage'
import ShopPages from './pages/ShopPages'
import ShopDetailsPage from './pages/ShopDetailsPage'
import BreederPage from './pages/BreederPage'
import BreederDetailsPage from './pages/BreederDetailsPage'
import HometwoPage from './pages/HometwoPage'
import ScrollToTopRoute from './ScrollToTopRoute'  
import SignIn from './pages/Sign-in/Sign-in';
import SignUp from './pages/Sign-up'; 
import Dashboard from './pages/Dashboard';
import AddItem from './pages/add-item';
import DogAdd from './pages/Dog-add';
import {ConfigProvider } from "antd";
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
            <ScrollToTopRoute exact={true} path='/doglist'>
              <DogList/>
            </ScrollToTopRoute>
            <ScrollToTopRoute exact={true} path='/sign-in'>
              <SignIn />
            </ScrollToTopRoute>
            <ScrollToTopRoute exact={true} path='/dog-add'>
              <DogAdd />
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
            <ScrollToTopRoute exact={true} path='/adoption'> 
              <AdoptionsPages/>
            </ScrollToTopRoute>
            <ScrollToTopRoute exact={true} path='/contacts'>
              <ContactPage/>
            </ScrollToTopRoute>
            <ScrollToTopRoute exact={true} path='/blogs'>
            <BlogPage/>
            </ScrollToTopRoute>
            <ScrollToTopRoute exact={true} path='/blog-details'>
              <BlogDetailsPage/>
            </ScrollToTopRoute>
            <ScrollToTopRoute exact={true} path='/shop'>
            <ShopPages/>
            </ScrollToTopRoute>
            <ScrollToTopRoute exact={true} path='/shop-details'>
              <ShopDetailsPage/>
            </ScrollToTopRoute>
            <ScrollToTopRoute exact={true} path='/breeder'>
              <BreederPage/>
            </ScrollToTopRoute>
            <ScrollToTopRoute exact={true} path='/breeder-details'>
              <BreederDetailsPage/>
            </ScrollToTopRoute>

            <ScrollToTopRoute exact={true} path='/home-two'>
              <HometwoPage/>
            </ScrollToTopRoute>
        </Switch>
        <Footer/>
    </Router>
  
    </div>
  </ConfigProvider>
  );
}

export default App;
   