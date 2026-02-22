import SocialProfiles from "@components/common/SocialProfiles";
import Button from "@components/UI/Button";
import FormikField from "@components/UI/FormikField";
import contactInfoData from "@data/contactInfo.json";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik } from "formik";
import * as Yup from 'yup';

const contactInfoIconsMaper = {
    email: faEnvelope,
    phone: faPhone,
    location: faLocationDot,
}

const fields = [
    {
        id: "firstName",
        name: "firstName",
        placeholder: "Enter First Name",
        autoComplete: "on",
        label: "First Name",
        typeField: "input",
        type: "text"
    },
    {
        id: "lastName",
        name: "lastName",
        placeholder: "Enter Last Name",
        autoComplete: "on",
        label: "Last Name",
        typeField: "input",
        type: "text"
    },
    {
        id: "email",
        name: "email",
        placeholder: "Enter your Email",
        autoComplete: "on",
        label: "Email",
        typeField: "input",
        type: "email"
    },
    {
        id: "phone",
        name: "phone",
        placeholder: "Enter Phone Number",
        autoComplete: "on",
        label: "Phone",
        typeField: "input",
        type: "tel"
    },
    {
        id: "subject",
        name: "subject",
        placeholder: "Enter your Subject",
        autoComplete: "on",
        label: "Subject",
        typeField: "input",
        type: "text",
        parentClassName: "md:col-span-2"
    },
    {
        id: "message",
        name: "message",
        placeholder: "Enter your Message here...",
        autoComplete: "on",
        label: "Message",
        typeField: "textarea",
        parentClassName: "md:col-span-2"
    }
]
const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
};
const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
});

function ContactForm() {
    return (
        <section className="contact-form py-5 md:py-10" id="contactForm">
            <div className="container">
                <div className="content-grid grid lg:grid-cols-3 gap-5 md:gap-10 bg-white rounded-lg shadow/3">
                    <div className="contact-form-container lg:col-span-2 p-5 md:p-10 border-e border-e-white-95">
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
                                // values,
                                // errors,
                                // touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                setFieldValue
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className={`fields-wrapper mb-5 md:mb-10 grid grid-cols-1 md:grid-cols-2 gap-5`}>
                                        {
                                            fields.map((field, index) => (<FormikField
                                                key={field.id || index}
                                                {...field}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                setFieldValue={setFieldValue}
                                            />))
                                        }
                                    </div>
                                    <Button
                                        type="submit"
                                        title="Submit"
                                        aria-label="Submit"
                                        disabled={isSubmitting}
                                        className="mx-auto block max-sm:w-full"
                                    >
                                        Send Your Message
                                    </Button>
                                </form>
                            )}
                        </Formik>
                    </div>
                    <div className="contact-info-container space-y-4 p-5 md:p-10">
                        {
                            contactInfoData.map((contact, index) => (<Button
                                key={contact.id || index}
                                href={contact.value}
                                title={contact.name}
                                aria-label={contact.name}
                                variant="white"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-5 rounded-md border border-white-95 bg-white-90"
                            >
                                <div className="icon-container mx-auto mb-2 flex items-center justify-center w-12 h-12 rounded-sm bg-whtie-97 border border-white-95">
                                    <FontAwesomeIcon icon={contactInfoIconsMaper[contact.icon]} />
                                </div>
                                <p className="text-center">{contact.label}</p>
                            </Button>))
                        }
                        <div className="p-5 rounded-md bg-white-99 border border-white-95">
                            <SocialProfiles className="justify-center mb-2" />
                            <p className="text-center">Social Profiles</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;