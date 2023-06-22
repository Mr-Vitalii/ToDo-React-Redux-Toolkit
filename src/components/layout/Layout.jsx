
import { useTheme } from "../../hooks/useTheme";


const Layout = ({ children }) => {

  const { isDark } = useTheme();

  const dark = isDark ? "" : "dark";

  return <div className={`layout ${dark}`}>{children}</div>;
};

export { Layout };
