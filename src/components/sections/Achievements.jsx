import data from "@data/achievements.json";
import SectionHeader from "./common/SectionHeader";

function Achievements() {

    const { title, description } = data;

    return (
        <section className="achievement py-5 md:py-10" id="achievement">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
            </div>
        </section>
    )
}

export default Achievements;