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
        <div ref={ref} className="relative group grow max-w-50 flex justify-end">
            <div onClick={()=> setOpen(!open)} className="flex gap-2 cursor-pointer bg-[#3c3b5d] py-2 px-3 rounded-lg mb-2">
                <img className="" width="16" height="16" src="/images/icon-units.svg" alt=""/>
                <p className="font-semibold text-sm">Units</p>
                <img className="" width="13" height="8" src="/images/icon-dropdown.svg" alt=""/>
            </div>
            <div className={`${open ? "" : "hidden"} font-semibold z-10 w-full absolute top-full flex flex-col gap-2 right-0 lg:group-hover:flex bg-[#302f4b] p-2 rounded-xl`}>
                <p className="cursor-pointer hover:bg-[#3c3b5d] px-2 py-1 rounded-lg"
                   onClick={() => {
                       setUnit(unit === "metric" ? "imperial" : "metric")
                       setLoading(true)
                       setOpen(false)
                   }}>

                Switch to {unit === "metric" ? "Imperial" : "Metric"}</p>

                <UnitTab tabName="Temperature" metric="Celcius (&deg;C)" imperial="Fahrenheit (&deg;F)"/>
                <UnitTab tabName="Wind Speed" metric="km/h" imperial="mph"/>
                <UnitTab tabName="Precipitation" metric="Millimeters (mm)" imperial="Inches (in)" lastChild={true}/>

            </div>
        </div>
    )
}