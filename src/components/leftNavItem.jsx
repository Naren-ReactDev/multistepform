const LeftNavItem = ({num, stepDesc,className}) => {
  const styles="stepNum "+className;
  return (
    <div className="leftNavItem">
      <div  className={styles}><label>{num}</label></div>
      <div className="stepInfo">
        <label className="text1">STEP{num}</label>
        <br/>
        <label className="text2">{stepDesc}</label>
      </div>
    </div>
  );
};
export default LeftNavItem;
