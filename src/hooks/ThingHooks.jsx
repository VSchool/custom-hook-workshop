import { useState } from "react";


export const useThing = () => {
    const [things, setThings] = useState([])

    const getInitialThings = (data) => {
        setThings(data)
    }

    const addThing = (thing) => {
        setThings(prevThings => [...prevThings, thing])
    }

    const deleteThing = (id) => {
        setThings(prevThings => prevThings.filter(thing => thing._id !== id))
    }

    const updateThing = (update) => {
        setThings(prevThings => prevThings.map(thing => thing._id === update._id ? update : thing))
    }


    return {
        things,
        getInitialThings,
        addThing,
        updateThing,
        deleteThing
    }
}

export const useForm = (initState) => {
    const [formData, setFormData] = useState(initState)
    const [isFormSeen, setIsFormSeen] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const clearForm = () => {
        setFormData(initState)
    }

    const toggleForm = () => {
        setIsFormSeen(prevIsFormSeen =>!prevIsFormSeen)
    }

    return {
        formData,
        handleChange,
        clearForm,
        isFormSeen,
        toggleForm
    }
}