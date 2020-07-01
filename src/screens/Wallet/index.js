import React, { useState } from 'react'
import { StatusBar, Switch } from "react-native";
import  {
    Wrapper,
    Container,
    Header,
    HeaderContainer,
    Title,
    BalanceContainer,
    Value,
    Bold,
    EyeButton,
    Info,
    Actions,
    Action,
    ActionLabel,
    Stats,
    UseBalance,
    UseBalanceTitle,
    PaymentMethods,
    PaymentMethodsTitle,
    Card,
    CardBody,
    CardDetails,
    CardTitle,
    CardInfo,
    Img,
    AddButton,
    AddLabel,
    UseTicketButton,
    UseTicketLabel,
    UseTicketContainer

} from './style'

import creditCard from '../../images/credit-card.png'

import { Ionicons, Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons'

export default function Wallet() {
    const [isVisible, setIsVisible] = useState(true)
    const [useBalance, setUseBalance] = useState(true)

    function handleToggleVisibility() {
        setIsVisible((prevState) => !prevState)
    }

    function HandleToggleUseBalance() {
        setUseBalance((prevState) => !prevState)
    }

    return (
        
        <Wrapper>
            <Container>
                <StatusBar 
                    barStyle="light-content"
                    
                />

                <Header 
                    colors={
                        useBalance ? ['#52e78c', '#1ab563'] : ['#d3d3d3','#868686']
                    }
                
                >
                    <HeaderContainer>
                        <Stats>
                            <Ionicons name="md-stats" size={28} color="#fff" />
                        </Stats>
                        <Title>Saldo PicPay</Title>

                        <BalanceContainer>
                            <Value>
                                R$ <Bold>{isVisible ? '0,00' : '----'}</Bold>
                            </Value>

                            <EyeButton onPress={handleToggleVisibility}>
                                <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="#fff" />
                            </EyeButton>
                        </BalanceContainer>

                        <Info>
                            Seu saldo está rendendo 100% do seu CDI
                        </Info>

                        <Actions>
                            <Action>
                                <MaterialCommunityIcons name="cash" size={28} color="#fff" />
                                <ActionLabel>Adicionar</ActionLabel>
                            </Action>

                            <Action>
                                <FontAwesome name="bank" size={20} color="#fff" />
                                <ActionLabel>Retirar</ActionLabel>
                            </Action>
                        </Actions>
                    </HeaderContainer>        
                </Header>

                <UseBalance>
                    <UseBalanceTitle>
                        Usar saldo ao pagar
                    </UseBalanceTitle>

                    <Switch 
                        value={useBalance}
                        onValueChange={HandleToggleUseBalance}
                    />
                </UseBalance>

                <PaymentMethods>
                    <PaymentMethodsTitle>
                        Formas de pagamento
                    </PaymentMethodsTitle>

                    <Card>
                        <CardBody>
                            <CardDetails>
                                <CardTitle>
                                    Cadastre seu cartão de crédito
                                </CardTitle>

                                <CardInfo>
                                    Cadastre seu cartão de crédito para poder 
                                    fazer pagamentos mesmo quando não tiver 
                                    saldo no seu PicPay.
                                </CardInfo>
                            </CardDetails>

                            <Img source={creditCard} resizeMode="contain" />
                        </CardBody>

                        <AddButton>
                            <AntDesign name="pluscircleo" size={30} color="#0db060" />
                            <AddLabel>Adicionar cartão de crédito</AddLabel>
                        </AddButton>
                    </Card>

                    <UseTicketContainer>
                        <UseTicketButton>
                            <MaterialCommunityIcons name="ticket-outline" size={20} color="#0db060" />
                            
                            <UseTicketLabel>Usar código promocional</UseTicketLabel>
                        </UseTicketButton>
                    </UseTicketContainer>
                </PaymentMethods>
            </Container>
        </Wrapper>
    )
}