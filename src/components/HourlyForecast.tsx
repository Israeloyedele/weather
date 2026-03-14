import { HourlyHeader } from "./HourlyHeader.tsx";
import { HourlyDisplay } from "./HourlyDisplay.tsx";
import {useState} from "react";

export function HourlyForecast(){

    const [selectedDay, setSelectedDay] = useState(0);

    return (
        <div>
            <HourlyHeader selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
            <HourlyDisplay selectedDay={selectedDay} />
        </div>
    )
}