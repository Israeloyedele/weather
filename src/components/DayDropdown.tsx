import { type Dispatch, type SetStateAction, useRef, useState } from "react";
import { useWeather } from "../hooks/useWeather.ts";
import { DayDropdownTab } from "./DayDropdownTab.tsx";
import { format, parseISO } from "date-fns";
import { useOutsideClick } from "../hooks/useOutsideClick.ts";

interface DayDropdownProps {
    selectedDay: number,
    setSelectedDay: Dispatch<SetStateAction<number>>;
}

export function DayDropdown({ selectedDay, setSelectedDay }: DayDropdownProps) {

    const [open, setOpen] = useState(false);
    const { weatherData, loading } = useWeather();
    const ref = useRef<HTMLDivElement | null>(null)
    useOutsideClick(ref, () => setOpen(false))

    return (
        <div ref={ref} className="relative">
            <button onClick={() => setOpen(!open)} className="flex justify-center items-center cursor-pointer gap-3 bg-[#3c3b5d] px-3 py-2 rounded-lg text-sm">
                {loading || !weatherData ? <span>-</span> : <p>{format(parseISO(weatherData.hourly[selectedDay].date), "eeee")}</p>}
                <img src="/images/icon-dropdown.svg" alt=""/>
            </button>

            <div className={`${open ? "" : "hidden"} absolute top-full right-0 bg-[#262a41] p-2 rounded-lg mt-2 gap-2 flex flex-col`}>
                {loading || !weatherData ? <></> :
                    weatherData.hourly.map((tab, i) =>
                        <DayDropdownTab key={tab.date}
                                       day={tab.date} i={i}
                                       setOpen={setOpen}
                                        selectedDay={selectedDay}
                                       setSelectedDay={setSelectedDay} />)
                }
            </div>
        </div>
    )
}