import React from 'react';

const GridColumn = ({ config }) => (
    <div className="grid-column">
        <div className="grid-column_header"><header>{config.title}</header></div>
        <div className="grid-column_content"></div>
    </div>
);

export default GridColumn;
