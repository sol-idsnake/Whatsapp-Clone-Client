import { List, ListItem } from '@material-ui/core';
import { useState, useMemo } from 'react';
import moment from 'moment';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: calc(100% - 64px);
    overflow-y: overlay;
`;

const StyledList = styled(List)`
    padding: 0 !important;
`;

const StyledListItem = styled(ListItem)`
    display: flex;
    height: 76px;
    padding: 0 15px;
`;

const ChatPicture = styled.img`
    border-radius: 50%;
    height: 50px;
    object-fit: cover;
    width: 50px;
`;

const ChatInfo = styled.div`
    border-bottom: 0.5px solid silver;
    height: 46px;
    margin-left: 10px;
    padding: 15px 0;
    position: relative;
    width: calc(100% - 60px);
`;

const ChatName = styled.div`
    margin-top: 5px;
`;

const MessageContent = styled.div`
    color: gray;
    font-size: 15px;
    margin-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const MessageDate = styled.div`
    color: gray;
    font-size: 13px;
    position: absolute;
    right: 0;
    top: 20px;
`;

const getChatsQuery = `
  query GetChats {
    chats {
      id
      name
      picture
      lastMessage {
        id
        content
        createdAt
      }
    }
  }
`;

const ChatsList = () => {
    const [chats, setChats] = useState<any[]>([]);

    // https://reactjs.org/docs/hooks-reference.html#usememo
    // used to run a computation only once certain conditions were met - will be used to run the fetch() function only once the component has mounted.
    useMemo(async () => {
        const body = await fetch(
            `${process.env.REACT_APP_SERVER_URL}/graphql`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query: getChatsQuery }),
            }
        );

        const {
            data: { chats },
        } = await body.json();

        setChats(chats);
    }, []);

    return (
        <Container>
            <StyledList>
                {chats.map(chat => {
                    return (
                        <StyledListItem key={chat.id} button>
                            <ChatPicture
                                alt="Profile"
                                data-testid="picture"
                                src={chat.picture}
                            />
                            <ChatInfo>
                                <ChatName data-testid="name">
                                    {chat.name}
                                </ChatName>
                                {chat.lastMessage && (
                                    <React.Fragment>
                                        <MessageContent data-testid="content">
                                            {chat.lastMessage.content}
                                        </MessageContent>
                                        <MessageDate data-testid="date">
                                            {moment(
                                                chat.lastMessage.createdAt
                                            ).format('HH:mm')}
                                        </MessageDate>
                                    </React.Fragment>
                                )}
                            </ChatInfo>
                        </StyledListItem>
                    );
                })}
            </StyledList>
        </Container>
    );
};

export default ChatsList;
