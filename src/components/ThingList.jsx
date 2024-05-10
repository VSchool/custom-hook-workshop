import { useContext } from "react";
import { ThingContext } from "../context/ThingProvider";
import SingleThing from "./SingleThing";


const ThingList = () => {

    const {things} = useContext(ThingContext);

    const thingElements = things.map((thing) => {
        return (
            <SingleThing {...thing} key={thing._id} />
        )
    })

    return ( 
        <div className="thing-list">
            <h1>My Things</h1>
            {thingElements}
        </div>
     );
}
 
export default ThingList;