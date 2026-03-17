import { HourlyHeader } from "./HourlyHeader.tsx";
import { HourlyDisplay } from "./HourlyDisplay.tsx";
import {useState} from "react";

export function HourlyForecast(){

    const [selectedDay, setSelectedDay] = useState(0);

    return (
        <div className="bg-[#302f4b] py-5 my-3 rounded-2xl px-5">
            <HourlyHeader selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
            <HourlyDisplay selectedDay={selectedDay} />
        </div>
    )
}