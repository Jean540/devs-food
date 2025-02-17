"use client";
import { SearchContext } from "@/contexts/SearchContext";
import { useContext, useEffect } from "react";

const Profile = () => {
  const searchContext = useContext(SearchContext);
  useEffect(() => {
    searchContext?.dispatch({
      type: "SHOW_INPUT",
      payload: { showInput: false },
    });

    return () =>
      searchContext?.dispatch({
        type: "SHOW_INPUT",
        payload: { showInput: true },
      });
  }, []);
  return <div>Profile</div>;
};
export default Profile;
