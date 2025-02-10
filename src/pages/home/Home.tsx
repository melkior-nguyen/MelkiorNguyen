import { motion } from "framer-motion";
import { useGlobalContext } from "../../Global/GlobalContext/GlobalContext";
import { AppIntro } from "../../components";
import { avatarPng } from "../../assets/exportImg";
import "./homeStyle.css";
import { useMemo } from "react";

const Home = () => {
  //use useMemo to avoid access to Context when re-render
  const { isIntroShowed } = useGlobalContext();
  const shouldShowIntro = useMemo(() => isIntroShowed, [isIntroShowed]);

  return (
    <>
      {!shouldShowIntro ? (
        <AppIntro />
      ) : (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full h-full max-w-screen-xl flex justify-between items-center flex-col lg:flex-row gap-1 lg:gap-4 p-12"
        >
          {/* avatar */}
          <div className="flex-1 w-full">
            <div className="w-full h-full m-auto flex justify-center items-center lg:px-4">
              <img
                loading="lazy"
                src={avatarPng}
                alt=""
                className="home_avatar lg:max-h-full max-h-[400px]"
              />
            </div>
          </div>
          {/* welcome */}
          <motion.div
            initial={{ opacity: 0, x: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 4 }}
            className="flex-1 flex flex-col justify-start gap-3 text-appGray lg:justify-center lg:px-0"
          >
            <h1 className="sm:text-6xl text-5xl font-bold text-appGrayFocus">
              Welcome to My Portfolio!
            </h1>
            <p className="text-xl">
              Hi there! I'm a passionate Front-End Developer who loves crafting
              beautiful and interactive web experiences.
            </p>
            <p className="text-xl">
              I specialize in building modern, responsive, and user-friendly
              websites with a focus on clean design and seamless functionality.
              From turning creative ideas into pixel-perfect interfaces to
              optimizing performance for the best user experience, I aim to
              bring visions to life on the web.
            </p>
            <p className="text-xl">
              Feel free to explore my projects and get to know more about me.
              Let's create something amazing together!
            </p>
            <div>
              <span className="text-xl">If you'd like to connect, </span>
              <span className="text-xl text-appGrayFocus underline cursor-pointer">
                Let's get in touch!
              </span>
            </div>
          </motion.div>
        </motion.section>
      )}
    </>
  );
};

export default Home;
