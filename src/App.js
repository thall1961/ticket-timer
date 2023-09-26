import Confetti from "react-confetti";
import {useEffect, useRef, useState} from "react";
import './App.css'


const TOTAL_SECONDS = 5 * 60

function App() {
  const [display, setDisplay] = useState('none');
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [going, setGoing] = useState(false);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  function showConfetti() {
    setDisplay('block')
    setTimeout(() => {
      setDisplay('none')
    }, 1000)
  }

  function handleCheckboxClick(event) {
    setSecondsLeft(TOTAL_SECONDS)
    showConfetti();
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (going) {
        setSecondsLeft(secondsLeft > 0 ? secondsLeft - 1 : 0)
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [going, secondsLeft]);

  return (
    <>
      <div style={{padding: '40px', fontFamily: 'arial, sans-serif', maxWidth: '800px', margin: '0 auto'}}>
        <h1>TICKET TIMER</h1>
        <div className="flex apart">
          <div>
            <div style={{padding: 0, margin: 0}}>
              <div>
                <h2 style={{
                  paddingTop: 0,
                  marginTop: 0,
                  color: secondsLeft > 0 ? secondsLeft > 5 ? 'green' : 'orange' : 'red'
                }}>{secondsLeft} seconds left</h2>
              </div>
              <Confetti
                style={{display}}
                width={windowSize[0]}
                height={windowSize[1]}
              />
              <button className="btn primary" onClick={handleCheckboxClick}>Restart</button>
              <button className="btn secondary" onClick={() => setGoing(!going)}>Start/Stop &rarr;</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
