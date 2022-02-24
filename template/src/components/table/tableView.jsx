import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

TableView.propTypes = {
    datas: PropTypes.array,
    columns: PropTypes.arrayOf(PropTypes.shape({
        titel: PropTypes.string,
        dataIndex: PropTypes.string,
        key: PropTypes.string,
        render: PropTypes.func,
    })),
    onCheckBox: PropTypes.func,
};
TableView.defaultProps = {
    datas: [],
    columns: [{
        title: '',
        dataIndex: '',
        key: 1,
        render: null
    }],
    
}

function TableView(props) {
    const { datas, columns, loading } = props;
    
    return (
        <div className="align-middle overflow-x-auto border first-letter rounded-t-md">
            <table className="min-w-full divide-y divide-gray-200">
                < thead className="bg-gray-100">
                    <tr>
                        {columns.map(column => {
                            return (
                                <th key={column.key} className="px-4 py-1.5 text-left text-xs text-gray-500 uppercase tracking-wider">
                                    {column.title}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                    { !loading ?
                        datas.map(data => {
                            return (
                                <tr key={data.id} className="h-full">
                                    {columns.map(col => {
                                        if (col.render) return (
                                            <td key={col.key} className="px-4 py-1.5 whitespace-nowrap">
                                                {col.render(data)}
                                            </td>
                                        )
                                        return (
                                            <td key={col.key} className="px-4 py-1.5 whitespace-nowrap text-gray-500">
                                                {data[col.dataIndex]}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        }) : <p>Loading...</p>
                    }
                </tbody>
            </table>
        </div>
    )
}

TableView.propTypes = {}

export default TableView
