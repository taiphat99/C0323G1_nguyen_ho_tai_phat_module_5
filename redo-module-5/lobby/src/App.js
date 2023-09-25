import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Create from './components/main/Create';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import List from './components/redux/components/List';
import { Provider } from 'react-redux';
import store from './components/redux/redux/Store';


function App() {
  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" >
              <Route index element={<List />} />
              <Route path="create" element={<Create />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
