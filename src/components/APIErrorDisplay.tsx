import {useWeather} from "../hooks/useWeather.ts";

export function APIErrorDisplay(){

    const { setAPIError, setLoading } = useWeather()

    function handleRetry (){
        setAPIError(false)
        setLoading(true)
    }


    return (
        <div className="flex flex-col text-center items-center gap-2 py-15 px-7 max-w-[600px]">
            <img src="/images/icon-error.svg" alt="" width="30px"/>
            <p className="text-3xl font-bold my-4">Something went wrong</p>
            <p>We couldn't connect to the server (API Error). Please try again in a few moments.</p>
            <button onClick={handleRetry} className="flex gap-3 mt-5 cursor-pointer bg-[#3c3b5d] px-4 py-2 rounded-lg">
                <img src="/images/icon-retry.svg" alt=""/>
                <span>Retry</span>
            </button>
        </div>
    )
}