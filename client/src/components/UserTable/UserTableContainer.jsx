import React from "react";
import { UserTableStyled, UserTableRowStyled, UserTableBodyStyled } from './UserTableStyled'
import UserTableItem from "./UserTableItem";


export default function UserTableContainer({ userData, setEditUser }) {



  const handleOnClick = (e) => {
    e.preventDefault();
    setEditUser(true)
  }

  /*  const [userData, setUserData] = useState(undefined);
   const [editUser, setEditUser] = useState(false); */
  return (
    <>
      <UserTableStyled>
        <thead>
          <UserTableRowStyled>
            <th scope="col">User Settings</th>
          </UserTableRowStyled>
        </thead>
        <UserTableBodyStyled>
          <UserTableItem name='Display Name' value={userData.displayName} />
          <UserTableItem name='Full Name' value={userData?.fullName} />
          <UserTableItem name='Email' value={userData?.email} />
          <UserTableItem name='Phone Number' value={userData?.phoneNumber} />
          <UserTableItem name='Address' value={userData?.address} />
          <UserTableItem name='Zip Code' value={userData?.zipcode} />
          <UserTableItem name='City' value={userData?.city} />
        </UserTableBodyStyled>
      </UserTableStyled>
    </>
  )
}
