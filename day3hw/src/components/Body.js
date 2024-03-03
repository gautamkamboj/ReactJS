import "./Body.css";

function Body(){
    return <div id="body">
        <div id="image">
            <img src="https://media.istockphoto.com/id/1292532831/photo/laughing-senior-friends-sitting-together-on-a-park-bench.jpg?s=1024x1024&w=is&k=20&c=JvThaWOLBKibl3NwS205iuNdiePP9MsyrLP2yr6QA8w="/>
        </div>
        <div id="red-box">
            <h2>Think Health. Think Massage</h2>
            <p>We are open 9am to 6pm; Monday through Sunday. if you would like to schedule an appointment with us, please call us ar 987-654-3210 today!</p>
            <div id="button">
                <button className="btn">LEARN MORE ABOUT US</button>
                <button className="btn">CONTACT US TODAY</button>

            </div>
        </div>
        <div id = "text">
            <p className="red"> Are you looking for a professional, registered massage therapist? Sample Massage Therapy has 4 registered massage therapists who can provide clinical massage.</p>
            <p>We are commited to your long term health and well-being. our multi-disciplinary clinic provides a balanced approach to a healthy lifestyle. Enhance your health and improve your performance with our treatments.</p>
            <p>We welcome you to come explore all the benifits you'll enjoy as one of our valued guests. Our professional staff is commited to offering the best massage therapy in Mainland.</p>
            <hr></hr>
        </div>
    
    </div>
    
    
}

export default Body;