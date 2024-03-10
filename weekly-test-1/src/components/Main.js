import { useState } from 'react';
import "./Main.css";
const Main = () => {
  const [password, setPassword] = useState('PASSWORD');
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const uppercaseChars = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    const lowercaseChars = 'qwertyuiopasdfghjklzxcvbnm';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let chars = '';
    if (includeUppercase) chars += uppercaseChars;
    if (includeLowercase) chars += lowercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSymbols) chars += symbolChars;

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  return (
    <div className='main'>
      <h1>Password Generator</h1>
      <div className='password'>
      
        
          <p>{password}</p>
          <button onClick={copyToClipboard}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA30lEQVR4nO3XSw7CMAyE4f8SSNyULWdkw3GGDUFIoEIS2+ExI3UXqf1q5wWxUcDTsmNhIiFnYP8LEK3EREO0CpMB0QpMFkTVmEMiRN+GaVEvJmPtPyZCBJye7TORkPu/NVqZllfjHioTCVEApkW9mGjILKbl3fG3d2VAZjDDyYKMYj4SMttm6vmGbEgVhgpIBYYqSDaGSkgmhmpIFoZIyGgMIbgiVS2p7NYy5BpXBLcWniPyqoWXX7yP4J0dH1F81sKHRnyMx/cRfLHSP191QyJDcEXk1tqI5wieI4TPkQsNRokspwnZAwAAAABJRU5ErkJggg==" height="30px" width="30px"/></button>
      
      
      </div>
      
      <div className='check'>
        <label>Select Password length(**8-50 characters**)</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div>
      <div>
        
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={(e) => setIncludeUppercase(e.target.checked)}
        />
        <label>Include Uppercase</label>
      </div>
      <div>
        
        <input
          type="checkbox"
          checked={includeLowercase}
          onChange={(e) => setIncludeLowercase(e.target.checked)}
        />
        <label>Include Lowercase</label>
      </div>
      <div>
        
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
        <label>Include Numbers</label>
      </div>
      <div>
        
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={(e) => setIncludeSymbols(e.target.checked)}
        />
        <label>Include Symbols</label>
      </div>
      </div>
      <button className="btn" onClick={generatePassword}>Generate Password</button>
     
    </div>
  );
};

export default Main;
