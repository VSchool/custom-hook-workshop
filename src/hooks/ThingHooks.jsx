import { useState } from "react";
import { getRequest, createRequest, editRequest, deleteRequest } from "../http/http";


export const useThing = () => {
    const [things, setThings] = useState([])

    const getInitialThings = () => {
        getRequest().then(data => setThings(data))
    }

    const addThing = (thing) => {
        createRequest(thing).then(data => setThings(prevThings => [...prevThings, data]))
    }

    const deleteThing = (id) => {
        deleteRequest(id).then(() => setThings(prevThings => prevThings.filter(thing => thing._id !== id)))
    }

    const updateThing = (id, update) => {
        editRequest(id, update).then(data => setThings(prevThings => prevThings.map(thing => thing._id === data._id ? data : thing)))
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