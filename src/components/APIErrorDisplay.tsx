import {useWeather} from "../hooks/useWeather.ts";

export function APIErrorDisplay(){

    const { setAPIError, setLoading } = useWeather()

    function handleRetry (){
        setAPIError(false)
        setLoading(true)
    }


    return (
        <div>
            <img src="/images/icon-error.svg" alt=""/>
            <p>Something went wrong</p>
            <p>We couldn't connect to the server (API Error). Please try again in a few moments.</p>
            <button onClick={handleRetry}>
                <img src="/images/icon-retry.svg" alt=""/>
                <span>Retry</span>
            </button>
        </div>
    )
}