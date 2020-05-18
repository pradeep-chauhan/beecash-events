import React from 'react';
import MaterialUICollapseMenu from '../_component/mainMenu'

const items = [
    {
        "id": 1,
        "title": "",
        "items": [
            {
                "id": "dashboard",
                "icon": "dashboard",
                "name": "Dashboard",
                "link": "/app/dashboard"
            }
        ]
    },
    {
        "id": 2,
        "title": "",
        "items": [
            {
                "id": "user-module",
                "icon": "group",
                "name": "user",
                "link": "/app/users",                
            }
        ]
    },    
    {
        "id": 3,
        "title": "",
        "items": [
            {
                "id": "event-module",
                "icon": "group",
                "name": "event",
                "link": "/app/events",                
            }
        ]
    },    
]

class MainMenu extends React.Component {

    render() {
        return (
            <React.Fragment>
                <MaterialUICollapseMenu items={items} />
            </React.Fragment>
        )

    }
}

export default MainMenu;