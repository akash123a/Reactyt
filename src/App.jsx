
import 'bootstrap/dist/css/bootstrap.min.css';
import CountNum from "./components/countNum"
import Navbar from "./components/Navbar"
import User from "./components/user"
import SearchExample from './components/SearchExample';
    
function App() {
  return (
    <>

     <Navbar/>
    <h1>Hello Vite + React!</h1>
    <SearchExample/>

    <p>This is my first React App</p>
    <p>Let's start learning React</p>
    <p>It's really awesome</p>

      <CountNum/>
      <User/>
    </>
  )
}

export default App
