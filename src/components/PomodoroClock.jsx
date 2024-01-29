import { useState } from "react";
import ClockControls from "./ClockControls";
import SessionControls from "./SessionControls";
import SessionTime from "./SessionTime";

function PomodoroClock() {

    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setsessionLength] = useState(25);
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [timerLabel, setTimerLabel] = useState("Session");
    const [isComplete, setIsComplete] = useState(false);

    const handleBreakDecrement = () => {
        setBreakLength(breakLength - 1);
    }
    const handleBreakIncrement = () => {
        setBreakLength(breakLength + 1);
    }
    const handleSessionDecrement = () => {
        setsessionLength(sessionLength - 1);
    }
    const handleSessionIncrement = () => {
        setsessionLength(sessionLength + 1);
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