import { motion } from "framer-motion";
import { CiMail, CiUser } from "react-icons/ci";
import { FaFacebook, FaGithub, FaGooglePlus, FaWpforms } from "react-icons/fa";
import { MdOutlineLockClock } from "react-icons/md";
import "./style.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
interface AnimatedDayTimeProps {
  delay: number;
}
const AnimatedForm = ({ delay }: AnimatedDayTimeProps) => {
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);
  const isTablet = useMediaQuery({ maxWidth: "1200px" });

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoginForm((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="h-full flex flex-col justify-between"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: delay,
      }}
    >
      <div className="flex-1 flex justify-center items-center px-3 py-2 relative">
        <div className="border border-appGray flex justify-between h-full rounded-3xl aspect-[8/4] relative text-sm p-3 overflow-hidden">
          {/* register */}
          <motion.div
            className=" w-50 flex-1 flex flex-col items-center gap-1"
            initial={{
              opacity: isLoginForm ? 0 : 1,
            }}
            animate={{
              opacity: isLoginForm ? 0 : 1,
            }}
            transition={{
              duration: 1,
            }}
          >
            <span className="font-extrabold">Registration</span>
            <div className="relative px-4">
              <input type="text" placeholder="Username" className="formInput" />
              <CiUser
                size={8}
                className="absolute top-1/2 right-6 -translate-y-1/2"
              />
            </div>
            <div className="relative px-4">
              <input type="email" placeholder="Email" className="formInput" />
              <CiMail
                size={8}
                className="absolute top-1/2 right-6 -translate-y-1/2"
              />
            </div>
            <div className="relative px-4">
              <input
                type="password"
                placeholder="Password"
                className="formInput"
              />
              <MdOutlineLockClock
                size={8}
                className="absolute top-1/2 right-6 -translate-y-1/2"
              />
            </div>
            <div className="px-4 w-full">
              <button className=" w-full rounded text-center bg-appGray text-white text-xs p-1">
                Register
              </button>
            </div>
            {!isTablet && (
              <div className="flex gap-2 items-center justify-between mt-auto">
                <div className="border border-appGray text-appGray rounded p-1 flex justify-center items-center">
                  <FaFacebook size={10} />
                </div>
                <div className="border border-appGray text-appGray rounded p-1 flex justify-center items-center">
                  <FaGooglePlus size={10} />
                </div>
                <div className="border border-appGray text-appGray rounded p-1 flex justify-center items-center">
                  <FaGithub size={10} />
                </div>
                <div className="border border-appGray text-appGray rounded p-1 flex justify-center items-center">
                  <FaSquareXTwitter size={10} />
                </div>
              </div>
            )}
          </motion.div>
          {/* login */}
          <motion.div
            className=" w-50 flex-1 flex flex-col items-center gap-1"
            initial={{
              opacity: isLoginForm ? 1 : 0,
            }}
            animate={{
              opacity: isLoginForm ? 1 : 0,
            }}
            transition={{
              duration: 1,
            }}
          >
            <span className="font-extrabold">Login</span>
            <div className="relative px-4">
              <input type="text" placeholder="Username" className="formInput" />
              <CiUser
                size={8}
                className="absolute top-1/2 right-6 -translate-y-1/2"
              />
            </div>
            <div className="relative px-4">
              <input
                type="password"
                placeholder="Password"
                className="formInput"
              />
              <MdOutlineLockClock
                size={8}
                className="absolute top-1/2 right-6 -translate-y-1/2"
              />
            </div>
            <span className="text-[8px]">Forgot password?</span>
            <div className="px-4 w-full">
              <button className=" w-full rounded text-center bg-appGray text-white text-xs p-1">
                Login
              </button>
            </div>
            {/* <span className="text-[8px]">or login with social platforms</span> */}
            {!isTablet && (
              <div className="flex gap-2 items-center justify-between mt-auto">
                <div className="border border-appGray text-appGray rounded p-1 flex justify-center items-center">
                  <FaFacebook size={10} />
                </div>
                <div className="border border-appGray text-appGray rounded p-1 flex justify-center items-center">
                  <FaGooglePlus size={10} />
                </div>
                <div className="border border-appGray text-appGray rounded p-1 flex justify-center items-center">
                  <FaGithub size={10} />
                </div>
                <div className="border border-appGray text-appGray rounded p-1 flex justify-center items-center">
                  <FaSquareXTwitter size={10} />
                </div>
              </div>
            )}
          </motion.div>
          {/* transitor */}
          <motion.div
            className={` bg-appGrayFocus absolute w-1/2 top-0 left-0 h-full intro_form ${
              isLoginForm ? "isLogin" : "isRegister"
            }`}
            initial={{
              x: isLoginForm ? 0 : "100%",
              borderRadius: isLoginForm
                ? "10px 20px 20px 10px"
                : "20px 10px 10px 20px",
            }}
            animate={{
              x: isLoginForm ? 0 : "100%",
              borderRadius: isLoginForm
                ? "10px 20px 20px 10px"
                : "20px 10px 10px 20px",
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            {isLoginForm ? (
              <motion.div
                className="flex flex-col items-center justify-center h-full w-full"
                initial={{
                  opacity: isLoginForm ? 1 : 0,
                }}
                animate={{
                  opacity: isLoginForm ? 1 : 0,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 1,
                }}
              >
                <span className="font-bold text-appBlack">Welcome!</span>
                <span className="font-light text-appBlack text-xs mb-4">
                  Don't have an account.
                </span>
                <div className="w-full px-4">
                  <button className="border border-appBlack text-appBlack w-full px-3 py-1 rounded">
                    Register
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                className="flex flex-col items-center justify-center h-full w-full"
                initial={{
                  opacity: isLoginForm ? 0 : 1,
                }}
                animate={{
                  opacity: isLoginForm ? 0 : 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 1,
                }}
              >
                <span className="font-bold text-appBlack">Welcome back!</span>
                <span className="font-light text-appBlack text-xs mb-4">
                  Already have an account.
                </span>
                <div className="w-full px-4">
                  <button className="border border-appBlack text-appBlack w-full px-3 py-1 rounded">
                    Login
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
      <div className="flex justify-between items-center text-appGrayFocus">
        <FaWpforms size={16} />
        <span className="text-sm">&#x2022; Form Submit</span>
      </div>
    </motion.div>
  );
};

export default AnimatedForm;
