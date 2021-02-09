

/* This component is at level 2, it does nothing but just calls the level 3 component.
*  This is to demonstrate that the child will receive the props via 'context.Consumer' (Check the code in the child component for this)
*  Note: We are passing regular props also, which is not required, but just to demo that we can pass props via both ways */

import ProfileComponentLevel3 from "./ProfileComponentLevel3";
function ProfileHeader (props) {
    return (
       <ProfileComponentLevel3 testProp={"Another Props sent directly"}/>
    );
}

export default ProfileHeader;