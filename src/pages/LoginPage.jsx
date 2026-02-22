import Testimonials from "@components/sections/Testimonials";
import useChangeTitle from "@hooks/useChangeTitle";

function LoginPage() {
    useChangeTitle("Login");
    return (
        <div className="login-page">
            <main>
                <Testimonials />
            </main>
        </div>
    )
}

export default LoginPage;