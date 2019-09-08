// This file is configured automatically by create-react-appand loaded by Jest
// Use this file to define a fake Fetch API using the jest-fetch-mock library
import '@testing-library/jest-dom/extend-expect';
import { act } from '@testing-library/react';
import { GlobalWithFetchMock } from 'jest-fetch-mock';

const customGlobal: GlobalWithFetchMock = global as GlobalWithFetchMock;

customGlobal.fetch = require('jest-fetch-mock');
customGlobal.fetchMock = customGlobal.fetch;
