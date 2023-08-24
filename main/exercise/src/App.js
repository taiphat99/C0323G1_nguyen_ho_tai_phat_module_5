
import { ToastContainer, toast } from 'react-toastify';
import './App.css';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css'
import Book from './components/ss7/book/Book';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookAdding from './components/ss7/book/BookAdding';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Book />} />
          <Route path="add" element={<BookAdding />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
