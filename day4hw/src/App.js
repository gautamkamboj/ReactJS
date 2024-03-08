import './App.css';
import Card from './components/Card';
import jsonData from './data.json';



function App() {

   
  return (
    <div className="App">
        <section>{
       jsonData.map((elem,idx) => {
          return(
            <Card Title={elem.Title} Year={elem.Year} Runtime={elem.Runtime} Genre={elem.Genre} Director={elem.Director} Plot={elem.Plot} Poster={elem.Poster} Image={elem.Image} />
          ) 
          })
      }
      </section>
    </div>
  );
}

export default App;
