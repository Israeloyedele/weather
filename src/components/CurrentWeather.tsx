import { Current } from "./Current.tsx";
import { CurrentPane } from "./CurrentPane.tsx";

export function CurrentWeather(){
    return (
        <div>
            <Current />
            <CurrentPane />
        </div>
    )
}