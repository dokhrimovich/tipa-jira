import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import GridColumn from 'js/components/grid/gridColumn';

const Grid = ({ columns = [] }) => (
    <div className="grid normal">
        {columns.map((column) => {
            return <GridColumn key={column.id} config={column}/>
        })}
    </div>
);

const mapStateToProps = (state) => ({
    columns: state.statuses
});

export default withRouter(connect(
    mapStateToProps
)(Grid));
