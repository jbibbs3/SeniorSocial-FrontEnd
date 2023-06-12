import React from "react"


const UserPosts = () => {

    const styles = {

        user: {
            marginLeft: "10%"
        },

        globalContainer: {
             width:"100%"
        },

        posted: {
            fontWeight: "bold",
            fontSize: "119%",
            marginLeft: "5%",
            paddingTop: "2%"
        },
        userContainer: {
            display: "flex",
         },

         container: {
            display: "flex",
            flexDirection:"column",
            width:"100%",
            height:"85%",
            fontSize:'1.25rem'

         },

         buttons: {
            display: "flex",
            flexDirection:"row",
            
           },

         likes: {
            borderRadius:"12px",
            fontSize:"100%",
            fontWeight:"bold"
         },

         comments: {
            borderRadius:"12px",
            marginLeft:"4%",
            fontSize:"100%",
            fontWeight:"bold"
         }

    }


    return (
        <div className="userPost" >
            <div className="user-container" style={styles.container}>
                <div className="avatar-cirle">
                    <img className="pFpic" src="https://realblackgrandmothers.com/wp-content/uploads/2017/09/Ms.-Dora-Bio-300x300.jpg" />
                </div>
                <div style={styles.userContainer}>
                    <h2 style={styles.user}>Frances</h2>
                    <p style={styles.posted}>posted</p>
                </div>

                <div>
                    "(post text)""
                </div>

                <div>
                    (Image)
                </div>

                <div style={styles.buttons}>
                    <button style={styles.likes}>Likes</button>
                    <button style={styles.comments}>Comment</button>
                </div>
            </div>

        </div>
    )
}

export default UserPosts
