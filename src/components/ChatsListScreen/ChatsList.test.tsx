import React from 'react';
import ReactDOM from 'react-dom';
import {
    cleanup,
    render,
    waitForDomChange,
    getByTestId,
} from '@testing-library/react';
import ChatsList from './ChatsList';

// Mock the response to contain a fake chat, so we won't need to make an actual call to our GraphQL API.
// We will create a new instance of <ChatsList />and render it in a container element.
// We will wait for changes in the DOM caused by setState().
// We will test the contents of the container.

describe('ChatsList', () => {
    afterEach(cleanup);

    it('renders fetched chats data', async () => {
        fetchMock.mockResponse(
            JSON.stringify({
                data: {
                    chats: [
                        {
                            id: 1,
                            name: 'Foo Bar',
                            picture: 'https://localhost:4000/picture.jpg',
                            lastMessage: {
                                id: 1,
                                content: 'Hello',
                                createdAt: new Date('1-1-2019'),
                            },
                        },
                    ],
                },
            })
        );

        {
            const { container, getByTestId } = render(<ChatsList />);

            await waitForDomChange({ container });

            expect(getByTestId('name')).toHaveTextContent('Foo Bar');
            expect(getByTestId('picture')).toHaveAttribute(
                'src',
                'https://localhost:4000/picture.jpg'
            );
            expect(getByTestId('content')).toHaveTextContent('Hello');
            expect(getByTestId('date')).toHaveTextContent('02:00');
        }
    });
});
