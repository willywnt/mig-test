import { Sidebar, Header } from "../parts";
import RequireAuth from './RequireAuth';
import useDarkMode from '../hooks/useDarkMode';
import useSidebar from '../hooks/useSidebar';

const MainLayout = () => {
  const [theme, toggleTheme] = useDarkMode();
  const [open, handleOpen, isMobile] = useSidebar();
  return (
    <div className={`flex h-screen ${theme}`
    }>
      <Sidebar open={open} handleOpen={handleOpen} isMobile={isMobile} />
      <div className="h-screen flex-1 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <Header theme={theme} toggleTheme={toggleTheme} handleOpen={handleOpen} />
        <div className="h-full overflow-y-auto">
          <div className="container px-6 mx-auto grid">
            <RequireAuth />
          </div>
        </div>
      </div>
    </div >
  )
}

export default MainLayout;