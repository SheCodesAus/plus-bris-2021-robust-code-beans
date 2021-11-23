import React, {Component} from "react";

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
        console.log('api url:', REACT_APP_API_URL)
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        await fetch(`${process.env.REACT_APP_API_URL}profiles/`, {
            method: "post",
            headers: {
              Authorization: `Token ${window.localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
            // TODO: send profile data -> implement this on the CreateProfile component
            body: JSON.stringify(),
          });
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