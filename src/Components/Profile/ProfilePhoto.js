import React from "react"
import PhotoProfile from "./myImage.png"


function ProfilePhoto(){
return(
<div className="image">
    <img src={PhotoProfile} alt ='myImage' />
</div>
)
}

export default ProfilePhoto;