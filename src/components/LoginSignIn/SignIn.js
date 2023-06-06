import React from "react";

const SignIn = () => {

const styles = {

   header: { 
         fontSize:"52pt",
         
   },

  button:{
      width:"70%",
      height:"30%"
  },

  inputfields: {
     display: "flex",
     flexDirection:"column",
     justifyContent:"spaceBetween"
  }
}    



return (
    <div className='SignUpBody' >
            <h1 style={styles.header}>Sign Up</h1>
            <div className="InputFields" style={styles.inputfields}>
            <label className='InputField'>
                <input type="First Name" value="First Name" />
            </label>
            <div className='InputField'>
                <input type="Last Name" value="Last Name"/>
            </div>
            <div className='InputField'>
            <input type="Email" value="Email"/>
            </div>
            <div className='InputField'>
            <input type="text" value="Password"  />
            </div>


            </div>
            
            <div>
                <button className='SubmitButton'style = {styles.button}>
                    Submit
                </button>
            </div>

        </div>


)


}


export default SignIn