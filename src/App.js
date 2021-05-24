import React, {useState} from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/dropdown'
import Translate from './components/translate'

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

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Purple',
        value: 'purple'
    }
];

export default () => {

    return ( 
        <div>
            <Translate />
        </div>
    );
};