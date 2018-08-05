import React from 'react';
import GridColumnContainer from '../../containers/gridColumnContainer';

const Grid = ({ columns = [] }) => (
    <div className="grid">
        {columns.map((column) => {
            return <GridColumnContainer key={column.id} config={column}/>
        })}
    </div>
);

export default Grid;
