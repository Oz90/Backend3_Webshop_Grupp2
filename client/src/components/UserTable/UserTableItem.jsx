import React from 'react'
import { UserTableRowStyled, UserTableDataStyled } from '../UserTable/UserTableStyled'

export default function UserTableItem(props) {
    return (
        
        <UserTableRowStyled>
            <UserTableDataStyled>{props.name}</UserTableDataStyled>
            <UserTableDataStyled>{props.value}</UserTableDataStyled>
        </UserTableRowStyled>
        
    )
}
