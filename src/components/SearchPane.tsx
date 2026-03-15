import { Form } from "./Form.tsx";

export function SearchPane() {
    return (
        <div>
            <h1 style={{
                fontFamily: "Bricolage Grotesque"
            }} className="text-3xl leading-12 py-10 text-center font-bold font-[Bricolage Grotesque]">How's the sky looking today?</h1>
            <Form/>
        </div>
    )
}