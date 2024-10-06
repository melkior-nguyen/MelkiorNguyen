import "./style.css";

const AppLoader = () => {
  return (
    <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full">
      <span className="loader"></span>
    </div>
  );
};

export default AppLoader;
