import logo from './logo.svg';
import './App.css';

import {Routes,Route} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { PostDetails } from './pages/PostDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/post/:postId' element={<PostDetails/>}/>
      </Routes>
    </div>
  );
}


export default App;
