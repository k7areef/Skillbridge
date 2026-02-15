import data from "@data/faqs.json";
import SectionHeader from "./common/SectionHeader";
import Button from "@components/UI/Button";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Faqs() {

    const { title, description, faqs } = data;
    const [faqOpened, setFaqOpened] = React.useState(null);

    return (
        <section className="faqs py-5 md:py-10" id="Faqs">
            <div className="container">
                <div className="content-wrpper grid lg:grid-cols-3 gap-5 lg:gap-10 bg-white rounded-xl p-5 md:p-10">
                    <div className="text-area">
                        <SectionHeader
                            title={title}
                            className="mb-5"
                            description={description}
                        />
                        <Button variant="white">See All Faq's</Button>
                    </div>
                    <div className="faqs-area space-y-5 lg:col-span-2">
                        {
                            faqs.map((faq, index) => (<div className="faq-item bg-white border border-white-95 rounded-lg" key={faq.id || index}>
                                <button
                                    className="w-full text-start p-5"
                                    aria-expanded={faqOpened === faq.id}
                                    onClick={() => setFaqOpened(prev => prev === faq.id ? null : faq.id)}
                                >
                                    <div className="text-wrapper-header flex items-center justify-between gap-5">
                                        <h3 className="font-medium md:text-lg cursor-pointer">{faq.question}</h3>
                                        <div className="faq-icon-state relative w-10 h-10 flex items-center justify-center bg-orange-95 text-grey-15">
                                            <FontAwesomeIcon icon={faPlus} className={`absolute left-1/2 top-1/2 -translate-1/2 transition duration-300 ease-in-out text-red-45 ${faqOpened === faq.id ? "rotate-45" : "rotate-0"}`} />
                                        </div>
                                    </div>
                                    <div
                                        className={`grid transition-all duration-300 ease-in-out ${faqOpened === faq.id ? "grid-rows-[1fr] opacity-100 pt-2" : "grid-rows-[0fr] opacity-0"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <hr className="border-white-95 my-3" />
                                            <p>{faq.answer}</p>
                                            {
                                                faq.link && <Link to={faq.link.to} className="flex items-center justify-between bg-white-97 border border-white-95 p-3 rounded-md mt-3 transition duration-300 ease-in-out sm:hover:bg-white-99">
                                                    <span>{faq.link.text}</span>
                                                    <FontAwesomeIcon icon={faArrowRight} />
                                                </Link>
                                            }
                                        </div>
                                    </div>
                                </button>
                            </div>))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faqs;