import { createContext } from "react";
import { useThing } from "../hooks/ThingHooks";


export const ThingContext = createContext()


export const ThingProvider = ({ children }) => {

    const thingAPI = useThing()

    return(
        <ThingContext.Provider value={thingAPI}>
            {children}
        </ThingContext.Provider>
    )
}