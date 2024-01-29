import { useEffect, useState } from "react";
import ClockControls from "./ClockControls";
import SessionControls from "./SessionControls";
import SessionTime from "./SessionTime";

function PomodoroClock() {

    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [timerLabel, setTimerLabel] = useState("Session");
    const [isComplete, setIsComplete] = useState(false);

    const handleBreakDecrement = () => {
        breakLength > 0 ? setBreakLength(breakLength - 1) : false;
    }
    const handleBreakIncrement = () => {
        breakLength < 60 ? setBreakLength(breakLength + 1) : false;
    }
    const handleSessionDecrement = () => {
        sessionLength > 0 ? setSessionLength(sessionLength - 1) : false;
    }
    const handleSessionIncrement = () => {
        sessionLength < 60 ? setSessionLength(sessionLength + 1) : false;
    }

    const handleReset = () => {
        setSessionLength(25);
        setBreakLength(5);
    }

    useEffect(() => {
        timerLabel == "Session" ? 
        setMinutes(sessionLength) : setMinutes(breakLength);
    }, [sessionLength, breakLength]);

    return (
        <div className="pomodoro-container">
            <h1>Pomodoro Clock</h1>
            <ClockControls breakLength={breakLength} sessionLength={sessionLength} handleBreakDecrement={handleBreakDecrement} handleBreakIncrement={handleBreakIncrement} handleSessionDecrement={handleSessionDecrement} handleSessionIncrement={handleSessionIncrement} />
            <SessionTime minutes={minutes} seconds={seconds} timerLabel={timerLabel} />
            <SessionControls handleReset={handleReset}/>
        </div>
    )
};

export default PomodoroClock;