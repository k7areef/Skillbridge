import Courses from "@components/sections/Courses";
import Overview from "@components/sections/Overview";
import useChangeTitle from "hooks/useChangeTitle";

function CoursesPage() {
    useChangeTitle("Courses");
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