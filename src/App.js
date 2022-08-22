
import './App.css';
import HomeTest05 from './components/HomeTest05';




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
         <div className='container'>
           <HomeTest05 />
          </div>
      </main>
      
      
     <footer></footer>
    </div>
)
}
export default App;
