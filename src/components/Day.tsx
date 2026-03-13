import { format } from "date-fns"
interface DayProps {
    day: string,
    tempMax: number,
    tempMin: number,
    code: number,
    dummy: boolean
}

export function Day({ day, tempMax, tempMin, code, dummy }: DayProps) {
    return (
        <div style={{ visibility: dummy? "hidden" : "visible" }}>
            <p>{format(new Date(day), 'ccc')}</p>
            <p>{code}</p>
            <p>{tempMax}</p>
            <p>{tempMin}</p>
        </div>
    )
}