
import { ToastContainer, toast } from 'react-toastify';
import './App.css';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Book} from './components/ss7/book/Book';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookAdding from './components/ss7/book/BookAdding';
import Contract from './components/ss5/Contact';
import ModalService from './components/modals/services/ModalService';
import TestModal from './components/ss7/book/TestModal';
import ModalRoot from './components/modals/components/ModalRoot';
import BookEdit from './components/ss7/book/BookEdit';
import { Provider } from 'react-redux';
import Login from './components/ss9/components/Login';
import User from './components/ss9/components/User';
import store from './components/ss9/redux/Store';
import ClickMe from './components/ss9/components/ClickMe';


function App() {

// const addModal = () => {
//   ModalService.open(TestModal);
// }

  return (
    <>

{/* 
<div className='App'>
    <ModalRoot/>
    <button onClick={addModal} className='btn btn-outline-primary m-4'> Open Modal</button>
</div>
 */}




 <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClickMe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<User />} />
        </Routes>
      </BrowserRouter>
    </Provider>

      {/* <ToastContainer /> */}
    </>
  );
}

export default App;
