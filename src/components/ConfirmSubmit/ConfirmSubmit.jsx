import { Link } from "react-router-dom";


const ConfirmSubmit = () => {
  
  return (
    <div>
      <h2>Thanks!</h2>
      <p>Your profile is being reviewed.</p>
      <p>
        <Link to="/">Home Page!</Link>
      </p>
    </div>
  );
};

export default ConfirmSubmit;
