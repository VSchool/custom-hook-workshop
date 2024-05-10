import { useForm } from '../hooks/ThingHooks';
import { createRequest } from '../http/http';
import { useContext } from 'react';
import { ThingContext } from '../context/ThingProvider';


const ThingForm = () => {

    const { addThing } = useContext(ThingContext)

    const formState = useForm({
        title: "",
        description: "",
        imgUrl: ""
    })

    const { formData, handleChange, clearForm } = formState

    const handleSubmit = (e) => {
        e.preventDefault()
        createRequest(formData).then(res => addThing(res))
        clearForm()
    }

    return (
        <form
            className='new-thing-form'
            onSubmit={handleSubmit}
        >
            <h2>Add Thing</h2>
            <input
                name='title'
                value={formData.title}
                onChange={handleChange}
                placeholder='Title'
            />
            <input
                name='description'
                value={formData.description}
                onChange={handleChange}
                placeholder='Description'
            />
            <input
                name='imgUrl'
                value={formData.imgUrl}
                onChange={handleChange}
                placeholder='Image URL'
            />
            <button type='submit'>Add Thing</button>
        </form>
    );
}

export default ThingForm;