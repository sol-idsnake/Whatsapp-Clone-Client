import ChatsList from './ChatsList';
import ChatsNavbar from './ChatsNavbar';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
`;

const ChatsListScreen: React.FC = () => (
    <Container>
        <ChatsNavbar />
        <ChatsList />
    </Container>
);

export default ChatsListScreen;
