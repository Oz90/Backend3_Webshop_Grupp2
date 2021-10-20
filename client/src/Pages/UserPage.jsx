import React, { useState, useEffect } from "react";
import { getUser } from '../fetches/fetches';
import { UserTableStyled, UserTableRowStyled, UserTableDataStyled, UserTableBodyStyled}  from '../components/UserTable/UserTableStyled'
import UserTableItem from "../components/UserTable/UserTableItem";

export const UserPage = () => {
    const [userData, setUserData] = useState(undefined);

    async function getUserData() {
        const userData = await getUser()
        console.log(userData)
        setUserData(userData.data);
    }

    useEffect(() => {
        getUserData()
    }, []);

    return (
        <>
                <UserTableStyled class="table">
                    <thead>
                        <UserTableRowStyled>
                            <th scope="col">User Settings</th>
                        </UserTableRowStyled>
                    </thead>
                    <UserTableBodyStyled>
                    <UserTableItem name='Display Name' value={userData?.displayName} />
                        <UserTableRowStyled>
                            <UserTableDataStyled>Full Name</UserTableDataStyled>
                            <UserTableDataStyled>{userData?.fullName}</UserTableDataStyled>
                        </UserTableRowStyled>
                        <UserTableRowStyled>
                            <UserTableDataStyled>Email</UserTableDataStyled>
                            <UserTableDataStyled>{userData?.email}</UserTableDataStyled>
                        </UserTableRowStyled>
                        <UserTableRowStyled>
                            <UserTableDataStyled>Phone Number</UserTableDataStyled>
                            <UserTableDataStyled>{userData?.phoneNumber}</UserTableDataStyled>
                        </UserTableRowStyled>
                        <UserTableRowStyled>
                            <UserTableDataStyled>Address</UserTableDataStyled>
                            <UserTableDataStyled>{userData?.address}</UserTableDataStyled>
                        </UserTableRowStyled>
                        <UserTableRowStyled>
                            <UserTableDataStyled>Zip Code</UserTableDataStyled>
                            <UserTableDataStyled>{userData?.zipcode}</UserTableDataStyled>
                        </UserTableRowStyled>
                        <UserTableRowStyled>
                            <UserTableDataStyled>City</UserTableDataStyled>
                            <UserTableDataStyled>{userData?.city}</UserTableDataStyled>
                        </UserTableRowStyled>
                    </UserTableBodyStyled>
                </UserTableStyled>
        </>
    );
};
