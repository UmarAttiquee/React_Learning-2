import { createContext } from "react";

const ToggleContext = createContext({
  themeMode: "light",
  lightTheme: () => {},
  darkTheme: () => {},
});

export default ToggleContext;
