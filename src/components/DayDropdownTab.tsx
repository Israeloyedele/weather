import type { Dispatch, SetStateAction } from "react";
import {format, parseISO} from "date-fns";


interface DayDropdownTabProps {
    day: string,
    i: number,
    selectedDay: number,
    setSelectedDay: Dispatch<SetStateAction<number>>,
    setOpen: Dispatch<SetStateAction<boolean>>
}

export function DayDropdownTab({day, i, setSelectedDay, setOpen, selectedDay}: DayDropdownTabProps) {
    return (
        <div onClick={() => {
            setSelectedDay(i)
            setOpen(false)
        }}
             className={`${selectedDay === i && "bg-[#3c3b5d]"} cursor-pointer py-1 px-2 rounded-lg hover:bg-[#3c3b5d] min-w-[150px]`}>
            {format(parseISO(day), "eeee")}
        </div>
    )
}