import Button from "@components/UI/Button";
import SectionHeader from "./common/SectionHeader";
import data from "@data/plans.json";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

/**
 * @typedef {Object} CustomPlansProps
 * @property {'home' | 'pricing'} [page]
 */

/**
 * @param {CustomPlansProps} props
 */


function Plans({ page = "home", ...props }) {

    const { title, description, plans, features } = data;
    const [planType, setPlanType] = React.useState("monthly")

    return (
        <section className={`plans py-5 md:py-10 ${props.className}`} id="plans" {...props}>
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                    className={`${page === "pricing" ? "[&>.text-wrapper]:hidden flex items-center justify-center" : ""}`}
                >
                    <div className="togglers flex items-center justify-center gap-2">
                        <Button
                            variant={planType === "monthly" ? "primary" : "ghost"}
                            onClick={() => setPlanType("monthly")}
                        >
                            Monthly
                        </Button>
                        <Button
                            variant={planType === "monthly" ? "ghost" : "primary"}
                            onClick={() => setPlanType("yearly")}
                        >
                            Yearly
                        </Button>
                    </div>
                </SectionHeader>
                <div className="plans-wrapper grid lg:grid-cols-2 gap-5 bg-white rounded-xl p-5 md:p-10">
                    {
                        plans.map((plan, index) => (<div className="plan-card bg-white-99 border border-white-95 p-5 rounded-lg" key={index}>
                            <div className="plan-name bg-orange-97 border border-orange-90 rounded-md p-4 mb-5 text-center font-medium">{plan.name}</div>
                            <div className="plane-price flex items-end justify-center gap-1 mb-5">
                                <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">{plan.price[planType]}</h3>
                                <span className="font-medium text-grey-30">/{planType.replace("ly", "")}</span>
                            </div>
                            <div className="plan-features p-4 bg-white border border-white-95 rounded-t-md">
                                <h3 className="font-medium text-lg text-center mb-3">Available Features</h3>
                                <ul className="features space-y-2">
                                    {
                                        features.map((feat, index) => (<li key={index} className="p-3 rounded-md flex items-center gap-2 border border-white-95">
                                            <div className={`icon-container w-7 h-7 rounded-sm ${plan.featuresIds.includes(feat.id) ? "bg-orange-95" : "bg-white border border-white-95"} text-grey-15 flex items-center justify-center shrink-0`}>
                                                <FontAwesomeIcon icon={plan.featuresIds.includes(feat.id) ? faCheck : faXmark} />
                                            </div>
                                            <p className="text-grey-30!">{feat.name}</p>
                                        </li>))
                                    }
                                </ul>
                            </div>
                            <Button className="start-btn text-center w-full rounded-t-none">
                                Get Started
                            </Button>
                        </div>))
                    }
                </div>
            </div>
        </section>
    )
}

export default Plans;