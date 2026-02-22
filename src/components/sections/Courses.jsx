import data from "@data/courses.json";
import SectionHeader from "./common/SectionHeader";
import Button from "@components/UI/Button";
import image1 from "@assets/images/courses/course-1.png";
import image2 from "@assets/images/courses/course-2.png";
import image3 from "@assets/images/courses/course-3.png";
import image4 from "@assets/images/courses/course-4.png";
import image5 from "@assets/images/courses/course-5.png";

const imagesMaper = {
    1: image1,
    2: image2,
    3: image3,
    4: image4,
    5: image5
}

function Courses() {

    const { courses } = data;

    return (
        <section className="courses-section py-5 md:py-10" id="courses">
            <div className="container">
                <div className="courses-wrapper space-y-5">
                    {
                        courses.filter(c => c.curriculum).map((course, index) => (<section className={`course-section py-5 md:py-10 p-5 bg-white rounded-xl shadow/3`} id={`course-${index + 1}`} key={course.id || index}>
                            <SectionHeader
                                title={course.title}
                                description={course.description}
                            >
                                <Button
                                    variant="white"
                                    to={`/courses/${course.id}`}
                                >
                                    View Course
                                </Button>
                            </SectionHeader>
                            <div className="course-images flex items-center gap-5 mb-5">
                                <div className="image-container w-full aspect-video">
                                    <img
                                        src={imagesMaper[course.id]}
                                        alt="Course Image"
                                        className="w-full rounded-md object-cover"
                                    />
                                </div>
                                <div className="image-container w-full aspect-video">
                                    <img
                                        src={imagesMaper[course.id]}
                                        alt="Course Image"
                                        className="w-full rounded-md object-cover"
                                    />
                                </div>
                                <div className="image-container w-full aspect-video">
                                    <img
                                        src={imagesMaper[course.id]}
                                        alt="Course Image"
                                        className="w-full rounded-md object-cover"
                                    />
                                </div>
                            </div>
                            <div className="course-info flex items-center gap-3 flex-wrap mb-5 md:mb-10">
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
                            <div className="curriculum rounded-lg border border-white/95">
                                <div className="head p-3 border-b border-b-white-95">
                                    <h3 className="font-semibold text-lg">Curriculum</h3>
                                </div>
                                <div className="body p-3 flex items-center gap-3">
                                    {
                                        course.curriculum.map((chapter, index) => (<div className="chapter w-full" key={chapter.id || index}>
                                            <div className="chapter-num font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2">{String(index + 1).padStart(2, "0")}</div>
                                            <h4 className="text-grey-20 font-medium text-lg">{chapter.title}</h4>
                                        </div>))
                                    }
                                </div>
                            </div>
                        </section>))
                    }
                </div>
            </div>
        </section>
    )
}

export default Courses;