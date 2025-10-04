import React from 'react';
import useInputField from '../UseInputField/UseInputField';

const HookForm = () => {

    const [name , nameOnChange] = useInputField("")
    const [email , emailOnChange] = useInputField("")
    const [password , passwordOnChange] = useInputField("")

    const handleForm = (e) => {
        e.preventDefault()
        console.log({name , email , password})
    }

    return (
        <div>
            <form onSubmit={handleForm}>
                <input type="text" name="name" placeholder='Name' onChange={nameOnChange} defaultValue={name}/> 

                <br />

                <input type="email" name="email" placeholder='Email' onChange={emailOnChange} defaultValue={email}/>

                <br />

                <input type="password" name="password" placeholder='password' onChange={passwordOnChange} defaultValue={password}/>

                <br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;