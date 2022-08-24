
import { Routes, Route } from "react-router-dom";
import Organizations from "./pages/Organizations";
import Users from './pages/Users';
import './App.css';



function App() {

  return (
    
    <div>
      <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
            <div className="container">
              <a href="/" className='d-flex align-item-centermb-3 mb-md-0 me-md-auto text-dark text-decoration-none'>
                <span className="fs-4">Green Academy</span>
              </a>
            </div>
      </header>
      <main>
         <div className='container App'>
         <Routes>
            <Route path="/organizations" element={<Organizations />} />
            <Route path="/users" element={<Users />} />
            
          </Routes>
          
          </div>
      </main>
      
      
     <footer></footer>
    </div>
)
}
export default App;
