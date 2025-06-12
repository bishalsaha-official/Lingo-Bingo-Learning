import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Register = () => {
    const {setUser, createUser} = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState('')

    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.fullName.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password)

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;

        if(password.length < 6){
            return setErrorMessage('password must be at least six characters')
        }

        if(!passwordRegex.test(password)){
            return setErrorMessage("Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.")
        }

        createUser(email, password)
        .then(result =>{
            setUser(result)
            console.log(result)
            Navigate('/')
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-xl rounded-lg">
                <h2 className="text-3xl font-bold text-center text-primary">Create an Account</h2>
                <form onSubmit={handleRegister} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="label" htmlFor="name">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your full name"
                            className="input input-bordered w-full"
                            name="fullName"
                        />
                    </div>

                    {/* Photo URL */}
                    <div>
                        <label className="label" htmlFor="photo">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            id="photo"
                            placeholder="Link to your profile photo"
                            className="input input-bordered w-full"
                            name="photo"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="label" htmlFor="email">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                            name="email"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="label" htmlFor="password">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter a strong password"
                            className="input input-bordered w-full"
                            name="password"
                            required
                        />
                    </div>

                    {/* Register Button */}
                    <div className="pt-2">
                        <button type="submit" className="btn btn-primary w-full">
                            Register
                        </button>
                    </div>
                </form>
                {
                    errorMessage ? <p>{errorMessage}</p> : ''
                }
                <p className="text-xl font bold">All ready Have an Account? <Link className="text-red-500" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;
