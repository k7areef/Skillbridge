import Courses from "@components/sections/Courses";
import Overview from "@components/sections/Overview";

function CoursesPage() {
    return (
        <div className="courses-page">
            <Overview page="courses" />
            <Courses />
        </div>
    )
}

export default CoursesPage;