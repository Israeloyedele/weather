import { type RefObject, useEffect } from "react"

export function useOutsideClick<T extends HTMLElement>(
    ref: RefObject<T | null>,
    handler: () => void
) {

    useEffect(() => {

        function handleClick(e: MouseEvent) {

            if (!ref?.current) return

            if (!ref.current.contains(e.target as Node)) {
                handler()
            }

        }

        document.addEventListener("mousedown", handleClick)

        return () => {
            document.removeEventListener("mousedown", handleClick)
        }

    }, [ref, handler])
}