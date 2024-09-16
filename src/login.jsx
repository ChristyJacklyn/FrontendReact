import React,{useState} from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.prevenDefault();
        console.log('Email: ', email);
        console.log('Password: ', password);
        //hadle login logic here(e.g API call)
    };

    return(
        <div>
            
        </div>
    );
}

export default Login;