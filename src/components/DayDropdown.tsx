import { type Dispatch, type SetStateAction, useState } from "react";
import { useWeather } from "../hooks/useWeather.ts";
import { DayDropdownTab } from "./DayDropdownTab.tsx";
import { format } from "date-fns";

interface DayDropdownProps {
    selectedDay: number,
    setSelectedDay: Dispatch<SetStateAction<number>>;
}

export function DayDropdown({ selectedDay, setSelectedDay }: DayDropdownProps) {

    const [open, setOpen] = useState(false);
    const { weatherData, loading } = useWeather();

    return (
        <div className="relative">
            <button onClick={() => setOpen(!open)}>
                {loading || !weatherData ? <span>-</span> : <p>{format(new Date(weatherData.hourly[selectedDay].date), "cccc")}</p>}
                <img src="/images/icon-dropdown.svg" alt=""/>
            </button>

            <div className={`${open ? "" : "hidden"} absolute bottom-0 right-0`}>
                {loading || !weatherData ? <></> :
                    weatherData.hourly.map((tab, i) =>
                        <DayDropdownTab key={tab.date}
                                       day={tab.date} i={i}
                                       setOpen={setOpen}
                                       setSelectedDay={setSelectedDay} />)
                }
            </div>
        </div>
    )
}