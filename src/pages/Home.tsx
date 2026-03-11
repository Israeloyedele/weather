import { useWeather } from "../hooks/useWeather.ts";
import { APIErrorDisplay } from "../components/APIErrorDisplay.tsx";
import { ResultsDisplay } from "../components/ResultsDisplay.tsx";

export function Home() {
    const { APIError } = useWeather();


    return (
        <div>
            {APIError ?
                <APIErrorDisplay /> :

                <ResultsDisplay />
            }
        </div>
)
}