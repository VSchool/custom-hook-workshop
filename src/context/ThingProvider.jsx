import { createContext } from "react";
import { useThing } from "../hooks/ThingHooks";


export const ThingContext = createContext()


export const ThingProvider = ({ children }) => {

    const thingState = useThing()

    return(
        <ThingContext.Provider value={thingState}>
            {children}
        </ThingContext.Provider>
    )
}