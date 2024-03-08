import "./Quotes.css";

 function Quotes(props){
    return <div className="quotes-div">
        <p>{props.para}</p>
        <span>{props.author}</span>
    </div>
}


export default Quotes;