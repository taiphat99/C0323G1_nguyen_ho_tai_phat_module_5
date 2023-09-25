import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Blog from './components/redo-module-5/ss1/Blog';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {ToastContainer} from "react-toastify";
import ClickMe from "./components/ss9/components/ClickMe";
import Login from "./components/ss9/components/Login";
import User from "./components/ss9/components/User";
import store from "./components/ss9/redux/Store";


function App() {

  // const addModal = () => {
  //   ModalService.open(TestModal);
  // }

  return (
    <>
      {/*<Blog />*/}



 {/*
// <div className='App'>
//     <ModalRoot/>
//     <button onClick={addModal} className='btn btn-outline-primary m-4'> Open Modal</button>
// </div>
//  */}



       <Provider store={store}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClickMe />} />
           <Route path="/login" element={<Login />} />
           <Route path="/users" element={<User />} />
          </Routes>
        </BrowserRouter>
       </Provider>
       <ToastContainer />
    </>
  );
}

export default App;
