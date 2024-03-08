import thankYou from "../images/icon-thank-you.svg";
const ThankYOu = () => {
  return (
    <div className="thankYou">
      <div><img className="thankYouImg" src={thankYou} alt=""></img></div>
      <div className="thankYouText">Thank you!</div>
      <p className="thankYouDesc">Thanks for confirming your subscription! We hope you have<br/>
      fun using ourplatform. If you ever need support, please feel<br/>
      free to email us at support@loremgaming.com.</p>
    </div>
  );
};
export default ThankYOu;
