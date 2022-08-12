import React from "react";
import '@blueprintjs/core/lib/css/blueprint.css';
import { Tree, Classes } from "@blueprintjs/core";

class Product extends React.Component {
    sampleData = [
        {
            id: 0,
            icon: "folder-close",
            label: "Главная папка",
            depth: 1,
            childNodes: [
                {
                    id: 3,
                    hasCaret: false, 
                    icon: "folder-close",
                    label: "Файлик 1"
                },
                {
                    id: 4,
                    icon: "document",
                    label: "Док 1"
                },
                {
                    id: 5,
                    icon: "user",
                    label: "Профиль"
                },
            ]
        },
        {
            id: 1,
            icon: "user",
            label: "Профиль пользователя"
        },
        {
            id: 2,
            icon: "folder-close",
            label: "Информация"
        },
    ];

    constructor(props) {
        super(props);
        this.state = {
            nodes: this.sampleData
        };
        this.onExpand = this.onExpand.bind(this);
        this.onCollapse = this.onCollapse.bind(this);
    }
    onExpand(node, path) {
        node.isExpanded = true;
        this.setState(this.state);
    }

    onCollapse(node, path) {
        node.isExpanded = false;
        this.setState(this.state);
    }

    
    render() {

        return (
            <div style={{
                display: 'block', flexWrap: 'wrap', alignItems: "center", justifyContent: "center", width: 500, marginLeft: 'auto',marginRight: 'auto'
            }}>
                <h4>ReactJS Blueprint Tree Component</h4>
                <div><Tree contents={this.sampleData} onNodeExpand={this.onExpand} onNodeCollapse={this.onCollapse} className={Classes.ELEVATION_0}></Tree></div>
            </div>
        );
    }
}

export default Product;