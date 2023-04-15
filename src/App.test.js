import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import ContactusComponent from "./components/contactusForm/contactus.component";

test('Firebase Connection Test', () => {
  const { getByText } = render(
      <App />
  );
  expect(getByText("Submit")).toBeInTheDocument();
});

test('Contact Us Test', () => {
    const { getByText } = render(
        <App/>
    );
    expect(getByText("singhsinterior.info@gmail.com")).toBeInTheDocument();
});

test('About Us Test', () => {
    const { getByText } = render(
            <App />
    );
    expect(getByText("Upcomming Events")).toBeInTheDocument();
});

test('Database Connection Test', () => {
    const { getByText } = render(
            <App />
    );
    expect(getByText("Upcomming Events")).toBeInTheDocument();
});

test('Database Connection Test', () => {
    const { getByText } = render(
        <App />
    );
    expect(getByText("Upcomming Events")).toBeInTheDocument();
});

test('Database Connection Test', () => {
    const { getByText } = render(
        <App />
    );
    expect(getByText("Upcomming Events")).toBeInTheDocument();
});

test('Database Connection Test', () => {
    const { getByText } = render(
        <App />
    );
    expect(getByText("Upcomming Events")).toBeInTheDocument();
});

test('Database Connection Test', () => {
    const { getByText } = render(
        <App />
    );
    expect(getByText("Upcomming Events")).toBeInTheDocument();
});

test('Services', () => {
    const { getByText } = render(
        <App />
    );
    expect(getByText("Services")).toBeInTheDocument();
});

test('Database Connection Test', () => {
    const { getByText } = render(
        <App />
    );
    expect(getByText("Process")).toBeInTheDocument();
});

test('Database Connection Test', () => {
    const { getByText } = render(
        <App />
    );
    expect(getByText("Upcomming Events")).toBeInTheDocument();
});

test('Database Connection Test', () => {
    const { getByText } = render(
        <App />
    );
    expect(getByText("Upcomming Events")).toBeInTheDocument();
});

test('Database Connection Test', () => {
    const { getByText } = render(
        <App />
    );
    expect(getByText("Upcomming Events")).toBeInTheDocument();
});

test('Database Connection Test', () => {
    const { getByText } = render(
        <App />
    );
    expect(getByText("Upcomming Events")).toBeInTheDocument();
});

test('Services', () => {
    const { getByText } = render(
        <App />
    );
    expect(getByText("Services")).toBeInTheDocument();
});

test('Database Connection Test', () => {
    const { getByText } = render(
        <App />
    );
    expect(getByText("Process")).toBeInTheDocument();
});
