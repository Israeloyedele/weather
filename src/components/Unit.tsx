import { useState } from "react";
import {useWeather} from "../hooks/useWeather.ts";
import { UnitTab } from "./UnitTab.tsx";

export function Unit(){

    const [open, setOpen] = useState(false)
    const { unit } = useWeather()


    return (
        <div className="relative group">
            <div onClick={()=> setOpen(!open)} className="flex gap-2 cursor-pointer">
                <img src="/images/icon-units.svg" alt=""/>
                <p>Unit</p>
                <img src="/images/icon-dropdown.svg" alt=""/>
            </div>
            <div className={`${open ? "" : "hidden"} absolute top-full right-0 group-hover:block`}>
                <p>Switch to {unit === "metric" ? "Imperial" : "Metric"}</p>

                <UnitTab tabName="Temperature" metric="Celcius (&deg;C)" imperial="Fahrenheit (&deg;F)"/>
                <UnitTab tabName="Wind Speed" metric="km/h" imperial="mph"/>
                <UnitTab tabName="Precipitation" metric="Millimeters (mm)" imperial="Inches (in)"/>

            </div>
        </div>
    )
}