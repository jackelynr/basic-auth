import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Container from './Container';
import { Button } from 'antd';

const Profile = () => {
    useEffect(() => {
        checkUser();
    }, []);

    const [user, setUser] = useState({});

    const checkUser = async () => {
        try {
            const data = await Auth.currentUserPoolUser();
            const userInfo = {
                username: data.username,
                ...data.attributes
            };
            setUser(userInfo);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Container>
            <h1>
                Profile
            </h1>

        <Authenticator>
            {({ signOut, user }) => (
                <main>
                    <h1>Hello {user.username}</h1>
                    {console.log(user)}
                    <h2>Email: {user.attributes.email}</h2>
                    <Button onClick={signOut} type='primary' size='large'>
                        Sign out
                    </Button>
                </main>
            )}
        </Authenticator>
        </Container>
    );
};

export default Profile;
