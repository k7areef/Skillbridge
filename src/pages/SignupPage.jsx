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
        id: "name",
        name: "name",
        type: "text",
        placeholder: "Enter your Name",
        autoComplete: "on",
        label: "Full Name",
        typeField: "input",
    },
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
const initialValues = { name: '', email: '', password: '' };
const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
});

function SignupPage() {
    useChangeTitle("Signup");
    return (
        <div className="signup-page">
            <main>
                {/* Signup Form */}
                <div className="signup-form bg-white py-5 md:py-10">
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
                                        <h2 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2">Sign Up</h2>
                                        <p>Create an account to unlock exclusive features.</p>
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
                                    {/* Confirmation */}
                                    <div className="confirmation flex items-center gap-2">
                                        <label>
                                            <input
                                                id="confirmation"
                                                name="confirmation"
                                                type="checkbox"
                                                className="hidden peer"
                                            />
                                            <div className="custom-checkbox w-6 h-6 rounded-sm bg-white-97 border border-white-95 flex items-center justify-center text-xs transition duration-200 ease-out will-change-auto peer-checked:bg-orange-50 peer-checked:*:scale-100">
                                                <FontAwesomeIcon icon={faCheck} className="transition duration-200 ease-out scale-0 will-change-transform text-white" />
                                            </div>
                                        </label>
                                        <label htmlFor="confirmation" className="text-grey-40 select-none cursor-pointer">I agree with Terms of Use and Privacy Policy</label>
                                    </div>
                                    {/* Submit */}
                                    <Button
                                        type="submit"
                                        className="w-full"
                                        disabled={isSubmitting}
                                    >
                                        Sign Up
                                    </Button>
                                    {/* Or */}
                                    <div className="or flex items-center gap-3">
                                        <div className="line h-px bg-white-95 flex-1"></div>
                                        <span className="text-grey-40">or</span>
                                        <div className="line h-px bg-white-95 flex-1"></div>
                                    </div>
                                    {/* Social */}
                                    <div className="social flex md:items-center gap-3 max-md:flex-col">
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
                                    {/* Footer */}
                                    <div className="footer text-center">
                                        <p>Already have an account? <Link to="/login" className="text-orange-50">Login</Link></p>
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

export default SignupPage;