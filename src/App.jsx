import { Route, Routes } from "react-router-dom";
// Pages:
import AboutPage from "@pages/AboutPage";
import ContactPage from "@pages/ContactPage";
import CourseDetailsPage from "@pages/CourseDetailsPage";
import CoursesPage from "@pages/CoursesPage";
import HomePage from "@pages/HomePage";
import LoginPage from "@pages/LoginPage";
import PricingPage from "@pages/PricingPage";
import SignupPage from "@pages/SignupPage";
// Common Components:
import Navigation from "@components/layout/Navigation";
import Footer from "@components/layout/Footer";

function App() {
  return (
    <div className="App bg-white-97 text-grey-15 min-h-screen">
      {/* Navigation Bar */}
      <Navigation />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:id" element={<CourseDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App;