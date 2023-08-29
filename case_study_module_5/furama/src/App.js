import logo from './logo.svg';
import './App.css';
import Navigation from './components/common_parts/Navigation';
import Footer from './components/common_parts/Footer';
import ServiceList from './components/service/List';
import CustomerList from './components/customer/List';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import ContractList from './components/contract/List';


function App() {
  return (
    <>
      <Navigation />
      {/* <ContractList /> */}
      <CustomerList/>
      {/* <ServiceList /> */}
      {/* <Footer/> */}
    </>
  )
}

export default App;
