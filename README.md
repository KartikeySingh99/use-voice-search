# use-voice-search

This is a custom made react hook for enabling speech recognition. It is made by using browser's speech API. 

## Installation

use npm to install use-voice-search in your project.

```bash
npm install use-voice-search
```

## Usage

This is a simple example demonstrating the usage of this hook.

```javascript
import useSpeechRecognition from "use-voice-search";

function App() {

  const { startListening, stopListening, listening, result } = useSpeechRecognition()

  return (
    <>
      <div>
        {listening && <h1>Listening</h1> }
        <button onClick={startListening}>start</button>
        <button onClick={stopListening}>stop</button>
        <h1>{result}</h1>
      </div>
    </>
  )

}
```

# Features

1) **startListening()**: Use this method to activate speech recognition. Your browser start listening to the microphone when this method is called.

2) **stopListening()**: Use this method to stop listening.

3) **listening**: Variable indicating whether browser is listening or not.

4) **result**: To display the result use this variable in your code.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.
