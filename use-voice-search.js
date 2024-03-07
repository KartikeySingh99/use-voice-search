import { useState, useEffect, useRef } from "react";


const useSpeechRecognition = () => {

    const [listening, setListening] = useState(false);
    const [result, setResult] = useState("");
    let speechObj = useRef(null)

    useEffect(() => {
        if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
            speechObj.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

            speechObj.current.onstart = () => {
                setListening(true)
                setTimeout(() => {
                    stopListening()
                }, 10000)
            }
            speechObj.current.onresult = (e) => {
                const transcript = e.results[0][0].transcript;
                setResult(transcript);
            }
        }
        else {
            console.log("not supported!");
            speechObj.current = null;
        }

        return (() => {
            if (speechObj.current) {
                speechObj.current.stop();
            }
        })
    }, [])

    const startListening = () => {
        if (speechObj.current) {
            speechObj.current.start();
        }
    }
    const stopListening = () => {
        if (speechObj.current) {
            speechObj.current.stop();
            setListening(false);
        }
    }

    return {
        startListening,
        stopListening,
        listening,
        result
    };

}

export default useSpeechRecognition;