import React from 'react'

const LogSign = () => {

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

    inputfields: {
        paddingTop: "8.5%",
        color: "rgb(150,145,145)"
        
         
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

    SubmitButton: {
        fontSize: "330%",
        fontWeight: "bold",
        color: "white",
        backgroundColor: "#11bf1d",
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
    <div className='LogInBody' >
      <h1 style={styles.header}>Log In</h1>
      <div className="InputFields" >
        <label className='InputField' style={styles.inputfields}>
          <input type="text" placeholder="Email" style={styles.field} />
        </label>
        <div className='InputField' style={styles.inputfields}>
          <input type="text" placeholder="Password" style={styles.field} />
        </div>
      </div>

      <div style={styles.buttonPad}>
        <button className='EnterButton' style={styles.SubmitButton}>
          Submit
        </button>

      </div>


    </div>
  )
}

export default LogSign