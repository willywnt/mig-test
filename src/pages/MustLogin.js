import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";

const MustLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (<>
    <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
      you should login first to see what's going on...'
    </h2>
    <Button labelText="Login" onClick={() => navigate('/login', { replace: true, state: { from: location } })} />
  </>
  )
}

export default MustLogin;