import swal from 'sweetalert';
import formatPhoneNumber from '../../utils/formatPhoneNumber';
import formatDate from '../../utils/formatDate';
import { HiPencil } from 'react-icons/hi';
import { ImBin2 } from 'react-icons/im';
import CustomerService from '../../services/CustomerService';
import useAuth from '../../hooks/useAuth';

const Tabel = ({ data, setData }) => {
  const { auth } = useAuth();

  const handleDelete = (name, id) => {
    swal({
      title: `Delete customer ${name}?`,
      text: "Once deleted, you will not be able to recover this record!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          const payload = {
            _token: auth?.access_token,
            id
          }
          CustomerService.deleteCustomer(payload)
            .then(res => {
              if (res.data.success) setData(prev => prev.filter(cust => cust.id !== id))
            })
            .catch(error => {
              console.log(error);
            });

          swal("Poof! Your record has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your record is safe!");
        }
      });
  }

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs pb-20">
      <div className="overflow-x-auto">
        <table className="w-max whitespace-no-wrap xl:w-full">
          <thead>
            <tr
              className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
            >
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Address</th>
              <th className="px-4 py-3">Country</th>
              <th className="px-4 py-3">Phone Number</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Last Update</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
            {data?.map((cust) => (
              <tr className="text-gray-700 dark:text-gray-400">
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div>
                      <p className="font-semibold">{cust.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {cust.job_title}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm whitespace-pre-wrap">
                  {`56989 Rosemarie Cape Suite 072\nLilamouth, AR 30760-9173`}
                </td>
                <td className="px-4 py-3 text-sm">
                  {cust.country}
                </td>
                <td className="px-4 py-3 text-sm">
                  {formatPhoneNumber(cust.phone_number)}
                </td>
                <td className="px-4 py-3 text-sm">

                  {cust.status ? <span
                    className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                  >
                    Active
                  </span> : <span
                    className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600"
                  >
                    Inactive
                  </span>}

                </td>
                <td className="px-4 py-3 text-sm whitespace-pre-wrap">
                  {formatDate(cust.updated_at)}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-4 text-sm">
                    <button
                      className="flex items-center justify-between p-2 text-sm font-medium leading-5 text-gray-600 hover:text-blue-500 dark:hover:text-blue-400 rounded-lg dark:text-gray-400 focus:outline-none focus:ring-blue-200 focus:ring focus:text-blue-500 dark:focus:text-blue-400"
                    >
                      <HiPencil className="w-5 h-5" />
                    </button>
                    <button
                      className="flex items-center justify-between p-2.5 text-sm font-medium leading-5 text-gray-600 hover:text-red-500 dark:hover:text-red-400 rounded-lg dark:text-gray-400 focus:outline-none focus:ring-red-200 focus:ring focus:text-red-500 dark:focus:text-red-400"
                      onClick={() => handleDelete(cust.name, cust.id)}
                    >
                      <ImBin2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Tabel;