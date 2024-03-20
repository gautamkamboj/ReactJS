import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Main = () => {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(true);
  
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get('https://api.unsplash.com/search/photos', {
          params: {
            client_id: 'VmyQnY0NZIqy1-ebbBn2gFJBe2vcPTl3wkgskYdUmDo', 
            query: query,
          },
        });
        setLoading(false);
        let data = response.data.results;
        setImages(data);
        if(data.length == 0)
            setResult(false);
        else
            setResult(true);
      } catch (error) {
        setError(true)
        console.error('Error fetching images from Unsplash:', error);
      }
    };
  
    useEffect(() => {
      fetchData();
      
    }, [query]);
  
    const handleSearch = () => {
        setQuery(document.getElementById('input').value)
      fetchData();
    };

    if(error)
        return <h1>Something went Wrong</h1>
  
    return (
      <div>
        <h2>Image Generation App</h2>
        <input
          type="text"
          id='input'
          placeholder="Enter text..."
        />
        <button onClick={handleSearch}>Search</button>
        <div className="image-grid">
          {     loading ? <h1>Loading</h1> : 
                !result ? <h2>No Result</h2>:images.map((image) => (
                
                
                <img key={image.id} src={image.urls.small} alt={image.alt_description} height='300' width='300'/>
          ))}
        </div>
       
      </div>
    );
  };
  

export default Main;


