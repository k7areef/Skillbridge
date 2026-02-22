import Courses from "@components/sections/Courses";
import Overview from "@components/sections/Overview";

function CoursesPage() {
    return (
        <div className="courses-page">
            <main>
                <Overview page="courses" />
                <Courses />
            </main>
        </div>
    )
}

export default CoursesPage;