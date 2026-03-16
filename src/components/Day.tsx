import { format, parseISO } from "date-fns"
import { getWeatherIcon } from "../utils/getweatherIcon.ts";
interface DayProps {
    day: string,
    tempMax: number,
    tempMin: number,
    code: number,
    dummy: boolean
}

export function Day({ day, tempMax, tempMin, code, dummy }: DayProps) {

    return (
        <div className="flex flex-col gap-2 bg-[#302f4b] justify-center items-center rounded-xl py-5 px-3 ">
            <p className={`${dummy && "dummy"}`}>{format(parseISO(day), 'ccc')}</p>
            <img className={`${dummy && "dummy"}`} src={getWeatherIcon(code)} alt="" width="50px"/>
            <div className="flex justify-between w-full text-sm">
                <p className={`${dummy && "dummy"}`}>{tempMax}&deg;</p>
                <p className={`${dummy && "dummy"}`}>{tempMin}&deg;</p>
            </div>
        </div>
    )
}