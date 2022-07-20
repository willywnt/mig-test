import { Link } from 'react-router-dom';

const AuthHeader = ({ heading, paragraph, linkName, linkUrl = "#" }) => {
  return (
    <div className="mb-10">
      <h2 className="px-8 text-center text-2xl font-extrabold text-gray-700 dark:text-gray-200">
        {heading}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-200">
        {paragraph} {' '}
        <Link to={linkUrl} className=" text-purple-600 hover:text-purple-500 dark:text-purple-400">
          {linkName}
        </Link>
      </p>
    </div>
  )
}

export default AuthHeader;