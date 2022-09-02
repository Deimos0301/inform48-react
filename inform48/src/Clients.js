import React from "react";
import './App.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import { Classes, Menu, MenuItem, MenuDivider } from "@blueprintjs/core";

class Clients extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log('aaaa')
    }
    render() {
        return (
            <Menu>
                <MenuItem icon="new-text-box" onClick={this.handleClick} text="New text box" />
                <MenuItem icon="new-object" onClick={this.handleClick} text="New object" />
                <MenuItem icon="new-link" onClick={this.handleClick} text="New link" />
                <MenuDivider />
                <MenuItem text="Settings..." icon="cog" intent="primary">
                    <MenuItem icon="tick" text="Save on edit" />
                    <MenuItem icon="blank" text="Compile on edit" />
                </MenuItem>
            </Menu>
        );
    }
}

export default Clients