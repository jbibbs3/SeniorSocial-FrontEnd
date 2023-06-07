import React from 'react'

const User = () => {
  const styles = {

    header: {
        paddingTop: "10%",
        fontSize: "400%",
        color: "rgb(150,145,145)",


    },

    button: {
        width: "70%",
        height: "30%"  
    },

    field: {
        fontSize:"200%",
        color: "rgb(150,145,145)",
        borderColor: "rgb(150,145,145)",
        borderWidth: "thick",
        textAlign: "center",
        borderStyle: "solid",
        borderRadius: "12px"

    },

    signOutButton: {
        fontSize: "330%",
        fontWeight: "bold",
        color: "white",
        backgroundColor: "#008080",
        borderRadius: "12px",
        paddingTop:"2%",
        paddingBottom:"2%",
        paddingRight:"4%",
        paddingLeft:"4%"
        
        
      },

      buttonPad: {
        paddingTop: "8.5%"
      },


    lightButton: {
      fontSize: "330%",
      fontWeight: "bold",
      color: "blue",
      backgroundColor: "#11bf1d",
      borderRadius: "12px",
      paddingTop:"2%",
      paddingBottom:"2%",
      paddingRight:"4%",
      paddingLeft:"4%"
      
      
    },

    buttonPad: {
      paddingTop: "8.5%"
    },


    darkButton: {
      fontSize: "330%",
      fontWeight: "bold",
      color: "black",
      backgroundColor: "#999999",
      borderRadius: "12px",
      paddingTop:"2%",
      paddingBottom:"2%",
      paddingRight:"4%",
      paddingLeft:"4%"
      
      
    },

    buttonPad: {
      paddingTop: "8.5%"
    },


    contrastButton: {
      fontSize: "330%",
      fontWeight: "bold",
      color: "magneta",
      backgroundColor: "#FF00FF",
      borderRadius: "12px",
      paddingTop:"2%",
      paddingBottom:"2%",
      paddingRight:"4%",
      paddingLeft:"4%"
      
      
    },

    buttonPad: {
      paddingTop: "8.5%"
    }



}
  return (
    <div className='userProfile'>
      <h2>Profile</h2>
      <img src="" alt="" className="profileImg" />
      <span className="profileName"> Bartholomew D. Lester</span>
      <button style={styles.contrastButton}>enter</button>

    </div>
  )
}

export default User