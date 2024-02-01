import { useEffect, useReducer, useRef, useState } from "react";
import ClockControls from "./ClockControls";
import SessionControls from "./SessionControls";
import SessionTime from "./SessionTime";

function PomodoroClock() {

    const audioRef = useRef();

    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [isStart, setIsStart] = useState(false);
    const [isOn, setIsOn] = useState(false);

    useEffect(() => {
        let intervalId;

        if (isStart) {
            intervalId = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        setIsComplete(!isComplete);
                        isComplete ? setMinutes(sessionLength) : setMinutes(breakLength);
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000);

            if (minutes === 0 && seconds === 0) {
                audioRef.current.play();
            }
        } else {
            clearInterval(intervalId);
        }
        return () => { clearInterval(intervalId) };
    }, [isStart, minutes, seconds, sessionLength, breakLength, isComplete]);

    const handleBreakDecrement = () => {
        if (!isStart) {
            if (breakLength > 1) {
                setBreakLength(breakLength - 1);
            }
        }
    }
    const handleBreakIncrement = () => {
        if (!isStart) {
            if (breakLength < 60) {
                setBreakLength(breakLength + 1);
            }
        }
    }
    const handleSessionDecrement = () => {
        if (!isStart) {
            if (sessionLength > 1) {
                setSessionLength(sessionLength - 1);
                if (!isComplete) {
                    setMinutes(sessionLength - 1);
                }
            }
        }
    }

    const handleSessionIncrement = () => {
        if (!isStart) {
            if (sessionLength < 60) {
                setSessionLength(sessionLength + 1);
                if (!isComplete) {
                    setMinutes(sessionLength + 1);
                }
            }
        }
    }

    const handleReset = () => {
        setIsStart(false);
        setIsOn(false);
        setIsComplete(false);
        setMinutes(25);
        setSeconds(0);
        setBreakLength(5);
        setSessionLength(25);

        audioRef.current.pause();
        audioRef.current.currentTime = 0;
    }

    const handleStartStop = () => {
        setIsStart(!isStart);
        setIsOn(true);
    }

    return (
        <div className="pomodoro-container flex flex-col justify-center items-center w-sreen h-screen bg-slate-50">
            <h1 className="text-4xl m-8 font-medium">Pomodoro Clock</h1>
            <ClockControls breakLength={breakLength} sessionLength={sessionLength} handleBreakDecrement={handleBreakDecrement} handleBreakIncrement={handleBreakIncrement} handleSessionDecrement={handleSessionDecrement} handleSessionIncrement={handleSessionIncrement} />
            <SessionTime minutes={minutes} seconds={seconds} isComplete={isComplete} />
            <SessionControls handleReset={handleReset} handleStartStop={handleStartStop} />
            <audio id="beep" src="src/assets/sounds/electronic-alarm.mp3" ref={audioRef}></audio>
        </div>
    )
};

export default PomodoroClock;