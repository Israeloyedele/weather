import type { Dispatch, SetStateAction } from "react";
import { format } from "date-fns";


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
            {format(new Date(day), "cccc")}
        </div>
    )
}