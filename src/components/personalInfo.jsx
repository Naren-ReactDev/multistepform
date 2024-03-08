import { useDispatch, useSelector } from "react-redux";
import { updatePersonalDetails } from "../redux/actionTypes";

const PersonalInfo = ({errorMsg}) => {
  const personalDetails = useSelector((state) => {
    return state.personalDetails;
  });
  const displatch = useDispatch();

  //handled form using state directly, should have used formik.
  const updatePersonalInfo = (value, fieldName) => {
    let inputObj;
    if (fieldName === "name") {
      inputObj = { name: value };
    } else if (fieldName === "email") {
      inputObj = { email: value };
    } else if (fieldName === "phone") {
      inputObj = { phone: value };
    }
    displatch(updatePersonalDetails({ ...personalDetails, ...inputObj }));
  };

  return (
    <div className="personalInfoPage">
      <div className="persolnalInfoText">
        <label>Personal info</label>
      </div>
      <div className="persolnalInfoPageDesc">
        Please provide your name, email address, and phone number.
      </div>
      <p style={{color:'red'}}>{errorMsg}</p>
      <div>
      
        <div>
          <label className="inputLabel"> Name</label>
        </div>
        <input
          type="text"
          placeholder="e.g. Stephen King"
          value={personalDetails.name}
          onChange={(e) => {
            updatePersonalInfo(e.target.value, "name");
          }}
        ></input>
      </div>
      <div>
        <div>
          <label className="inputLabel">Email Address</label>
        </div>
        <input
          type="text"
          placeholder="e.g. stephenking@lorem.com"
          value={personalDetails.email}
          onChange={(e) => {
            updatePersonalInfo(e.target.value, "email");
          }}
        ></input>
      </div>
      <div>
        <div>
          <label className="inputLabel"> Phone Number</label>
        </div>
        <input
          type="number"
          placeholder="e.g. +1 234 567 890"
          value={personalDetails.phone}
          onChange={(e) => {
            updatePersonalInfo(e.target.value, "phone");
          }}
        ></input>
      </div>
    </div>
  );
};

export default PersonalInfo;
