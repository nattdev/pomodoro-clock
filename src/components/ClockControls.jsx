import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ClockControls({ breakLength, sessionLength, handleBreakDecrement, handleBreakIncrement, handleSessionDecrement, handleSessionIncrement }) {
    return (
        <div className="clock-controls-container flex gap-4 justify-center px-2">
            <div className="break-container flex flex-wrap justify-around">
                <p id="break-label" className='w-full text-center text-lg'>Break Length</p>
                <button id="break-decrement" className='text-3xl' onClick={handleBreakDecrement}>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-down" />
                </button>
                <p id="break-length" className='text-3xl min-w-8'>{breakLength}</p>
                <button id="break-increment" className='text-3xl' onClick={handleBreakIncrement}>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-up" />
                </button>
            </div>
            <div className="session-container flex flex-wrap justify-around">
                <p id="session-label" className='w-full text-center text-lg'>Session Length</p>
                <button id="session-decrement" className='text-3xl' onClick={handleSessionDecrement}>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-down" />
                </button>
                <p id="session-length" className='text-3xl min-w-8'>{sessionLength}</p>
                <button id="session-increment" className='text-3xl' onClick={handleSessionIncrement}>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-up" />
                </button>
            </div>
        </div>
    )
};

export default ClockControls;