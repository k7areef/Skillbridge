import Testimonials from "@components/sections/Testimonials";
import Button from "@components/UI/Button";
import FormikField from "@components/UI/FormikField";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useChangeTitle from "@hooks/useChangeTitle";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup';

const fields = [
    {
        id: "email",
        name: "email",
        type: "email",
        placeholder: "Enter your Email",
        autoComplete: "on",
        label: "Email",
        typeField: "input",
    },
    {
        id: "password",
        name: "password",
        type: "password",
        placeholder: "Enter your Password",
        label: "Password",
        typeField: "input",
    }
];
const initialValues = { email: '', password: '' };
const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
});

function LoginPage() {
    useChangeTitle("Login");
    return (
        <div className="login-page">
            <main>
                {/* Login Form */}
                <div className="login-form bg-white py-5 md:py-10">
                    <div className="container">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >
                            {({
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                            }) => (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Header */}
                                    <div className="header text-center">
                                        <h2 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2">Login</h2>
                                        <p>Welcome back! Please log in to access your account.</p>
                                    </div>
                                    {/* Fields */}
                                    <div className="fields-wrapper space-y-5">
                                        {
                                            fields.map((field, index) => (<FormikField
                                                key={index}
                                                {...{
                                                    ...field,
                                                    onChange: handleChange,
                                                    onBlur: handleBlur,
                                                }}
                                            />))
                                        }
                                    </div>
                                    {/* Forgot Password */}
                                    <div className="forgot-password">
                                        <Link to="/login" className="text-grey-30 block w-fit ms-auto transition duration-200 ease-out will-change-auto sm:hover:text-orange-50">Forgot Password?</Link>
                                    </div>
                                    {/* Remember Me */}
                                    <div className="remember-me flex items-center gap-2">
                                        <label>
                                            <input
                                                id="rememberMe"
                                                name="rememberMe"
                                                type="checkbox"
                                                className="hidden peer"
                                            />
                                            <div className="custom-checkbox w-6 h-6 rounded-sm bg-white-97 border border-white-95 flex items-center justify-center text-xs transition duration-200 ease-out will-change-auto peer-checked:bg-orange-50 peer-checked:*:scale-100">
                                                <FontAwesomeIcon icon={faCheck} className="transition duration-200 ease-out scale-0 will-change-transform text-white" />
                                            </div>
                                        </label>
                                        <label htmlFor="rememberMe" className="text-grey-40 select-none cursor-pointer">Remember Me</label>
                                    </div>
                                    {/* Submit */}
                                    <Button
                                        type="submit"
                                        className="w-full"
                                        disabled={isSubmitting}
                                    >
                                        Login
                                    </Button>
                                    {/* Or */}
                                    <div className="or flex items-center gap-3">
                                        <div className="line h-px bg-white-95 flex-1"></div>
                                        <span className="text-grey-40">or</span>
                                        <div className="line h-px bg-white-95 flex-1"></div>
                                    </div>
                                    {/* Social */}
                                    <div className="social flex items-center gap-3">
                                        <Button
                                            variant="white"
                                            className="w-full"
                                        >
                                            <FontAwesomeIcon icon={faGoogle} />
                                            <span className="ms-2">Login with Google</span>
                                        </Button>
                                        <Button
                                            variant="white"
                                            className="w-full"
                                        >
                                            <FontAwesomeIcon icon={faFacebook} />
                                            <span className="ms-2">Login with Facebook</span>
                                        </Button>
                                    </div>
                                    {/* Signup */}
                                    <div className="signup text-center">
                                        <p>Don't have an account? <Link to="/signup" className="text-orange-50 font-semibold">Sign Up</Link></p>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
                <Testimonials />
            </main>
        </div>
    )
}

export default LoginPage;