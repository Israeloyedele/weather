import { useForm } from "react-hook-form"
import { getCityLocation } from "../utils/getCityLocation.ts";
import { WeatherContext } from "../context/weatherContext.ts";
import { useContext } from "react";
import { useWeather } from "../hooks/useWeather.ts";

type Inputs = {
    city: string
}

export function Form(){

    const context = useContext(WeatherContext);
    if (!context){
        throw new Error("Error")
    }
    const { setLatLon, setNoResult } = useWeather();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>()


    async function onSubmit(data: Inputs){
        reset();
        const response = await getCityLocation(data.city)
         if(response[0]){
            const { lat, lon } = response[0];

            setLatLon({ lat:lat, lon:lon });
            setNoResult(false)

        } else  {
            console.log("No City Location Found");
            setNoResult(true)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("city", { required: true, setValueAs: (value) => value.trim() })} />
            {errors.city && <p>Please input a city</p>}

            <input type="submit" value="Search" />
        </form>
    )

}