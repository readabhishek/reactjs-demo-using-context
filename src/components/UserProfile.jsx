import ProfileHeader from "./ProfileHeader";

/* This component is at level 1, it does nothing but just calls the level 2 component.
   This is to demonstrate that the child will receive the props via 'context.Consumer' (child at level 3 uses context.Consumer to
   receive the data)
*/

function UserProfile (props) {
    return (
        <ProfileHeader />
    );
}

export default UserProfile;