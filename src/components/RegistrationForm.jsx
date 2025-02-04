import '../App.css';
import React, {useState} from 'react';

function RegistrationForm(){

    const[values, setValues] = useState({
        firstName:'',
        lastName:'',
        email:''
    });

    const handleInputChange = (event)=>{
        event.preventDefault();

        const{name, value} = event.target;
        setValues((values)=>({
            ...values,
            [name]:value
        }));
    };

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(values.firstName && values.lastName && values.email){
            setValid(true);
        }
        setSubmitted(true);
    }



    
    return(
    <>
    <h1>form</h1>
    <form onSubmit={handleSubmit} id="form">
        <input onChange={handleInputChange} type="text" name='firstName' value={values.firstName} placeholder="Insert here your name" />

        <input onChange={handleInputChange} type="text"  name='lastName' value= {values.lastName} placeholder="Insert here your surname"/>
        
        <input onChange={handleInputChange} type="email" name="email" id="email" placeholder="Insert here your email" />
        
        {/* onClick={() => resetForm()} */}
        <button type='submit' value="Reset Form"  > Send</button>
        {submitted && valid && (
            <div className="success-message">
                <h3>
                {" "}
                Welcome {values.firstName} {values.lastName}{" "}
                </h3>
                <div> Your registration was successful! </div>
            </div>
        )}
    </form>
    </>
    )

}
export default RegistrationForm;
