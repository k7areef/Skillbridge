import ContactForm from "@components/sections/ContactForm";
import ContactInfo from "@components/sections/ContactInfo";
import Overview from "@components/sections/Overview";
import SocialLinks from "@components/sections/SocialLinks";

function ContactPage() {
    return (
        <div className="contact-page">
            <Overview page="contact" />
            <ContactInfo />
            <ContactForm />
            <SocialLinks />
        </div>
    )
}

export default ContactPage;