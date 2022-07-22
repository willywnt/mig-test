import { useEffect, useState } from 'react';
import Tabel from './Tabel';
import CustomerService from '../../services/CustomerService';
import useAuth from '../../hooks/useAuth';
import { HiUserGroup } from 'react-icons/hi';
import { FaUserCheck, FaUserTimes } from 'react-icons/fa';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    const controller = new AbortController();

    CustomerService.getCustomerList({ _token: auth?.access_token }, controller)
      .then(res => setData(res.data))
      .catch(error => {
        if (error.name === 'AbortError') {
          console.log('successfully aborted');
        } else {
          console.log(error.message);
        }
      });

    return () => {
      controller.abort();
    }
  }, []);

  const dashboardInfo = [
    {
      name: "Total Customers",
      icon: <HiUserGroup className="w-5 h-5" />,
      total: data?.length,
      bgColor: "text-blue-500 bg-blue-100 dark:text-blue-100 dark:bg-blue-500"
    },
    {
      name: "Customer Active",
      icon: <FaUserCheck className="w-5 h-5" />,
      total: data?.filter(data => data.status === true).length,
      bgColor: "text-green-500 bg-green-100 dark:text-green-100 dark:bg-green-500"
    },
    {
      name: "Customer Inactive",
      icon: <FaUserTimes className="w-5 h-5" />,
      total: data?.filter(data => data.status === false).length,
      bgColor: "text-orange-500 bg-orange-100 dark:text-orange-100 dark:bg-orange-500"
    }
  ]

  return (
    <>
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Dashboard
      </h2>
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
        {dashboardInfo.map((info, i) => (
          <div className={`flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 ${i === 2 ? 'md:col-span-2 md:mx-[25%] xl:col-span-1 xl:mx-0' : ''}`}>
            <div className={`p-3 mr-4 rounded-full ${info.bgColor}`}>
              {info.icon}
            </div>
            <div>
              <p
                className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
              >
                {info.name}
              </p>
              <p
                className="text-lg font-semibold text-gray-700 dark:text-gray-200"
              >
                {info.total}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Tabel data={data} setData={setData} />
    </>
  )
}

export default Dashboard;