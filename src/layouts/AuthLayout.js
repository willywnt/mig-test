import useDarkMode from "../hooks/useDarkMode";

const AuthLayout = ({ children }) => {
  const [theme] = useDarkMode();

  return (
    <div className={theme} >
      <div className="h-screen flex bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto grid place-content-center">
          {children}
        </div>
      </div>
    </div >
  )
}

export default AuthLayout;