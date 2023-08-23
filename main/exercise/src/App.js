
import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import SignUp from './components/ss5/SignUp';
import 'react-toastify/dist/ReactToastify.css';
import HealthDeclaration from './components/ss5/HealthDeclaration';
import 'bootstrap/dist/css/bootstrap.css'


function App() {
  return (
    <>
    {/* <Contract/> */}
    <HealthDeclaration/>
    <ToastContainer />
    </>
  );
}

export default App;
