import Navbar from './Navbar';
import Home from './Home';
import Example from './Example';


function App() {


  return (
    <div className='App'>
      <Navbar />
      <div className = 'content'>
        <Home />  
        <Example />  

      </div>
    </div>
    
  );
}

export default App;
