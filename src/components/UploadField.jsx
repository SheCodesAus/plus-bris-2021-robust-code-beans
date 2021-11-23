import React, {Component} from "react";
import axios from "axios"

class UploadField extends Component {
    state = {
        selectedFile:null
    }

    fileSelectedHandler = event => {        
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler=() => {
        console.log('api url:', REACT_APP_API_URL)
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        axios.post(REACT_APP_API_URL, fd)  
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