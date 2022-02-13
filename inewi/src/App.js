/** @jsxImportSource theme-ui */
import { Routes, Route } from "react-router-dom";
import LayoutBasic from "./application/layouts/LayoutBasic";
import Index from "./application/pages/Index";
import ToWatch from "./application/pages/ToWatch";
import Favorite from "./application/pages/Favorite";
import MediaView from "./application/pages/MediaView";
import Search from "./application/pages/Search";
import Page404 from "./application/pages/Page404";
import { ThemeProvider } from "theme-ui";
import { theme } from "./application/abstract/Theme";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <div className="App">
          <Routes>
            <Route path="" element={<LayoutBasic />}>
              <Route path="" element={<Index />} />
              <Route path="/to-watch" element={<ToWatch />} />
              <Route path="/favorite" element={<Favorite />} />
              <Route path="/media/:id" element={<MediaView />} />
              <Route path="/search" element={<Search />} />
              <Route path="*" element={<Page404 />} />
            </Route>
          </Routes>
        </div>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
