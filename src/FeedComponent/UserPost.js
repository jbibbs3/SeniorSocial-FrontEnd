import React from "react"


const UserPosts = () => {

    const styles = {

        user: {
            marginLeft:"10%"
        },

        posted: {
              fontWeight:"bold",
              fontSize:"119%",
              marginLeft:"5%",
              paddingTop:"2%"
         },
         userContainer: {
            display:"flex",


         }

    }


    return (
        <div className="userPost">
            <div className="user-container">
                <div className="avatar-cirle">
                    <img className="pFpic" src="https://realblackgrandmothers.com/wp-content/uploads/2017/09/Ms.-Dora-Bio-300x300.jpg" />
                </div>
                <div style={styles.userContainer}>
                    <h2 style={styles.user}>Frances</h2>
                    <p style={styles.posted}>posted</p>
                </div>
            </div>
            <div className="user-post">
                <p></p>
            </div>
        </div>
    )
}

export default UserPosts
