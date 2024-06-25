import React, { useState, useEffect } from "react";


function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    function timeFormat() {
        let hours = time.getHours();
        let seconds = time.getSeconds();
        let minutes = time.getMinutes();
        const meridiem = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`

    }

    function padZero(num) {
        return (num < 10 ? '0' : '') + num

    }

    return (
        <div className="classContainer">
            <div className="clock">
                <span>{timeFormat()}</span>
            </div>
        </div>
    )
}

export default DigitalClock