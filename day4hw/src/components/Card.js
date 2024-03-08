import "./Card.css"

function Card(props){
  
   
    return <div id="card">
        <div id="data">
                <div id="title">
                    <div id="thumbnail">
                        <img src={props.Poster} height="100px" width="70px"/>
                    </div>
                    <div id="name">
                        <h2>{props.Title}</h2>
                        <p>{props.Year},{props.Director}</p>
                        <div>
                            <button>{props.Runtime}</button>
                            <p>{props.Genre}</p>
                        </div>
                        
                    </div>
                </div>
                <div id="desc">
                    <p>{props.Plot}</p>
                </div>
                <div id="icons">
                    
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 48 48">
<path fill="#1976D2" d="M38.1,31.2L19.4,24l18.7-7.2c1.5-0.6,2.3-2.3,1.7-3.9c-0.6-1.5-2.3-2.3-3.9-1.7l-26,10C8.8,21.6,8,22.8,8,24s0.8,2.4,1.9,2.8l26,10c0.4,0.1,0.7,0.2,1.1,0.2c1.2,0,2.3-0.7,2.8-1.9C40.4,33.5,39.6,31.8,38.1,31.2z"></path><path fill="#1E88E5" d="M11 17A7 7 0 1 0 11 31 7 7 0 1 0 11 17zM37 7A7 7 0 1 0 37 21 7 7 0 1 0 37 7zM37 27A7 7 0 1 0 37 41 7 7 0 1 0 37 27z"></path>
</svg>
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACtklEQVR4nO1Zv4sTQRQeBUGwEBsVf6GCnVqYfW/jEYh5b2MjynWnqJ2IoHcnFlpqLTaW4o9OiwMbRbSx8x8QFA6uFMVGudybvShebmWSeHfebpLJZpPdg/3ga5blzfe9eTM781apHDly5Mg8Fr3CAWGYFMJ3mnFWCLUw1IXgqxC+1YS362X3oG28ehUPaYI7Jp4QfmvFQt2ObZ7dWDzt7B9YuF/GfULwVAiWNGPQjc13CJ93G9gkQjO8sI0nDE98Ku6NJ55wXDNIr4HChAVhZ2J9PKnghbjx/Ip7ri/xQu60EDb6H6ydPcZlIby5Eo/hlnkWOx5hQximrDM/iPj/TLAzIeSeH0S8XmOi50yYmo83zZ2nv8Xk4vne2J7OpcPwLLnBhkNhfNx5q7TYHdKmECyZSonK/lTa4rS1CbweNmA+SBkQp63KCN6EDGiGubSFaXvORhlIcPcZNkHCBghq6QtDOxLOR83A59SFsTU/RRjAmQwICyw5E7WNXsyAsMCGRmvIwE+vsH0jLGQh9OdLpR0hA61vAdxPW6DuzQeR4psGqid3Jnv4Sjz7Wpdht+oGn+BaZg0wTKpeCJTapBnepy1Wryfhh+Cu2tzTQGstuLuE4Uvqovkf4Xvfl3yfCmi6BWmLF8LfC55b6kv8qgnnrDD8SVF8w1xJ1SAQci4lcUfuWzzjss/u1YHEr84Ejo+ynKTZY4IrKkkIu6fMKXAEZaO1h2cSFb9iouocHeruRPCjVnHG1DBheqCa4eMQDMzWPPeIGgWCcnmrJnyYXObxpTlMqlFDV/Byu6sct95/mTamShPiFY+ZG1KcktFUPKGygKBQ2CIM96za5s3GLzwKqse3qazB97DYzGxHAzAX+1gw0tkgd3rt7c6cZ8yiz2TWu/1GEsZXQvi6zs7hji/myJEjh9rI+Av6K/Bt8zMD1QAAAABJRU5ErkJggg==" width="15" height="15" />

<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABA0lEQVR4nO2ZP0sDQRDFRyGClZVdBF+UFGnzAVPmUlhIuMH7BAH7fIH0qdNa5E8XcBfSjhwWktMIp8XskveDKW+Z9+bPwp4IIYQkyeDVrqBxgjJsodF8ImygsahzaS2g/tAv8diMor0AV+djsxK7v1TAUgqhAGUFjC3UBu+WAYdY/V0H16j6Ow9eZJpGSFu8EwYFqL/rYAupv/PgEGsaIVyjygrY+bZQGdZZC7gv4zhTAeFfT4u/HfyG6XtfUgYn+zGuHsrDnaQOfnZ++fgcbiUH8H2QFr1qfyO5gKPkw7z7ZNeSE/jawbNhZR3JDXwO7IuM7FJyBPVfEbML7zwIIUSS5gPq09+2iMHuMwAAAABJRU5ErkJggg==" width="15" height="15"></img>

                </div>
        </div>
        <div id="image"  style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.9),rgba(0,0 , 0, 0.1)),url(${props.Image})`,
            backgroundSize: "100% 100%"
          
        }}>
        </div>
    </div>
}

export default Card;