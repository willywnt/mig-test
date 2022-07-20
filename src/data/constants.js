import { AiOutlineDashboard, AiFillDashboard, AiOutlineCalendar, AiFillCalendar, AiOutlineLineChart, AiOutlineAreaChart, AiOutlineFolderOpen, AiFillFolderOpen, AiOutlineSetting, AiFillSetting } from "react-icons/ai";
import { BsInbox, BsInboxFill } from "react-icons/bs";
import { FaUser, FaRegUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BiLockOpenAlt } from "react-icons/bi";

const sizeIcon = "w-5 h-5";

const menus = [
  { title: "Dashboard", icon: <AiOutlineDashboard className={sizeIcon} />, iconActive: <AiFillDashboard className={sizeIcon} />, to: '/' },
  { title: "Inbox", icon: <BsInbox className={sizeIcon} />, iconActive: <BsInboxFill className={sizeIcon} />, to: '/inbox' },
  { title: "Accounts", icon: <FaRegUser className={sizeIcon} />, iconActive: <FaUser className={sizeIcon} />, to: '/accounts' },
  { title: "Schedule", icon: <AiOutlineCalendar className={sizeIcon} />, iconActive: <AiFillCalendar className={sizeIcon} />, to: '/schedule' },
  { title: "Analytics", icon: <AiOutlineLineChart className={sizeIcon} />, iconActive: <AiOutlineAreaChart className={sizeIcon} />, to: '/analytics' },
  { title: "Files", icon: <AiOutlineFolderOpen className={sizeIcon} />, iconActive: <AiFillFolderOpen className={sizeIcon} />, to: '/files' },
  { title: "Setting", icon: <AiOutlineSetting className={sizeIcon} />, iconActive: <AiFillSetting className={sizeIcon} />, to: '/setting' },
];

const loginFields = [
  {
    labelText: "Email address",
    labelFor: "email-address",
    id: "email-address",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Email address",
    icon: <HiOutlineMail className={sizeIcon} />
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "Password",
    icon: <BiLockOpenAlt className={sizeIcon} />
  }
]

export { menus, loginFields };