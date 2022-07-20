
const CheckBox = ({ labelText }) => {
  return (
    <div className="flex text-sm">
      <label className="flex items-center dark:text-gray-400 cursor-pointer">
        <input
          type="checkbox"
          className="text-purple-600 form-checkbox cursor-pointer focus:border-purple-400 focus:outline-none focus:ring-purple-400 dark:focus:ring-gray-400"
        />
        <span className="ml-2">
          {labelText}
        </span>
      </label>
    </div>
  )
}

export default CheckBox;