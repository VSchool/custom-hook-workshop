import { useForm } from "../hooks/ThingHooks";
import { useContext } from "react";
import { ThingContext } from "../context/ThingProvider";

const SingleThing = (props) => {

    const { title, description, imgUrl, _id } = props
    const { updateThing, deleteThing } = useContext(ThingContext)

    const formState = useForm({
        title, description, imgUrl
    })

    const { formData, handleChange, isFormSeen, toggleForm } = formState

    const handleSubmit = (e) => {
        e.preventDefault()
        updateThing(_id, formData)
        toggleForm()
    }

    const handleDelete = () => {
        deleteThing(_id)
    }


    return (

        <div className="thing-container">
            <img src={imgUrl} alt={title} />
            <h1>Title: {title}</h1>
            <h2>Description: {description}</h2>
            {!isFormSeen && <>
                <button onClick={handleDelete}>Delete Thing</button>
                <button onClick={toggleForm}>Edit Thing</button>
            </>}

                {isFormSeen &&
                <form
                    onSubmit={handleSubmit}
                    className="new-thing-form"
                >
                    <input
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <input
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                    <input
                        name="imgUrl"
                        value={formData.imgUrl}
                        onChange={handleChange}
                    />
                    <button type="submit">Update Thing</button>
                    <button>Cancel</button>
                </form>}
        </div>

    );
}

export default SingleThing;