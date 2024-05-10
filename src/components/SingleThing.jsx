import { useForm } from "../hooks/ThingHooks";
import { editRequest } from "../http/http";
import { useContext } from "react";
import { ThingContext } from "../context/ThingProvider";
import { deleteRequest } from "../http/http";

const SingleThing = (props) => {

    const { title, description, imgUrl, _id } = props
    const { updateThing, deleteThing } = useContext(ThingContext)

    const formState = useForm({
        title, description, imgUrl
    })

    const { formData, handleChange, isFormSeen, toggleForm } = formState

    const handleSubmit = (e) => {
        e.preventDefault()
        editRequest(_id, formData).then(res => updateThing(res))
        toggleForm()
    }

    const handleDelete = () => {
        deleteRequest(_id).then(() => deleteThing(_id))
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