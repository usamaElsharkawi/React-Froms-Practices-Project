import Header from './components/Header.jsx';
// import Login from './components/ControlledLoginComponent.jsx'; //Controlled form with states
//import Login from './components/UncontrolledLoginComponent.jsx'; //Uncontrolled form with refs
import Signup from "./components/Signup.jsx"

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Login/> */}
        <Signup />
      </main>
    </>
  );
}

export default App;
