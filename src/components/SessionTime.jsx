function SessionTime({minutes, seconds, isComplete}) {

    const minutesTime = /^[0-9]$/.test(minutes) ? `0${minutes}` : `${minutes}`;
    const secondsTime = /^[0-9]$/.test(seconds) ? `0${seconds}` : `${seconds}`;
    const currentTime = `${minutesTime}:${secondsTime}`

    return(
        <div className="session-container flex flex-col justify-center items-center">
            <p id="timer-label" className='pt-6 text-3xl font-medium text-blue-700'>{isComplete ? "Break" : "Session"}</p>
            <p id="time-left" className='p-4 text-4xl font-bold border-blue-600 border-2 rounded-full text-blue-600 pt-4 mt-4 w-52 text-center'>{currentTime}</p>
        </div>
    )
};

export default SessionTime;