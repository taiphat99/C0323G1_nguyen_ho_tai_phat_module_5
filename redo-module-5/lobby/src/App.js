import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/ss7/Blog';
import Create from './components/ss7/Create';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Post from './components/ss1/Post';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
