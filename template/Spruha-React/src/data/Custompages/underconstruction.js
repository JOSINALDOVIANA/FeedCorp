import React from 'react';
import Countdown from 'react-countdown';
const AfterComplete = () => <span>You are good to go!</span>;
// Renderer callback with condition
const rendering = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a complete state
        return <AfterComplete />
    } else {
        // Render a countdown
        return (
            <span>
                <ul className="countdown">
                    <li>
                        <div className='count-construction'>
                            <span className="days text-white">{days}</span>
                            <span className="count text-white">Days</span>
                        </div>
                    </li>
                    <li>
                        <div className='count-construction'>
                            <span className="hours text-white">{hours}</span>
                            <span className="count text-white">Hours</span>
                        </div>
                    </li>

                    <li>
                        <div className='count-construction'>
                            <span className="minutes text-white">{minutes}</span>
                            <span className="count text-white">Minutes</span>
                        </div>
                    </li>
                    <li>
                        <div className='count-construction'>
                            <span className="seconds text-white">{seconds}</span>
                            <span className="count text-white">Seconds</span>
                        </div>
                    </li>
                </ul>
            </span>
        );
    }
};
export function DayCounter() {
    return (
        <Countdown date={Date.now() + 12999800000} renderer={rendering} />
    );
}