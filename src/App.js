import React, { Component } from "react";
import Pictures from "./components/pictures";
require('dotenv').config()

class App extends Component {
  
  state = {
    photo: "",
    type: "",
    thumbnail_url: ""
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
          console.log("RESULT")
          console.log(result.info)
          console.log("file: ", file, result.info.resource_type);
          this.setState({ photo: file, type: result.info.resource_type, thumbnail_url: result.info.thumbnail_url });
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
          type={this.state.photo}
        />
      </div>
    );
  }
}

export default App;
