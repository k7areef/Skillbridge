import data from "@data/courses.json";
import SectionHeader from "./common/SectionHeader";
import Button from "@components/UI/Button";
import image1 from "@assets/images/courses/course-1.png";
import image2 from "@assets/images/courses/course-2.png";
import image3 from "@assets/images/courses/course-3.png";
import image4 from "@assets/images/courses/course-4.png";
import image5 from "@assets/images/courses/course-5.png";
import image6 from "@assets/images/courses/course-6.png";

const imagesMaper = {
    1: image1,
    2: image2,
    3: image3,
    4: image4,
    5: image5,
    6: image6
}

function OurCourses() {

    const { title, description, courses } = data;

    return (
        <section className="our-courses-section py-5 md:py-10" id="ourCourses">
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
                <div className="courses-grid grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
                    {
                        courses.map((course, index) => (<div className="course-card flex flex-col gap-5 bg-white border border-white-95 rounded-xl p-5" key={course.id || index}>
                            <div className="course-banner-container aspect-video">
                                <img
                                    alt={course.title}
                                    src={imagesMaper[course.id]}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <div className="course-info flex items-center gap-3 flex-wrap">
                                <div className="duration py-2 px-4 rounded-none bg-white border border-white-95">
                                    {course.duration}
                                </div>
                                <div className="level py-2 px-4 rounded-none bg-white border border-white-95">
                                    {course.level}
                                </div>
                                <div className="teacher sm:ms-auto font-medium">
                                    {course.teacher}
                                </div>
                            </div>
                            <div className="text-wrapper">
                                <h3 className="font-semibold text-xl md:text-2xl mb-2">{course.title}</h3>
                                <p>{course.description}</p>
                            </div>
                            <Button
                                variant="secondary"
                                to={`/courses/${course.id}`}
                                className="text-center mt-auto"
                            >
                                Get it Now
                            </Button>
                        </div>))
                    }
                </div>
            </div>
        </section>
    )
}

export default OurCourses;