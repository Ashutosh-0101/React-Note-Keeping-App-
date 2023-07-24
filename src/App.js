import logo from './logo.svg';
import './App.css';
import { NotePage } from './modules/notes/pages/NotePage';
import { DashBoard } from './modules/dashboard/pages/DashBoard';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './shared/store/Store';
//import dotenv from "dotenv";

function App() {
  //dotenv.config();
  return (
    <Provider store={Store}>
    <BrowserRouter>
    <DashBoard/>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
