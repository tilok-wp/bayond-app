import { NavLink } from "react-router-dom";
import { MdGridView, MdPermContactCalendar } from "react-icons/md";
import { BiBarChart } from "react-icons/bi";
import { AiFillDollarCircle, AiOutlineRight, AiOutlineStar } from "react-icons/ai";
import { BsWindowDock } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DashboardMenu from "./DashboardMenu";
import "./Dashboard.css"
import DashboardNav from "../Shared/DashboardNav";
import Navbar1 from "../Shared/Navbar1";
const routes = [  
  {
    path: "/"||"overview",
    name: "Overview",
    icon: <MdGridView />,
  },
  {
    path: "/report",
    name: "Report",
    icon: <BiBarChart />,
  },
  {
    path: "/tax",
    name: "Tax",
    icon: <AiFillDollarCircle />,
  },
  {
    path: "/documents",
    name: "Documents",
    icon: <BsWindowDock />,    
  },
  {
    path: "/contacts",
    name: "Contacts",
    icon: <MdPermContactCalendar />,
  },
  {
    path: "/apps&offers",
    name: "Apps & Offers",
    icon: <AiOutlineStar />,
    exact: true,
  }
];

const Dashboard = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen); 

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
    <Navbar1 />
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "20%" : "6%",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo mx-auto"
                >
                  beyond
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <AiOutlineRight onClick={toggle} />
            </div>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <DashboardMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>
          <DashboardNav className="w-full" />
          <div className="w-full">
          {children}
          </div>
          </main>
      </div>
    </>
  );
};


export default Dashboard;
