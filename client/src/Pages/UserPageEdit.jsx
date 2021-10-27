import React, { useState, useEffect } from "react";
import { getUser } from '../fetches/fetches';
import { EditUserForm } from "../components/EditUserForm/EditUserForm";
import { MiddleColumnStyled } from '../components/Details/DetailsStyled'


export const UserPageEdit = () => {
    const [userData, setUserData] = useState(undefined);

    async function getUserData() {
        const fetchedUserData = await getUser()
        console.log(fetchedUserData)
        setUserData(fetchedUserData.data);
    }

    useEffect(() => {
        getUserData()

    }, []);

    return (
        <>
            <MiddleColumnStyled>
            {userData ?
                
                <EditUserForm userData={userData} />  
                :
                <p>Laddar... </p>

            }
            </MiddleColumnStyled>
        </>
    );
};
