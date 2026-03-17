export function Loader(){
    return (
        <div className="flex justify-center items-center w-full flex-col py-15">
            <span className="loader relative block w-[12px] h-[12px] rounded-[50%] text-white my-[15px] mx-auto animate-[loader_1s_linear_infinite_alternate]"></span>
            <p>Loading...</p>
        </div>
    )
}