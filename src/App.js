import './App.css';
import Navbar from './components/Navbar';
import Textbar from './components/Textbar';

function App() {
  return (
       <>
            <Navbar brand="TextUtlis" home="Home" about="About" searchbar="Search" />
            {/* <Navbar brand="Ap" home="Home" about="About" searchbar="Search"/> */}
            <div className="container my-5">
            <Textbar heading="Enter Your Text Here" />
            </div>
           
       </>
  );
}

export default App;
