import React from 'react'
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import {
    Container,
    Header,
    Title,
    Text1,
    Text2,
    Card,
    CardHeader,
    Avatar,
    Description,
    Bold,
    CardBody,
    UserName,
    CardFooter,
    Details,
    Value,
    Divide,
    Date,
    Action,
    Option,
    OptionLabel
} from './styles'

import avatar from '../../images/avatar.png'

export default function Activities() {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
                <Text1>Todas</Text1>
                <Text2>Minhas</Text2>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@matheusfellype</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Matheus Fellype</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 18,00</Value>
                        <Divide />

                        <Feather name="lock" color="#fff" size={14} />
                        <Date>Há 2 anos</Date>
                    </Details>

                    <Action>
                        <Option>
                            <MaterialCommunityIcons size={14} color="#fff" name="comment-outline" />
                            <OptionLabel>0</OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign size={14} color="#fff" name="hearto" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Action>
                </CardFooter>
            </Card>
        </Container>
    )
}