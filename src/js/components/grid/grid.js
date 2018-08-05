import React from 'react';
import GridColumn from './gridColumn';

const Grid = ({ columns = [] }) => (
    <div className="grid">
        {columns.map((column) => {
            return <GridColumn key={column.code} config={column}/>
        })}
    </div>
);

export default Grid;
