const Register = () => {
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-xl rounded-lg">
                <h2 className="text-3xl font-bold text-center text-primary">Create an Account</h2>
                <form className="space-y-4">
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
                            type="url"
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
            </div>
        </div>
    );
};

export default Register;
