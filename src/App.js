import Confetti from "react-confetti";
import {useEffect, useRef, useState} from "react";
import Hero from './components/Hero'
import './input.css'
import './App.css'
import alarm from './alarm.mp3'


const TOTAL_SECONDS = 5 * 60

function App() {
  const [display, setDisplay] = useState('none');
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [going, setGoing] = useState(false);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const audioRef = useRef(null);

  function showConfetti() {
    setDisplay('block')
    setTimeout(() => {
      setDisplay('none')
    }, 1000)
  }

  function handleCheckboxClick(event) {
    setSecondsLeft(TOTAL_SECONDS)
    setGoing(true);
    showConfetti();
    stopTheMusic();
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (going) {
        setSecondsLeft(secondsLeft > 0 ? secondsLeft - 1 : 0)
        if (secondsLeft <= 0) {
          audioRef.current.play();
          setGoing(false);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [going, secondsLeft]);

  function stopTheMusic() {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  }

  return (
    <>
      <Hero secondsLeft={secondsLeft} setGoing={setGoing} handleCheckboxClick={handleCheckboxClick} />
      <Confetti
        style={{display}}
        width={windowSize[0]}
        height={windowSize[1]}
      />
      <div className="flex justify-center">
        <div className="text-center">
          <audio style={{ marginTop: '200px' }} ref={audioRef} controls src={alarm}>
          </audio>
          <button className="px-3 py-2.5 border border-indigo-500 mt-3 rounded shadow-sm" onClick={stopTheMusic}>stop the music</button>
        </div>
      </div>
    </>
  );
}

export default App;
