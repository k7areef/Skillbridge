import data from "@data/ourGoals.json";
import SectionHeader from "./common/SectionHeader";

function OurGoals() {

    const { title, description } = data;

    return (
        <section className="our-goals py-5 md:py-10" id="ourGoals">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
            </div>
        </section>
    )
}

export default OurGoals;