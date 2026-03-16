import { useWeather } from "../hooks/useWeather.ts";

interface UnitTabProps {
    tabName: string,
    metric: string,
    imperial: string
}

export function UnitTab({tabName, metric, imperial}: UnitTabProps) {
    const { unit } = useWeather();

    return (
        <div className="flex flex-col gap-1 pb-3">
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
// bg-[#3c3b5d]