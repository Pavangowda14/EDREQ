import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Course from "./pages/Course";
import StudyMaterial from "./pages/StudyMaterial";
import StudyMaterials from "./pages/StudyMaterials";
import StudyMaterialView from "./pages/StudyMaterialView"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyCourses from "./pages/MyCourses";
import Footer from "./components/Footer";
import Lessons from "./pages/Lessons";
import Lesson from "./pages/Lesson";
import AboutUs from "./pages/AboutUs";
import WhyUs from "./pages/WhyUs";

function App() {
  return (
    <div className="pt-[5.5rem]">
        <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<Course />} />
          <Route path="/study-material/:id" element={<StudyMaterial />} />
          <Route path="/study-materials" element={<StudyMaterials />} />
          <Route path="/study-material-view/:id" element={<StudyMaterialView />} />
          <Route path="/MyCourses" element={<MyCourses />} />
          <Route path="/lessons/:id" element={<Lessons />} />
          <Route path="/course/:courseId/lesson/:lessonId" element={<Lesson />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/why-edreq" element={<WhyUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
    </UserProvider>
      </div>
  );
}

export default App;
