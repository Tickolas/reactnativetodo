import { Text } from 'react-native'
import moment from 'moment'
import React from 'react'

const Header = () => (
    <>
        <Text>todo</Text>
        <Text>{moment().format('dddd DD MMM YYYY')}</Text>
    </>
)

export default Header
