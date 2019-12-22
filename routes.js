import React, { useContext } from 'react'

import { createAppContainer, createStackNavigator } from 'react-navigation'
import { Text, View } from 'react-native'
import { Context } from './context'

import { color } from '../data'

import PageOffline from '../pages/PageOffline'
import PageOnlineAdm from '../pages/PageOnlineAdm'
import PageOnlineUser from '../pages/PageOnlineUser'

const Adm = createAppContainer(
    createStackNavigator({
        Home: { screen: PageOnlineAdm },
    },
        {
            defaultNavigationOptions: {
                headerTitle: <Text style={{ color: color.primary, fontSize: 20, fontWeight: 'bold', marginLeft: 15 }}>Title APP</Text>,
            },
            mode: 'modal',
        })
)
const User = createAppContainer(
    createStackNavigator({
        Home: { screen: PageOnlineUser },
    },
        {
            defaultNavigationOptions: {
                headerTitle: <Text style={{ color: color.primary, fontSize: 20, fontWeight: 'bold', marginLeft: 15 }}>Title APP</Text>,
            },
            mode: 'modal',
        })
)

const Offline = createAppContainer(
    createStackNavigator({
        Home: { screen: PageOffline },
    },
        {
            defaultNavigationOptions: {
                headerTitle: <View><Text style={{ color: color.primary, fontSize: 20, fontWeight: 'bold', marginLeft: 15 }}>Title APP</Text></View>,
            },
            mode: 'modal',
        })
)

export default Routes = () => {

    const [global] = useContext(Context)

    return (
        <React.Fragment>
            {(global.logged === 'online' && global.profile.type === 'adm') && <Adm />}
            {(global.logged === 'online' && global.profile.type === 'user') && <User />}
            {global.logged === 'offline' && <Offline />}
            {/* ::: falta adicionar o item carregando */}
        </React.Fragment>
    )
}