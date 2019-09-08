import { Toolbar } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const Container = styled(Toolbar)`
    background-color: var(--primary-bg);
    color: var(--primary-text);
    font-size: 20px;
    line-height: 40px;
`;

// instead of extending a built-in component from styled-components, we enhanced the Toolbar component from material-ui.
const ChatsNavbar: React.FC = () => <Container>Whatsapp Clone</Container>;

export default ChatsNavbar;
