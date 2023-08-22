import logo from './logo.svg';
import './App.css';
import Navigation from './components/common_parts/Navigation';
import Footer from './components/common_parts/Footer';
import ServiceList from './components/service/ServiceList';
import CustomerList from './components/customer/CustomerList';

function App() {
  return (
    <>
    <Navigation/>
    <CustomerList/>
    <Footer/>
    </>
  )
}

export default App;
