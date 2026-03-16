import {useForm, useWatch} from "react-hook-form"
import { getCityLocation } from "../utils/getCityLocation.ts";
import { useWeather } from "../hooks/useWeather.ts";
import {useEffect, useState} from "react";

type Inputs = {
    city: string
}
type Suggestion = {
    name: string
    country: string
    latitude: number
    longitude: number
}

export function Form(){

    const { setLatLon, setNoResult, setCity, setLoading } = useWeather();
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
    const [open, setOpen] = useState(false);
    const [searchInProgress, setSearchInProgress] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<Inputs>()

    const cityInput = useWatch({
        control,
        name: "city",
        defaultValue: ""
    })

    useEffect(() => {

        if (cityInput.length < 2) {
            const less = () => setSuggestions([]);
            less();
            return
        }
        const setSearch = (value: boolean) => setSearchInProgress(value);
        setSearch(true);


        const timer = setTimeout(async () => {

            const res = await fetch(
                `https://geocoding-api.open-meteo.com/v1/search?name=${cityInput}&count=5`
            )

            const data = await res.json()

            if (data.results) {
                setSuggestions(data.results)
                setOpen(true)
                setSearchInProgress(false);
            }
            else {
                setSuggestions([])
                setSearchInProgress(false);
            }

        }, 300)

        return () => clearTimeout(timer)

    }, [cityInput])






    async function onSubmit(data: Inputs){
        reset();
        setOpen(false)
        setLoading(true)
        setNoResult(false)
        const response = await getCityLocation(data.city)
         if(response.results){
            const { latitude, longitude, name, country } = response.results[0];
            setLatLon({ lat: latitude, lon:longitude });
            setCity(`${name}, ${country}`)

        }
         else  {
            setNoResult(true)
             setLoading(false)
        }
    }

    // {errors.city && <p>Please input a city</p>} toast
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">

            <div className="relative flex gap-2 py-4 px-5 rounded-xl bg-[#302f4b]">
                <img src="/images/icon-search.svg" alt=""/>
                <input className="focus:outline-none grow"
                       placeholder="Search for a place..."
                       {...register("city", { required: true, setValueAs: (value) => value.trim() })} />



                {open && suggestions.length > 0 && (

                    <div className="absolute left-0 right-0 top-full p-2 mt-2 bg-[#302f4b] rounded-lg shadow-lg overflow-hidden z-50 max-h-60 overflow-y-auto">
                        { searchInProgress ?
                            <div className="flex gap-2 px-1">
                                <img className="animate-spin" src="/images/icon-loading.svg" alt=""/> <p>Search in progress...</p>
                            </div>
                            :
                            suggestions.map((city) => (

                            <div
                                key={`${city.name}-${city.latitude}`}
                                className="cursor-pointer py-2 px-3 hover:bg-[#3c3b5d] font-semibold rounded-md "
                                onClick={() => {
                                    setNoResult(false)
                                    setLoading(true)
                                    setLatLon({lat: city.latitude.toString(), lon: city.longitude.toString()})
                                    setCity(`${city.name}, ${city.country}`)
                                    reset()
                                    setSuggestions([])
                                    setOpen(false)
                                }}
                            >
                                {city.name}, {city.country}
                            </div>
                    ))}
                </div>
            )}
            </div>
            <input type="submit" value="Search"
                   className="w-full py-4 px-5 rounded-xl bg-[#4355db] hover:bg-[#2d1dbb] cursor-pointer font-semibold" />
        </form>
    )

}