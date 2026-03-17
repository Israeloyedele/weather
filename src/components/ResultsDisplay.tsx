import { SearchPane } from "./SearchPane.tsx";
import { useWeather } from "../hooks/useWeather.ts";
import { NoResults } from "./NoResults.tsx";
import { Results } from "./Results.tsx";

export function ResultsDisplay(){
    const { noResult }  = useWeather()
    return (
        <div className="w-full">
            <SearchPane />
            { noResult ?
                <NoResults />
                : <Results />
            }
        </div>
    )
}