import "./App.css";
import MainLayout from "./MainLayout";
import NavigationBar from "./NavigationBar";
import Post from "./Post";
import { Route, Routes } from "react-router-dom";
import PostPage from "./pages/PostPage";

function App() {
  return (
    // <Routes>
    //   <Route
    //     index
    //     element={
    //       <main>
    //         <NavigationBar />
    //         <Post />
    //         <Post />
    //         <Post />
    //       </main>
    //     }
    //   />

    //   <Route path="/login" element={<div>Login</div>} />
    // </Routes>

    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<PostPage />}></Route>
        <Route path="/login" element={<div>Login</div>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
