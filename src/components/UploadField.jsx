import React, {Component} from "react";
import axios from "axios";

class UploadField extends Component {
    state = {
        selectedFile:null
    }

    fileSelectedHandler = event => {        
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler= async () => {
        console.log('api url:', process.env.REACT_APP_API_URL)
        const fd = new FormData();
        fd.append("api_key", process.env.CLOUDINARY_API_KEY);
        fd.append('file', this.state.selectedFile);
        fd.append('upload_preset', process.env.CLOUDINARY_UPLOAD_PRESET);
        await axios.post (`https://api.cloudinary.com/v1_1/tech-is-me/image/upload`, fd);
    }

    render() {
        return (
            <div className="App">
              <input type="file" onChange={this.fileSelectedHandler}/>
              <button onClick={this.fileUploadHandler}>Upload</button>         
            </div>
        );
    }
}

export default UploadField;