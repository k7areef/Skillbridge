import CoursesDetails from "@components/sections/CoursesDetails";
import Overview from "@components/sections/Overview";

function CoursesPage() {
    return (
        <div className="courses-page">
            <Overview page="courses" />
            <CoursesDetails />
        </div>
    )
}

export default CoursesPage;