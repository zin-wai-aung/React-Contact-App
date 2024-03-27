import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PreventComponent = ({ routhPath,check, children }) => {
  const nav = useNavigate();

    useEffect(() => { 
        if (check) {
          nav(routhPath);
        }
    }, [])
    

  return <>{children}</>;
};

export default PreventComponent;
