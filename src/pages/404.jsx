import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";  // Add a maintenance icon
import INFO from "../data/user";
import "./styles/404.css";

const Notfound = () => {
    useEffect(() => {
        document.title = `Under Maintenance | ${INFO.main.title}`;
    }, []);

    return (
        <React.Fragment>
            <div className="not-found page-content">
                <div className="content-wrapper">
                    <div className="notfound-logo-container">

                    </div>
                    <div className="notfound-container">
                        <div className="notfound-message">
                            <div className="notfound-title">
                                Under Maintenance <FontAwesomeIcon icon={faWrench} />
                            </div>
                            <div className="not-found-message">
                                Our website is currently undergoing scheduled maintenance.
                                <br />
                                Please check back later.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Notfound;
