import data from "@data/courses.json";
import SectionHeader from "./common/SectionHeader";
import Button from "@components/UI/Button";

function Courses() {

    const { title, description } = data;

    return (
        <section className="courses-section py-5 md:py-10" id="courses">
            <div className="container">
                <SectionHeader
                    title={title}
                    description={description}
                >
                    <Button
                        to={'/courses'}
                        variant="secondary"
                    >
                        View All
                    </Button>
                </SectionHeader>
            </div>
        </section>
    )
}

export default Courses;