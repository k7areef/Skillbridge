import ContactForm from "@components/sections/ContactForm";
import Overview from "@components/sections/Overview";

function ContactPage() {
    return (
        <div className="contact-page">
            <main>
                <Overview page="contact" />
                <ContactForm />
            </main>
        </div>
    )
}

export default ContactPage;