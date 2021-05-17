import React, {useState} from 'react'
import { View, Text } from 'react-native'
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';

const Login = () => {

    const [text, onChangeText] = useState("leonel");

    return (
        <Container>
            <Input
                label="Username"
                onChangeText={onChangeText}
                value={text}
                //error="This field are required"
            />

            <Input
                label="Password"
                onChangeText={onChangeText}
                value={text}
                icon={<Text>HIDE</Text>}
                iconPosition="right"
            />
        </Container>
    )
}

export default Login;