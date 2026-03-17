import { Form } from "./Form.tsx";

export function SearchPane() {
    return (
        <div className="lg:flex lg:flex-col items-center justify-center gap-10">
            <h1 className="text-3xl lg:text-5xl leading-12 py-10 text-center font-bold font-[Bricolage_Grotesque]">How's the sky looking today?</h1>
            <Form/>
        </div>
    )
}