// import ChatsList from './components/ChatsListScreen/ChatsList';
// import ChatsNavbar from './components/ChatsListScreen/ChatsNavbar';
import ChatsListScreen from './components/ChatsListScreen';
import React from 'react';

// Everything after : describes the types of the App variable and has no affect on the behavior and execution of the app.
// It will tell Typescript how App is supposed to look like, so that in case we make a mistake, Typescript will warn us before we get the app running.
const App: React.FC = () => (
    <div>
        <ChatsListScreen />
    </div>
);

export default App;
