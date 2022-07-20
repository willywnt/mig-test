const Button = ({ labelText, customClass, onClick, disabled }) => {
  const baseClass = `px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg ${disabled ? 'opacity-50 cursor-not-allowed' : 'active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring :ring-purple-200'} `;

  return (
    <button
      className={baseClass + customClass}
      onClick={onClick}
    >
      {labelText}
    </button>
  )
}

export default Button;