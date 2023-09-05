import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import List from './components/List';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Edit from './components/Edit';
function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="" element={<List />} />
            <Route path=':id/edit' element={<Edit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
