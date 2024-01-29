import { useEffect, useState } from "react";
import ClockControls from "./ClockControls";
import SessionControls from "./SessionControls";
import SessionTime from "./SessionTime";

function PomodoroClock() {

    useEffect(() => {
        setMinutes(sessionLength);
    }, []);

    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setsessionLength] = useState(25);
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
        sessionLength > 0 ? setsessionLength(sessionLength - 1) : false;
    }
    const handleSessionIncrement = () => {
        sessionLength < 60 ? setsessionLength(sessionLength + 1) : false;
    }

    return (
        <div className="pomodoro-container">
            <h1>Pomodoro Clock</h1>
            <ClockControls breakLength={breakLength} sessionLength={sessionLength} handleBreakDecrement={handleBreakDecrement} handleBreakIncrement={handleBreakIncrement} handleSessionDecrement={handleSessionDecrement} handleSessionIncrement={handleSessionIncrement} />
            <SessionTime minutes={minutes} seconds={seconds} timerLabel={timerLabel} />
            <SessionControls />
        </div>
    )
};

export default PomodoroClock;