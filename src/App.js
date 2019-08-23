import React, { Component } from "react";
import Pictures from "./components/pictures";
require('dotenv').config()

class App extends Component {
  
  state = {
    photo: ""
  };

  showWidget = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
        uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
        sources: ["local", "camera"]
      },
      (error, result) => {
        if (result.event === "success") {
        
          const file = result.info.url; 
          console.log(file);
          this.setState({ photo: file });
        }
      }
    );
    widget.open();
  };
  
  render() {
    return (
      <div className="main-content">
        <h1>Adding pictures using Cloudinary</h1>
        <Pictures
          profilePhotoURL={this.state.photo}
          showWidget={this.showWidget}
        />
      </div>
    );
  }
}

export default App;
