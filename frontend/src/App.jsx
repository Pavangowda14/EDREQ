import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import Courses from "./pages/courses/Courses";
import Course from "./pages/course_deatils/Course";
import StudyMaterial from "./pages/study_materials/StudyMaterial";
import StudyMaterials from "./pages/study_materials/StudyMaterials";
import StudyMaterialView from "./pages/study_materials/StudyMaterialView";
import Login from "./pages/auth/Login";
import MyCourses from "./pages/my_courses/MyCourses";
import Footer from "./components/Footer";
import Lessons from "./pages/lessons/Lessons";
import Lesson from "./pages/lessons/Lesson";
import AboutUs from "./pages/about_us/AboutUs";
import WhyUs from "./pages/WhyUs";
import MyProfile from "./pages/my_profile/MyProfile";
import VerifyEmail from "./pages/auth/VerifyEmail";
import { ToastProvider } from "./shared/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="pt-[5.5rem] w-full m-0">
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <UserProvider>
            <Header />
            <ToastContainer
              className="w-full m-0 p-0 top-0 text-center"
              limit={1}
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/course/:id" element={<Course />} />
              <Route path="/study-material/:id" element={<StudyMaterial />} />
              <Route path="/study-materials" element={<StudyMaterials />} />
              <Route
                path="/study-material-view/:id"
                element={<StudyMaterialView />}
              />
              <Route path="/my-courses" element={<MyCourses />} />
              <Route path="/my-profile" element={<MyProfile />} />
              <Route path="/lessons/:id" element={<Lessons />} />
              <Route
                path="/course/:courseId/lesson/:lessonId"
                element={<Lesson />}
              />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/why-edreq" element={<WhyUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/verify-email" element={<VerifyEmail />} />
            </Routes>
            <Footer />
          </UserProvider>
        </ToastProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
