import React from "react";
import '@blueprintjs/core/lib/css/blueprint.css';
import {Tree, Classes} from "@blueprintjs/core";

class Product extends React.Component {
    render() {
        const sampleData = [
            {
                id: 0,
                icon: "folder-close",
                label: "Folders",
                depth: 1,
                childNodes: [
                    {
                        id: 3,
                        icon: "document",
                        label: "Folder 1"
                    },
                    {
                        id: 4,
                        icon: "document",
                        label: "Folder 2"
                    },
                ]
            },
            {
                id: 1,
                icon: "user",
                label: "Profile"
            },
            {
                id: 2,
                icon: "folder-close",
                label: "Documents"
            },
        ]

        return (
            <div style={{
                display: 'block', width: 700, padding: 30
            }}>
                <h4>ReactJS Blueprint Tree Component</h4>
                <div><Tree contents={sampleData} className={Classes.ELEVATION_0}></Tree></div>
            </div>
        );
    }
}

export default Product;