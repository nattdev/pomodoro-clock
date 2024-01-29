function ClockControls() {
    return (
        <div className="clock-controls-container">
            <div className="break-container">
                <p id="break-label">Break Length</p>
                <button id="break-decrement"></button>
                <p id="break-length">5</p>
                <button id="break-increment"></button>
            </div>
            <div className="session-container">
            <p id="session-label">Session Length</p>
                <button id="session-decrement"></button>
                <p id="session-length">25</p>
                <button id="session-increment"></button>
            </div>
        </div>
    )
};

export default ClockControls;