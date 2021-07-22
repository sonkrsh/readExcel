import React, { useEffect } from "react";
import { getImages } from "../../Containers/AddImages/actions";
import { useDispatch } from "react-redux";


function index() {
    const disptach = useDispatch();


    useEffect(() => {
        disptach(getImages());
    }, []);

    return <div>Hlo From DashBoard</div>;
}

export default index;
