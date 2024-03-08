const Plancard = ({ image, plan, price, freeText,updatePlanDetails,priceDigit,className }) => {  
  const styleClass="planCard "+className;
  return (
    <div className={styleClass} onClick={() => {
      updatePlanDetails({
        planType: plan,
        planPrice: priceDigit,
      });
    }}>
      <img className="planImage" src={image} alt=""></img>
      <div className="planName">{plan}</div>
      <div className="planPrice"> {price}</div>
      <div className="planFreeText">{freeText}</div>    
    </div>
  );
};
export default Plancard;
