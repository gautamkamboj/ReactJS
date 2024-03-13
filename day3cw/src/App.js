import './App.css';
import './components/Nav';
import Nav from './components/Nav';
import First from './components/First';
import Second from './components/Second';
import Cards from './components/Cards';
import Footer from './components/Footer';
import  Quotes  from './components/Quotes';
import Restaurants from './Restaurants';
function App() {

  
  return (
    <div className="App">
      <Nav />
      <Restaurants/>
       {/*<section>{
        quoteData.map((elem,idx) => {
          return(
            <Quotes para={elem.quote} author={elem.author}/>
          ) 
          })
      }
      </section>
      <First/>
      <Second/>
      <Cards/> */}
      <Footer/>
    </div>
  );
}

export default App;
