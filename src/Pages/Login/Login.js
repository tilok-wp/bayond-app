import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useToken from '../../hooks/useToken';
import "./Login.css";
import { FaDiscourse } from 'react-icons/fa';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || gUser);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])
    if (user || gUser) {
        navigate(from, { replace: true })
    }

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <div className='h-screen grid grid-cols-1 relative background-image'>
            <div className='flex  justify-center items-center '>

                <div class="hero min-h-screen left-side">
                    <div class="hero-content flex-col lg:flex-row">
                        <div className='text-white'>
                            <h1 class="text-2xl font-bold">Bayond</h1>
                            <p class="py-6 text-5xl">Log in to your <br /> account</p>
                            <p class="pt-7 pb-2">Don't have an account?</p>
                            <Link className='text-primary' to="/signup">Sign Up Now</Link>
                        </div>
                    </div>
                </div>
                <div class="right-side">
                    <div className="card shadow-2xl mr-14 bg-white">
                        <div className="card-body">

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-control">

                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="input input-bordered bg-slate-300"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is Required'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Provide a valid Email'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control w-full ">

                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="input input-bordered bg-slate-300"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Password is Required'
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Must be 6 characters or longer'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    </label>
                                </div>

                                {signInError}
                                <div className='flex justify-between'>
                                    <input className='btn w-full bg-red-500 max-w-xs text-white' type="submit" value="Login" />
                                    <input className='btn w-full max-w-xs mr-0 text-white' type="submit" value="Forget Password" />
                                </div>
                            </form>
                            {/* <p><small>New to Doctors Portal <Link className='text-primary' to="/signup">Create New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Continue with Google</button> */}

                        </div>

                    </div>

                </div>
                {/* </div>
</div> */}



            </div >
            <div className='flex justify-end bottom-0 right-0 mb-7 mr-7 absolute message-icon'>
                <button><FaDiscourse /></button>
            </div>
        </div>
    );
};

export default Login;