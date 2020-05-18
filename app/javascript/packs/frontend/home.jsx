import React from 'react';
import EventLists from './events'
import HomeTemplate from './template'

class Home extends React.Component {
    render() {        
        return (
            <React.Fragment>
                <HomeTemplate title="Events">
                    <EventLists />
                </HomeTemplate>
            </React.Fragment>
        );
    }
}

export default Home;
