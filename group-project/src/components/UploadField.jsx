import React, {Component} from "react";
import axios from "axios"
// import './App.css';

// function Upload () {
//     return (
//         <div class="upload-component">
//             <h1> this is test </h1>
//         </div>
//       );
// }
// export default Upload
class App extends Component {
    state = {
        selectedFile:null
    }
    fileSelectedHandler = event => {
        // console.log(event.target.files[0]);
        this.setState({
            selectedFile: event.target.files[0]
        })
    }
    fileUploadHandler=() => {
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        axios.post('http://localhost:3000/create-profile', fd)
        //formdata 
           
        }
        
    render() {
        return (
            <div className="App">
              <input type="file" onChange={this.fileSelectedHandler}/> 
              {/* <button onClick={}> Select Photo </button> */}
              <button onClick={this.fileUploadHandler}>Upload</button>         
            </div>
        );
    }
}

export default App;