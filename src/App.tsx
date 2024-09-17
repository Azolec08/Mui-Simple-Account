import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./features/home/components/home";
import { RootState } from "./shared/store/store";
function App() {
  const mode = useSelector((state: RootState) => state.counter.mode);

  const darkTheme = createTheme({
    palette: {
      mode: mode as "light" | "dark",
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
