import { useEffect, useState } from "react";
import Header from "../../components/AuthHeader";
import { loginFields } from "../../data/constants";
import { Input, CheckBox } from '../../components/Form';
import Button from '../../components/Button';
import { Link } from "react-router-dom";
import axios from '../../api/axios';

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const LOGIN_URL = '/auth/login';

const Login = () => {
  const [loginState, setLoginState] = useState(fieldsState);

  const [validEmail, setValidEmail] = useState(false);
  const [inputFocus, setInputFocus] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const isValid = EMAIL_REGEX.test(loginState['email-address']);
    setValidEmail(isValid);
    if (isValid && loginState['password'] !== '') {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  }, [loginState]);


  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (success) {
      const userObject = {
        email: loginState['email-address'],
        password: loginState['password']
      };
      try {
        const response = await axios.post(LOGIN_URL,
          JSON.stringify(userObject),
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
          }
        );
        console.log(response.data);
        console.log(response.access_token);
      } catch (err) {
        console.log(err);
        if (!err?.response) {
          setErrMsg('Server not response');
        } else {
          setErrMsg('Something went wrong!');
        }
      }
    } else {
      setErrMsg('Please fill the input!');
      setTimeout(() => {
        setErrMsg('');
      }, 3000);
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
        <Button labelText="Login" customClass="w-full mt-12 mb-2" disabled={!success} onClick={handleSubmit} />
      </form>
    </div>
  )
}

export default Login;