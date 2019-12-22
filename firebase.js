import React, { useEffect, useContext } from 'react'

import firebase from 'firebase/app';
import 'firebase/auth'

import { Context } from './context'

const config = {
    apiKey: "xxx",
    authDomain: "xxx",
    databaseURL: "xxx",
    projectId: "xxx",
    storageBucket: "xxx",
    messagingSenderId: "xxx",
    appId: "xxx"
};

firebase.initializeApp(config);

export default props => {

    const [global, setGlobal] = useContext(Context)

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => user ?
            firebase.firestore().doc('users/' + user.uid).onSnapshot(doc => {
                setGlobal({
                    ...global,
                    logged: 'online',
                    uid: user.uid,
                    profile: doc.data()
                })
            })
            :
            setGlobal({ ...global, logged: 'offline' }));
    }, [firebase.auth()]);

    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}