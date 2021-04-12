import React,{lazy} from "react";
import {useSubheader} from "../../_metronic/layout";

const UserProfilepage = lazy(() =>
  import("../modules/UserProfile/UserProfilePage")
);

export const MyPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("My Custom title");

  return (<><UserProfilepage/></>);
};
