import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

export default function Login() {
    const history = useHistory();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        reValidateMode: "onChange",
    });
    const logIn = (data) => {
        history.push("/home")
    };

    return (
        <section className="vh-100" style={{ backgroundColor: '#508bfc' }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                            <form onSubmit={handleSubmit(logIn)}>
                                <div className="card-body p-5 text-center">
                                    <h3 className="mb-5">Sign in</h3>
                                    <div className="form-outline mb-4">
                                        {errors?.email && (
                                            <span className="text-danger font-weight-bold p-mr-6 error-msg">
                                                {" "}
                                                <p>{errors.email.message}</p>
                                            </span>
                                        )}
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            {...register("email", {
                                                required: "Please enter your email",
                                            })}
                                        />
                                        <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        {errors?.password && (
                                            <span className="text-danger font-weight-bold p-mr-6 error-msg">
                                                {" "}
                                                <p>{errors.password.message}</p>
                                            </span>
                                        )}
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            {...register("password", {
                                                required: "Please enter your password.",
                                            })}
                                        />
                                        <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                                    </div>
                                    {/* Checkbox */}
                                    <button to="/home" className="btn btn-primary btn-lg btn-block" type='submit'>Login</button>
                                    <hr className="my-4" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
