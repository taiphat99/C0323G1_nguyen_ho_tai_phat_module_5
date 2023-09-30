import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import { Provider } from 'react-redux';
import store from './components/redux/redux/Store';
import List from './components/test/List';
import Add from './components/test/Add';


function App() {
  return (
    <>

      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<List />} />
            <Route path="add" element={<Add />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
