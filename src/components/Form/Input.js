const Input = ({ icon, iconPosition = 'left', onChange, onFocus, onBlur, value, labelText, labelFor, id, name, type, isRequired = false, isValid = false, placeholder, customClass }) => {

  const baseClass = `block w-full mt-1 p-2 ${iconPosition === 'left' ? 'pl-9' : 'pr-9'} focus:outline-none focus:ring ${!isValid ? 'focus:ring-red-400' : 'focus:ring-purple-400'} rounded-sm text-sm text-gray-500 bg-gray-200 dark:text-gray-300 dark:bg-gray-700   form-input `;

  return (
    <label htmlFor={labelFor} className="block text-md">
      <span className="text-gray-700 dark:text-gray-400">
        {labelText}
      </span>
      <div className={`relative text-gray-500 focus-within:text-purple-600 ${!isValid ? "dark:focus-within:text-red-500 focus-within:text-red-500" : "dark:focus-within:text-purple-400 focus-within:text-purple-600"}`}>
        <input
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          id={id}
          name={name}
          type={type}
          required={isRequired}
          className={baseClass + customClass}
          placeholder={placeholder}
        />
        {icon && <div className={`absolute inset-y-0 ${iconPosition === 'left' ? '' : 'right-2'} mt-2 ml-2 pointer-events-none`}>
          {icon}
        </div>}

        {isValid || <span className="text-xs text-red-600 dark:text-red-400">
          Your email is not correct!
        </span>}

      </div>
    </label>
  )
}

export default Input;