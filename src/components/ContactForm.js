import React from "react";
import {useForm} from "../hooks/useForm";
import Loader from "./Loader";
import Message from "./Message";

const initialForm = {
    name:"",
    email:"",
    subject:"",
    comments:""
}

const validateForm = (form) => {
    let errors={};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if(!form.name.trim()){
        errors.name = "El campo nombre es requrido";
    }else if(!regexName.test(form.name.trim())){
        errors.name = "El campo nombre sólo acepta letras y espacios en blanco"
    }

     if(!form.email.trim()){
        errors.email = "El campo email es requrido";
    }else if(!regexEmail.test(form.email.trim())){
        errors.email = "El campo email es incorrecto"
    }

     if(!form.subject.trim()){
        errors.subject = "El campo asunto a tratar es requrido";
    }

     if(!form.comments.trim()){
        errors.comments = "El campo comentarios es requrido";
    }else if(!regexComments.test(form.comments.trim())){
        errors.comments = "El campo comentarios no debe exceder los 255 caracteres"
    }

    return errors;

}
const ContactForm = () => {

    const {form, errors, loading, response, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validateForm);

    return(
        <div>
            <h1>Formulario de Contacto</h1>
            <form onSubmit={handleSubmit}>
                <input  
                    type="text" 
                    name="name" 
                    value={form.name} 
                    placeholder="Ingrese su nombre" 
                    onChange={handleChange} 
                    onBlur={handleBlur} 
                    />
                {
                    errors.name && <p>{errors.name}</p>
                }
                <input  
                    type="email" 
                    name="email" 
                    value={form.email} 
                    placeholder="Ingrese su mail" 
                    onChange={handleChange} 
                    onBlur={handleBlur} 
                     />
                {
                    errors.email && <p>{errors.email}</p>
                }
                <input  
                    type="text" 
                    name="subject" 
                    value={form.subject} 
                    placeholder="Asunto a tratar" 
                    onChange={handleChange} 
                    onBlur={handleBlur} 
                     />
                {
                    errors.subject && <p>{errors.subject}</p>
                }
                <textarea
                     name="comments" 
                    cols="50" 
                    rows="10" 
                    placeholder="Escribe tu comentarios"
                    value={form.comments}
                     onChange={handleChange} 
                    onBlur={handleBlur} 
                    ></textarea>
                {
                    errors.comments && <p>{errors.comments}</p>
                }
                <input type="submit" value="Enviar" />
            </form>
            {
                loading && <Loader />
            }
            {
                response && <Message  msg="Los datos se han enviado" bgColor="#198754"/>
            }
        </div>
    )
}

export default ContactForm;