import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import useDarkMode from '../hooks/useDarkMode';

const NotFound = () => {
  const [theme] = useDarkMode();
  const navigate = useNavigate();
  return (

    <section className={theme}>
      <div className="h-screen bg-gray-50 dark:bg-gray-900 grid content-center pb-10">
        <div className="mx-auto text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-700 dark:text-gray-200">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl text-gray-600 dark:text-gray-400">Sorry, we couldn't find this page.</p>
          <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
          <Button labelText="Back to homepage" onClick={() => navigate(-1, { replace: true })} />
        </div>
      </div>
    </section >
  )
}

export default NotFound;