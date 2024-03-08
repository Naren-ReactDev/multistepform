import { useSelector } from "react-redux";
import LeftNavItem from "./leftNavItem";

const LeftNavBar = () => {
  const pageNum = useSelector((state) => state.pageNum);
  return (
    <div className="leftNavBar">
      <LeftNavItem
        num="1"
        stepDesc="YOUR INFO"
        className={pageNum === 1 ? "highlightStep" : ""}
      />
      <LeftNavItem
        num="2"
        stepDesc="SELECT PLAN"
        className={pageNum === 2 ? "highlightStep" : ""}
      />
      <LeftNavItem
        num="3"
        stepDesc="ADD-ONS"
        className={pageNum === 3 ? "highlightStep" : ""}
      />
      <LeftNavItem
        num="4"
        stepDesc="SUMMARY"
        className={pageNum >3 ? "highlightStep" : ""}
      />
    </div>
  );
};
export default LeftNavBar;
