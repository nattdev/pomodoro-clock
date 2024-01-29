import ClockControls from "./ClockControls";
import SessionControls from "./SessionControls";
import SessionTime from "./SessionTime";

function PomodoroClock() {
return (
    <div className="pomodoro-container">
        <h1>Pomodoro Clock</h1>
        <ClockControls/>
        <SessionTime/>
        <SessionControls/>
    </div>
    )
};

export default PomodoroClock;