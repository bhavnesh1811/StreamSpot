
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './Components/AllRoutes';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
