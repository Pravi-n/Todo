import React from 'react';
import { ProfileCard } from '../components/profileCard';
import { ProfileComponents } from '../components/profileComponents'
const UserOverview = () => {
    return ( 
        <div className="d-flex flex-row">
        <ProfileCard/>
        <div className="flex-row-fluid ml-lg-8">
        <ProfileComponents/>
        {/* <Switch>
          <Redirect
            from="/my-page"
            exact={true}
            to="/user-profile/profile-overview"
          />
          <Route
            path="/user-profile/profile-overview"
            component={}
          />
        </Switch> */}
        </div>
        </div>
     );
}
 
export default UserOverview;