import React from "react";
import "./CreateProfileForm.css";

function CreateProfile() {
    const [profileData, setProfileData] = useState({
        date_created: new Date().toISOString(),
    is_open: true,
  });
  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProjectData((prevProjectData) => ({
      ...prevProjectData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${process.env.REACT_APP_API_URL}projects/`, {
      method: "post",
      headers: {
        Authorization: `Token ${window.localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectData),
    });
    history.push("/");
  };

  return (
    <div>
        <div class="form">
            <form class="formcontent">
                <div>
                    <label>First Name: </label>
                    <input/>
                </div>
                <div>
                    <label>Gender: </label>
                </div>
                <div>
                    <label>Role: </label>
                </div>
                <div>
                    <label>Company: </label>
                </div>
                <div>
                    <label>Experience: </label>
                </div>
                <div>
                    <label>Bio: </label>
                </div>
                <div>
                    <label>Fun Facts: </label>
                </div>
                <div>
                    <label>Linkedin: </label>
                </div>
                <div>
                    <label>Profile photo: </label>
                </div>

            </form>

        </div>
    </div>

  )
