import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/common_parts/Footer';
import Navi from './components/common_parts/Navi';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerList from './components/customer/List';
import ContractList from './components/contract/List';
import CustomerEditing from './components/customer/Edit';
import CustomerCreating from './components/customer/Create';
import ServiceList from './components/service/List';
import ServiceCreate from './components/service/Create';


function App() {


  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navi />
        <Routes>
          <Route path='/'>
            <Route path='services/'>
              <Route path='' element={<ServiceList />} />
              <Route path='add' element={<ServiceCreate />} />
            </Route>
            <Route path="customers/">
              <Route path="" element={<CustomerList />} />
              <Route path=':id/edit' element={<CustomerEditing />} />
              <Route path='add' element={<CustomerCreating />} />
            </Route>
          </Route>
          <Route path="contracts/" element={<ContractList />} >
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
