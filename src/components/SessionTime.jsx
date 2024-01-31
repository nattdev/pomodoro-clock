function SessionTime({minutes, seconds, isComplete}) {

    const minutesTime = /^[0-9]$/.test(minutes) ? `0${minutes}` : `${minutes}`;
    const secondsTime = /^[0-9]$/.test(seconds) ? `0${seconds}` : `${seconds}`;
    const currentTime = `${minutesTime}:${secondsTime}`

    console.log(currentTime, isComplete);

    return(
        <div className="session-container">
            <p id="timer-label">{isComplete ? "Break" : "Session"}</p>
            <p id="time-left">{currentTime}</p>
        </div>
    )
};

export default SessionTime;