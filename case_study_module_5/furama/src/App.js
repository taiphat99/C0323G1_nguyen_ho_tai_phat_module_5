import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/common_parts/Footer';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Navi from './components/common_parts/Navi';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ServiceList from './components/service/List';
import CustomerList from './components/customer/List';
import ContractList from './components/contract/List';
import { useState } from 'react';
import Modal from './components/common_parts/Modal';
import ServiceEditing from './components/service/Edit';
import ServiceCreating from './components/service/Create';
import CustomerEditing from './components/customer/Edit';
import CustomerCreating from './components/customer/Create';




function App() {


  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navi />
        <Routes>
          <Route path="/">
            <Route path="services/"  >
              <Route path="" element={<ServiceList />} />
              <Route path='edit' element={<ServiceEditing />} />
              <Route path='add' element={<ServiceCreating />} />
            </Route>
            <Route path="customers/">
              <Route path="" element={<CustomerList />} />
              <Route path='edit' element={<CustomerEditing />} />
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
