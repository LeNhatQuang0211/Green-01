
import { Routes, Route, Link } from "react-router-dom";
import Organizations from "./pages/Organizations";
import Users from './pages/Users';
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";
import './App.css';



function App() {

  return (
    
    <div>
      <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
            <div className="container">
              <a href="/" className='d-flex align-item-centermb-3 mb-md-0 me-md-auto text-dark text-decoration-none'>
                <Link to="/">
                  <span className="fs-4 mx-4">Green Academy</span>
                </Link>
                <Link to="/users">
                  <span className="fs-4 mx-4">Users</span>
                </Link>
                <Link to="/organizations">
                  <span className="fs-4 mx-4">Organizations</span>
                </Link>
                
              </a>
            </div>
      </header>
      <main>
         <div className='container App'>
           
          <Routes>
            <Route path="/organizations" element={<Organizations />} />
            <Route path="/users" element={<Users />} />
            <Route path="/user/create" element={<CreateUser />} />
            <Route path="/user/:id/edit" element={<EditUser />} />
          </Routes>
          
          </div>
      </main>
      
      
     <footer></footer>
    </div>
)
}
export default App;
