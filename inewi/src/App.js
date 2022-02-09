/** @jsxImportSource theme-ui */
import { Routes, Route } from "react-router-dom";
import LayoutBasic from "./application/layouts/LayoutBasic";
import Index from "./application/pages/Index";
import ToWatch from "./application/pages/ToWatch";
import Favorite from "./application/pages/Favorite";
import Page404 from "./application/pages/Page404";
import { ThemeProvider } from "theme-ui";
import { theme } from "./application/abstract/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="" element={<LayoutBasic />}>
            <Route path="" element={<Index />} />
            <Route path="/to-watch" element={<ToWatch />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
