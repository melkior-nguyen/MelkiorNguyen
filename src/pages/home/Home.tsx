import { motion } from "framer-motion";
import { useGlobalContext } from "../../Global/GlobalContext/GlobalContext";
import { AppIntro } from "../../components";

const Home = () => {
  const { isIntroShowed } = useGlobalContext();

  return (
    <>
      {!isIntroShowed ? (
        <AppIntro />
      ) : (
        <motion.section className="w-full h-full flex justify-center items-center">
          Home
        </motion.section>
      )}
    </>
  );
};

export default Home;
