import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ClockControls() {
    return (
        <div className="clock-controls-container">
            <div className="break-container">
                <p id="break-label">Break Length</p>
                <button id="break-decrement"><FontAwesomeIcon icon="fa-solid fa-arrow-down" /></button>
                <p id="break-length">5</p>
                <button id="break-increment"><FontAwesomeIcon icon="fa-solid fa-arrow-up" /></button>
            </div>
            <div className="session-container">
            <p id="session-label">Session Length</p>
                <button id="session-decrement"><FontAwesomeIcon icon="fa-solid fa-arrow-down" /></button>
                <p id="session-length">25</p>
                <button id="session-increment"><FontAwesomeIcon icon="fa-solid fa-arrow-up" /></button>
            </div>
        </div>
    )
};

export default ClockControls;