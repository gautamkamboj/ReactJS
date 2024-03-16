import { useState,useEffect } from "react";
const Exercise = ()=>{
    const [data,setData] = useState([]);
    const [load, setLoad] = useState(10);
    const [filter,setFilter] = useState(data);

    const url = `https://exercisedb.p.rapidapi.com/exercises?limit=${load}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8ac23290edmsh020eceb40c02f96p15df9bjsnb904960e94b1',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};
    useEffect(() => {
        fetchWorkout();
      },[load]);
    
    const fetchWorkout = async () => {
        
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                
                setData(result);
                setFilter(result);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
    }
    
  
        function filterData(name) {
            console.log(data);
            
            let filterData = data.filter((item) => {
                let str = item.bodyPart + item.name + item.target;
              if (str.toLowerCase().includes(name.trim())) {
                return true;
              }
              return false;
            });

           
                setFilter(filterData);
            
        }
    

    const loadMore = ()=>{
        let input = document.getElementById('input').value;
        if(!input)
           setLoad(load + 10);
        else{
            setLoad(load + 10);
            setTimeout(() => {
                filterData(input);
            }, 3000);
            
        }
        
    }
    return <div >
        <h1>Exercise List</h1>
        <div>
        <input
          style={{height:'40px', width:'200px'}}
          type="text"
          name="search"
          placeholder="Search Exercise,Body parts..."
          id="input"
          onChange={(e) => {
            filterData(e.target.value);
          }}
        />
      </div>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr'}}> 
            {filter.map((elem)=>{
                return <div key={elem.id} style={{border:'1px solid lightgrey', textAlign:'center', borderRadius:'20px', margin:'20px', boxShadow:'10px 10px 20px 0px lightgrey'}}>
                    
                    <img src={elem.gifUrl} height='200' width='200'/>
                    <h2>{elem.name}</h2>
                    <p>{elem.bodyPart}<br/>{elem.target}</p>
                </div>
            })}
        </div>
        <button onClick={()=>loadMore()}>Load More</button>
    </div>
}

export default Exercise