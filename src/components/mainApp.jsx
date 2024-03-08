import LeftNavBar from "./leftNavBar";
import RigthSection from "./rightSection";
import Reducer from "../redux/reducer";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const MainApp = () => {
  const store =configureStore({
    reducer: Reducer
  })
  return (
    <div className="main">
      <Provider store={store}>
        <LeftNavBar />
        <RigthSection />
      </Provider>
    </div>
  );
};
export default MainApp;
