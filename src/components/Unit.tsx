import { useRef, useState } from "react";
import { useWeather } from "../hooks/useWeather.ts";
import { UnitTab } from "./UnitTab.tsx";
import { useOutsideClick } from "../hooks/useOutsideClick.ts";

export function Unit(){

    const [open, setOpen] = useState(false)
    const ref = useRef<HTMLDivElement | null>(null)
    const { unit, setUnit, setLoading } = useWeather()
    useOutsideClick(ref, () => setOpen(false))


    return (
        <div ref={ref} className="relative group grow flex justify-end">
            <div onClick={()=> setOpen(!open)} className="flex gap-2 cursor-pointer bg-[#302f4b] py-2 px-3 rounded-lg">
                <img className="" width="16" height="16" src="/images/icon-units.svg" alt=""/>
                <p className="font-semibold">Units</p>
                <img className="" width="13" height="8" src="/images/icon-dropdown.svg" alt=""/>
            </div>
            <div className={`${open ? "" : "hidden"} w-full absolute top-full right-0 group-hover:block p-3`}>
                <p className="cursor-pointer flex"
                   onClick={() => {
                       setUnit(unit === "metric" ? "imperial" : "metric")
                       setLoading(true)
                       setOpen(false)
                   }}>

                Switch to {unit === "metric" ? "Imperial" : "Metric"}</p>

                <UnitTab tabName="Temperature" metric="Celcius (&deg;C)" imperial="Fahrenheit (&deg;F)"/>
                <UnitTab tabName="Wind Speed" metric="km/h" imperial="mph"/>
                <UnitTab tabName="Precipitation" metric="Millimeters (mm)" imperial="Inches (in)"/>

            </div>
        </div>
    )
}