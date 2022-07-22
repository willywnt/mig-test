import { Outlet } from 'react-router-dom';
import useDarkMode from "../hooks/useDarkMode";

const AuthLayout = () => {
  const [theme] = useDarkMode();

  return (
    <div className={theme}>
      <div className="h-screen flex bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto grid place-content-center">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AuthLayout;