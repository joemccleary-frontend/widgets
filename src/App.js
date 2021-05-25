import React, {Component, useState} from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/dropdown'
import Translate from './components/translate'
import Route from './Route'
import Header from './components/header'

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

const showAccordion = () => {
    if (window.location.pathname === '/') {
        return <Accordion items={items} />;
    }
};
const showList = () => {
    if (window.location.pathname === '/list') {
        return <Search />;
    }
};
const showDropdown = () => {
    if (window.location.pathname === '/dropdown') {
        return <Dropdown />;
    }
};
const showTranslate = () => {
    if (window.location.pathname === '/translate') {
        return <Translate />;
    }
};

const showComponent = (route, component) => {
    return window.location.pathname === route
    ? component 
    : null;
}

export default () => {
    const [selected, setSelected] = useState();
    return ( 
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                    label="selecta color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                    />
            </Route>
            <Route path="/translate">
                <Translate/>
            </Route>


        </div>
    );
};