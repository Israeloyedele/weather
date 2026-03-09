import { useForm } from "react-hook-form"
import { getCityLocation } from "../utils/getCityLocation.ts";

type Inputs = {
    city: string
}

export function Form(){

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
            const {lat, lon} = response[0];
            console.log(response);
            console.log(lat, lon)
        } else  {
            console.log("No City Location Found");
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