import c from "./ProfileInfo.module.css";
import React from "react";

function ProfileInfo() {
    return (
        <div className={c.wrapper}>
            <div>
                <img className={c.ava}
                     src="https://www.rgo.ru/sites/default/files/styles/full_view/public/media/2020-12-14/peyzazh_stepanenko_nikolay_-_dolina_oseni_-_2020_-_515869.jpg?itok=BtvZDoAB"
                     alt=""/>
            </div>
            <div className={c.description}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo