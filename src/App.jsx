import { useEffect } from "react";
import { Routes,Route,useNavigationType,useLocation,} from "react-router-dom";
import CourseListings from "./pages/CourseListings";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

 
  useEffect(() => {
    let title = "";
    let Description = "";

    switch (pathname) {
      case "/":
        title = "Listing";
        Description = "This is the CourseList Page";
        break;
      default:
        title = "Page Not Found";
        Description = "The requested page does not exist";
    }

    if (title) {
      document.title = title;
    }

    if (Description) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = Description;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<CourseListings />} />
    </Routes>
  );
}

export default App;
