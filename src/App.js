import React from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'

const items = [
    {
        title: 'What is react?',
        content: 'Front end framework'
    },
    {
        title: 'Why use react?',
        content: 'Good'
    },
    {
        title: 'What is tree?',
        content: 'Fig'
    }
];

export default () => {
    return ( 
        <div>
            <Search />
        </div>
    );
};