import { useWeather } from "../hooks/useWeather.ts";

interface TodayProps {
    title: string,
    data?: string
}

export function Today({ title, data }: TodayProps) {

    const { loading } = useWeather()

    return (
        <div>
            <p>{title}</p>
            <p>{loading ? "_": data || "_" }</p>
        </div>
    )
}