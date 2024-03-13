import React, { useState } from "react";
import { data } from "./components/Data";

const Restaurants = () => {
  const [food, setFood] = useState(data);

  function filterData(name) {
    let filterData = data.filter((item) => {
      if (item.name.toLowerCase().includes(name.trim())) {
        return true;
      }
      return false;
    });
    setFood(filterData);
  }

  function updateRating(e) {
    let filterData = data.filter((item) => {
      if (item.rating>=e.target.value) {
        return true;
      }
      return false;
    });
    setFood(filterData);
  }


  return (
    <div>
      <div style={{display:'flex', justifyContent:'space-between', margin:'50px'}}>
      <div>
        <input
          style={{height:'40px', width:'200px'}}
          type="text"
          name="search"
          placeholder="Search restaurants..."
          
          onChange={(e) => {
            filterData(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Minimum Rating :</label>
        <input
          style={{height:'40px', width:'60px'}}
          type="number"
          name="rating"
          placeholder="0"
          min={0}
          onChange={updateRating}
        />
      </div>
      </div>
      <div style={{display:'grid',
      gridTemplateColumns:"1fr 1fr 1fr",
      margin:'0 0 0 40px '
      }}>
      {food.map((item) => {
        return (
          <div style={{
            
            borderRadius: "1rem",
            boxShadow:'0px 5px 10px 0 lightgrey',
              width: "23rem",
              margin: "20px 0",
              display:'flex',
              flexDirection:'column',
              justifyContent:'space-between'
            }}>
            <div
            key={item._id.$oid}
            style={{
              padding:'20px',
              margin:"0 0 -20px 0",
              
              
            }}
          >
            <div style={{display:'flex',
            justifyContent:'space-between',
            margin:"-20px 0"
             }}>
               <h3>{item.name}</h3>
               <h4>rating :{item.rating} <img width="20" height="20" src="https://img.icons8.com/emoji/48/star-emoji.png" alt="star-emoji"/></h4>
            </div>
            
            <p>{item.address}</p>
            <p>{item.outcode} {item.postcode}</p>
           </div> 
            
            <div style={{
              border: "1px solid #F3F4F6",
              padding: "0 0 20px 20px",
              borderRadius: "1rem",
              backgroundColor:'#F3F4F6'
              
              }}>
                <h3><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/cutlery.png" alt="cutlery"/>{item.type_of_food}</h3>
                <a href="#">Visit Menu</a>
            </div>

          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Restaurants;