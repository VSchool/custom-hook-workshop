import { createContext } from "react";
import { useThing } from "../hooks/ThingHooks";


export const ThingContext = createContext()


export const ThingProvider = ({ children }) => {

    const thingState = useThing()

    const {things, getInitialThings, addThing, updateThing, deleteThing} = thingState


    return(
        <ThingContext.Provider value={{
            things,
            getInitialThings,
            addThing,
            updateThing,
            deleteThing
        }}>
            {children}
        </ThingContext.Provider>
    )
}