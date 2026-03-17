import {useWeather} from "../hooks/useWeather.ts";

interface UnitTabProps {
    tabName: string,
    metric: string,
    imperial: string,
    lastChild?: boolean
}

export function UnitTab({tabName, metric, imperial, lastChild}: UnitTabProps) {
    const {unit} = useWeather();

    return (
        <div className={`${!lastChild && "border-b border-gray-600"} flex flex-col gap-1 py-2`}>
            <p className="text-[13px] text-[#d6d7db] px-2">{tabName}</p>
            <div className={`${unit === "metric" ? "bg-[#3c3b5d]" : ""} flex justify-between rounded-lg px-2 py-1`}>
                <p>{metric}</p>
                <img className={`${unit === "metric" ? "" : "dummy"}`} src="/images/icon-checkmark.svg" alt=""/>
            </div>
            <div className={`${unit !== "metric" ? "bg-[#3c3b5d]" : ""} flex justify-between rounded-lg px-2 py-1`}>
                <p>{imperial}</p>
                <img className={`${unit !== "metric" ? "" : "dummy"}`} src="/images/icon-checkmark.svg" alt=""/>
            </div>
        </div>
    )
}