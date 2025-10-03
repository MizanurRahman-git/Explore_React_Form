import React, { useState } from 'react';

const ControledField = () => {

    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleForm = (e) =>{
        e.preventDefault()
        console.log(e.target)
    }


    const handlePasswordOnChange= (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)

        if(password.length < 6){
            setError('Password Must be 6 Characters or longer')
        } else {
            setError('')
        }
    }



    return (
        <div>
            <form onSubmit={handleForm}>
                <input type="email" name='email' placeholder='Email' required/>

                <br />

                <input type="password" name="password" placeholder='Password' onChange={handlePasswordOnChange} defaultValue={password} required />

                <br />

                <input type="submit" value="Submit" />
            </form>
            <p style={{color:'red'}}>{error}</p>
        </div>
    );
};

export default ControledField;