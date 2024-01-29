function SessionTime({minutes, seconds, timerLabel}) {
    return(
        <div className="session-container">
            <p id="timer-label">{timerLabel}</p>
            <p id="time-left">{/^[0-9]$/.test(minutes) ? `0${minutes}` : minutes}:{/^[0-9]$/.test(seconds) ? `0${seconds}` : seconds}</p>
        </div>
    )
};

export default SessionTime;