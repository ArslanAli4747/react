
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Typo from './components/typographi/Typo';
function App() {
  return (
    <>
    <Router>
    <div className="App ">
      <Sidebar/>
      <Routes>
        <Route path='/typography' element={<Typo/>}/>
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
