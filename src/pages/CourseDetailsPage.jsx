import CourseDetails from "@components/sections/CourseDetails";
import Overview from "@components/sections/Overview";

function CourseDetailsPage() {
    return (
        <div className="course-details-page">
            <Overview />
            <CourseDetails />
        </div>
    )
}

export default CourseDetailsPage;