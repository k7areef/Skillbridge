import data from "@data/achievements.json";
import SectionHeader from "./common/SectionHeader";
import icon1Svg from "@assets/icons/achievements/1.svg";
import icon2Svg from "@assets/icons/achievements/2.svg";
import icon3Svg from "@assets/icons/achievements/3.svg";
import icon4Svg from "@assets/icons/achievements/4.svg";

const iconsMaper = {
    1: icon1Svg,
    2: icon2Svg,
    3: icon3Svg,
    4: icon4Svg,
}

function Achievements() {

    const { title, description, achievements } = data;

    return (
        <section className="achievement py-5 md:py-10" id="achievement">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                />
                <div className="cards-grid grid md:grid-cols-2 gap-5">
                    {
                        achievements.map((achievement, index) => (<div className="achievement-card bg-white rounded-lg p-5" key={achievement.id || index}>
                            <div className="icon-container w-12 h-12 rounded-md bg-orange-97 border border-orange-90 flex items-center justify-center mb-3">
                                <img
                                    src={iconsMaper[achievement.id]}
                                    alt={achievement.title}
                                    width={30}
                                />
                            </div>
                            <h3 className="font-medium text-lg sm:text-xl md:text-2xl mb-2">{achievement.title}</h3>
                            <p>{achievement.description}</p>
                        </div>))
                    }
                </div>
            </div>
        </section>
    )
}

export default Achievements;