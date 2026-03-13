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

        if (cityInput.length < 3) {
            const less = () => setSuggestions([]);
            less();
            return
        }

        const timer = setTimeout(async () => {

            const res = await fetch(
                `https://geocoding-api.open-meteo.com/v1/search?name=${cityInput}&count=5`
            )

            const data = await res.json()

            if (data.results) {
                setSuggestions(data.results)
                setOpen(true)
            }

        }, 300)

        return () => clearTimeout(timer)

    }, [cityInput])






    async function onSubmit(data: Inputs){
        reset();
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

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">

            <div className="relative">
            <input {...register("city", { required: true, setValueAs: (value) => value.trim() })} />
            {errors.city && <p>Please input a city</p>}


            {open && suggestions.length > 0 && (

                <div className="absolute left-0 right-0 top-full mt-2 bg-slate-800 rounded-lg shadow-lg overflow-hidden z-50 max-h-60 overflow-y-auto">
                    {suggestions.map((city) => (

                        <div
                            key={`${city.name}-${city.latitude}`}
                            className="cursor-pointer"
                            onClick={() => {
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
            <input type="submit" value="Search" className="w-full" />
        </form>
    )

}