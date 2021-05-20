import React from 'react'
import Accordion from './components/Accordion'

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
            <Accordion items={items}/>
        </div>
    );
};