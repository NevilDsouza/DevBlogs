import "./App.css";
import MainLayout from "./MainLayout";
import NavigationBar from "./NavigationBar";
import Post from "./Post";
import { Route, Routes } from "react-router-dom";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<PostPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/create" element={<CreatePost />}></Route>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
