import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const Main = ()=>{
    const [error, setError] = useState(false);
    const [targetLanguage, setTargetLanguage] = useState('hi');
    const [inputText, setInputText] = useState('Enter text here');
    const [translatedText, setTranslatedText] = useState('');
    const [languageOptions, setLanguageOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchLanguages = async () => {
            const options = {
                method: 'GET',
                url: 'https://text-translator2.p.rapidapi.com/getLanguages',
                headers: {
                    'X-RapidAPI-Key': '8ac23290edmsh020eceb40c02f96p15df9bjsnb904960e94b1',
                    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
                }
            };
    
            try {
                
                const response = await axios.request(options);
                setLanguageOptions(response.data.data.languages);
                
            } catch (error) {
               setError(true);
                console.error('Error fetching languages:', error);
            }
        };
    
        fetchLanguages();
        translateText();
    }, [targetLanguage]);
    
    const translateText =async () => {
        
        const encodedParams = new URLSearchParams();
        encodedParams.set('source_language', 'auto');
        encodedParams.set('target_language', targetLanguage);
        encodedParams.set('text', inputText);
    
        const options = {
        method: 'POST',
        url: 'https://text-translator2.p.rapidapi.com/translate',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '8ac23290edmsh020eceb40c02f96p15df9bjsnb904960e94b1',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
        data: encodedParams,
        };
    
        try {
            setLoading(true);
            const response = await axios.request(options);
            setTranslatedText(response.data.data.translatedText)
            console.log(translatedText);
            setLoading(false);
        } catch (error) {
            setError(true);
            console.error(error);
            setLoading(false);
        }
        
    };
    if(error)
        return <h2>Something went wrong</h2>
    return (
        <div>
            <h1>Universal Language Translator</h1>
            <div>
                <label>Source Language: auto</label>
               
            </div>
            <div>
                <label>Target Language:</label>
                 <select value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)}>
                    {languageOptions.map(language => (
                        <option key={language.code} value={language.code}>{language.name}</option>
                    ))}
                </select>
                
            </div>
            <div>
                <label>Text to Translate:</label>
                <textarea value={inputText} onChange={(e) => setInputText(e.target.value)} />
            </div>
            <div>
                <button onClick={translateText}>Translate</button>
            </div>
            <div>
                <h2>Translated Text:</h2>
                {!loading?translatedText:<h4>Loading...</h4>}
            </div>
        </div>
    );
    };
    
export default Main;