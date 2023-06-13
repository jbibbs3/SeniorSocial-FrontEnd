import React from 'react'
import UserPosts from '../../FeedComponent/UserPost'
import { useContext } from 'react'
import SocialContext from '../../SocialContext'

const MyPosts = () => {
    const {darkMode} = useContext (SocialContext)

   const style = {

      backgroundColor: darkMode?"black":"a2d8fe",

      textColor: darkMode?"white":"black"
        

   }


    return (
        

        <div>
             
            <UserPosts />

        </div>

    )

}

export default MyPosts