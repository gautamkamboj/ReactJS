import './App.css';
import './components/Nav';
import Nav from './components/Nav';
import First from './components/First';
import Second from './components/Second';
import Cards from './components/Cards';
import Footer from './components/Footer';
import  Quotes  from './components/Quotes';
function App() {

  const quoteData = [{
    "quote":"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
    "author":"Adam Scott"
  },{
    "quote":"Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
    "author":"Adelle Davis"
  },{
    "quote":"We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",
    "author":"Adelle Davis"
  },{
    "quote":"Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet.",
    "author":"Albert Einstein"
  },{
    "quote":"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
    "author":"Adam Scott"
  },{
    "quote":"Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
    "author":"Adelle Davis"
  },{
    "quote":"We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",
    "author":"Adelle Davis"
  },{
    "quote":"Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet.",
    "author":"Albert Einstein"
  },{
    "quote":"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
    "author":"Adam Scott"
  },{
    "quote":"Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
    "author":"Adelle Davis"
  },{
    "quote":"We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",
    "author":"Adelle Davis"
  },{
    "quote":"Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet.",
    "author":"Albert Einstein"
  }]
  return (
    <div className="App">
      <Nav />
      <section>{
        quoteData.map((elem,idx) => {
          return(
            <Quotes para={elem.quote} author={elem.author}/>
          ) 
          })
      }
      </section>
      {/* <First/>
      <Second/>
      <Cards/> */}
      <Footer/>
    </div>
  );
}

export default App;
