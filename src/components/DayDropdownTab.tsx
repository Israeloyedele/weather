import type { Dispatch, SetStateAction } from "react";
import {format, parseISO} from "date-fns";


interface DayDropdownTabProps {
    day: string,
    i: number,
    setSelectedDay: Dispatch<SetStateAction<number>>,
    setOpen: Dispatch<SetStateAction<boolean>>
}

export function DayDropdownTab({day, i, setSelectedDay, setOpen}: DayDropdownTabProps) {
    return (
        <div onClick={() => {
            setSelectedDay(i)
            setOpen(false)
        }}
             className="cursor-pointer">
            {format(parseISO(day), "eeee")}
        </div>
    )
}