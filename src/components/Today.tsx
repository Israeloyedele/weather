import { useWeather } from "../hooks/useWeather.ts";

interface TodayProps {
    title: string,
    data?: string
}

export function Today({ title, data }: TodayProps) {

    const { loading } = useWeather()

    return (
        <div className="bg-[#302f4b] p-6 rounded-2xl flex flex-col justify-between gap-8 grow">
            <p className="text-lg font-semibold">{title}</p>
            <p className="text-2xl">{loading ? "_": data || "_" }</p>
        </div>
    )
}