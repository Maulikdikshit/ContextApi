import logo from "./logo.svg";
import "./App.css";

import UserInfoContext from "./context/UserInfoContext";
import BlogPage from "./components/BlogPage";

import { ThemeProvider } from "./context/ThemeProvider";
import ContentComponent from "./components/ContentComponent";

function App() {
  const userInfo = { username: "Admin", isAdmin: true };
  return (
    <ThemeProvider>
      <ContentComponent></ContentComponent>
    </ThemeProvider>

    // <div className="App">
    //   <UserInfoContext.Provider value={userInfo}>
    //     <BlogPage></BlogPage>
    //   </UserInfoContext.Provider>
    // </div>
  );
}

export default App;
