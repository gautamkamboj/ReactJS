const Contact=()=>{
    const copyToClipboard = () => {
        navigator.clipboard.writeText('gautamkamboj0@gmail.com');
        alert('Email copied to clipboard!');
      };
    
    return <div className="contact">
        <h1>Contact</h1>
        <div className="mail">
            <h1>Email:</h1>
            <div>
                gautamkamboj0@gmail.com
                <button className="copy-btn" onClick={copyToClipboard}>Copy</button>    
            </div>
        </div>
        <div className="mail">
            <h1>Schedule Video Call With Me:</h1>
            <img src="https://oktayshakirov.com/assets/images/calendar.png"></img>
        </div>
        <div className="mail">
            <h1>Socials:</h1>
            <div>
                   <img src="https://oktayshakirov.com/assets/images/socials/github.png"/>
                   <img src="https://oktayshakirov.com/assets/images/socials/linkedin.png"/>
                   <img src="https://oktayshakirov.com/assets/images/socials/instagram.png"/>
                   <img src="https://oktayshakirov.com/assets/images/socials/twitter.png"/>

            </div>
        </div>

        <div className="mail">
            <h1>support My Work:</h1>
            <p>With every small donation, you contribute to hostings, domains and other essential costs. All my work which is made public on GitHub or Figma is open source and free for everyone to use.</p>
            <img src="https://oktayshakirov.com/assets/images/coffee-sponsort.png" height='50' width='200'/>
            <img src="https://oktayshakirov.com/assets/images/github-sponsors.png"  height='50' width='200'/>
            <img src="https://oktayshakirov.com/assets/images/paypalme.png"  height='50' width='200'/>
        </div>
    </div>
}
export default Contact;