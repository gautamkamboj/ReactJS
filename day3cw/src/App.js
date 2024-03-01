import './App.css';
import './components/Nav';
import Nav from './components/Nav';
import First from './components/First';
import Second from './components/Second';
import Cards from './components/Cards';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Nav />
      <First/>
      <Second/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
