import CourseDetails from "@components/sections/CourseDetails";
import Overview from "@components/sections/Overview";
import data from "@data/courses.json";
import { useParams } from "react-router-dom";

function CourseDetailsPage() {
    const { id } = useParams();
    const { courses } = data;
    const course = courses.find(c => c.id === Number(id));
    const { title, description } = course;
    return (
        <div className="course-details-page">
            <main>
                <Overview title={title} description={description} />
                <CourseDetails />
            </main>
        </div>
    )
}

export default CourseDetailsPage;