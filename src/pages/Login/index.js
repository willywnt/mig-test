import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../../components/AuthHeader";
import { loginFields } from "../../data/constants";
import { Input, CheckBox } from '../../components/Form';
import Button from '../../components/Button';
import { Link } from "react-router-dom";
import axios from '../../api/axios';
import useAuth from '../../hooks/useAuth';

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const LOGIN_URL = '/auth/login';

const Login = () => {
  const [loginState, setLoginState] = useState(fieldsState);
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [validEmail, setValidEmail] = useState(false);
  const [inputFocus, setInputFocus] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    const isValid = EMAIL_REGEX.test(loginState['email-address']);
    setValidEmail(isValid);
    if (isValid && loginState['password'] !== '') {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [loginState]);

  const clearMsg = () => {
    setTimeout(() => {
      setErrMsg('');
    }, 3000);
  }
  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = loginState['email-address'];
    const password = loginState['password'];
    if (canSubmit) {
      axios.post(LOGIN_URL,
        {
          email,
          password
        },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      ).then((res) => {
        setAuth({ email, password, access_token: res.data.access_token });
        navigate(from, { replace: true });
      }).catch((err) => {
        if (!err?.response) {
          setErrMsg('Server not response');
        } else if (err.response?.status === 400) {
          setErrMsg('Something went wrong!');
        } else if (err.response?.status === 401) {
          setErrMsg('Unauthorized');
        } else {
          setErrMsg('Login failed');
        }
        clearMsg();
      });
    } else {
      setErrMsg('Please fill the input!');
      clearMsg();
    }
  }


  return (
    <div className="px-4 py-3 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <Header heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />
      {errMsg && <span className="text-md text-red-600 dark:text-red-400 flex justify-center -mt-4 mb-3">
        {errMsg}
      </span>}

      <form>
        <div className="space-y-2">
          {
            fields.map(field =>
              <Input
                key={field.id}
                onChange={handleChange}
                onFocus={() => field.id === 'email-address' ? setInputFocus(true) : null}
                onBlur={() => field.id === 'email-address' ? setInputFocus(false) : null}
                value={loginState[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
                icon={field.icon}
                isValid={field.id === 'email-address' ? validEmail || (!inputFocus && loginState[field.id] === '') : true}
              />
            )
          }
          <div className="flex justify-between pt-1">
            <CheckBox labelText='Remember Me' />
            <Link to='/forget_password' className="text-sm text-gray-600 dark:text-purple-400">
              Forget Password
            </Link>
          </div>
        </div>
        <Button labelText="Login" customClass="w-full mt-12 mb-2" disabled={!canSubmit} onClick={handleSubmit} />
      </form>
    </div>
  )
}

export default Login;