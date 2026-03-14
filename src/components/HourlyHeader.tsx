import {DayDropdown} from "./DayDropdown.tsx";
import type {Dispatch, SetStateAction} from "react";

interface HourlyHeaderProps {
    selectedDay: number
    setSelectedDay: Dispatch<SetStateAction<number>>
}

export function HourlyHeader({selectedDay, setSelectedDay}: HourlyHeaderProps) {

    return (
        <div>
            <p>Hourly Forecast</p>
            <DayDropdown selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
        </div>
    )
}