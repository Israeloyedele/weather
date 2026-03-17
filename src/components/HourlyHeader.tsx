import { DayDropdown } from "./DayDropdown.tsx";
import { type Dispatch, type SetStateAction } from "react";

interface HourlyHeaderProps {
    selectedDay: number
    setSelectedDay: Dispatch<SetStateAction<number>>
}

export function HourlyHeader({selectedDay, setSelectedDay}: HourlyHeaderProps) {

    return (
        <div className="flex justify-between items-center">
            <p className="text-lg font-semibold">Hourly Forecast</p>
            <DayDropdown selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
        </div>
    )
}