import {useState} from "react";
import { helpHttp } from "../helpers/helpHttp";

export const useForm = (initialState, validateForm) => {

    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value,
        })
    }
    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(form));

        if(Object.keys(errors).length === 0){
            setLoading(true);
            helpHttp().post("https://formsubmit.co/ajax/ferreyragd1@gmail.com", {
                body: form,
                headers:{
                    "Content-Type":"application/json",
                    Accept:"application/json"
                }
            }).then(res =>{
                setLoading(false);
                setResponse(true);
                setForm(initialState);
                setTimeout(() => {
                       setResponse(false) 
                },3000);
            })
        }else{
            return
        }
    }
    
    return{
        form, errors, loading, response, handleChange, handleBlur, handleSubmit
    }
}

