import React from "react";
const Message = ({msg, bgColor}) => {

    let styles = {
      padding:".5rem",
      marginBottom:"1rem",
      textAlign:"center",
      color:"#fff",
      fontWeight:"bold",
      backgroundColor:bgColor,
      width:"49%",
      margin:"auto",
      borderRadius:"5px",
    };
    
    return(
        <div style= {styles}>
          <h2>{msg}</h2>
      </div>
    )
}

export default Message;