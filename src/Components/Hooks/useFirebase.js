import React, { useState } from 'react'

const useFirebase = () => {
    const [user, setuser] = useState({});

    const signInWithGoogle = () => {
        console.log('sign in soon')
    }
    return { user, signInWithGoogle }


}

export default useFirebase; 