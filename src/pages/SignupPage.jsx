import Testimonials from "@components/sections/Testimonials";
import useChangeTitle from "hooks/useChangeTitle";

function SignupPage() {
    useChangeTitle("Signup");
    return (
        <div className="signup-page">
            <main>
                <Testimonials />
            </main>
        </div>
    )
}

export default SignupPage;