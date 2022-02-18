import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

TableEmployee.propTypes = {
    datas: PropTypes.array,
    columns: PropTypes.arrayOf(PropTypes.shape({
        titel: PropTypes.string,
        dataIndex: PropTypes.string,
        key: PropTypes.string,
        render: PropTypes.func,
    })),
    onCheckBox: PropTypes.func,
};
TableEmployee.defaultProps = {
    datas: [],
    columns: [{
        title: '',
        dataIndex: '',
        key: 1,
        render: null
    }],
    onCheckBox: null
}

function TableEmployee(props) {
    const { datas, columns, onCheckBox } = props;
    const [checkAll, setCheckAll] = useState(false);

    function handleCheckBoxChange(datas) {
        if (onCheckBox) {
            onCheckBox(datas);
        }
    }
    useEffect(() => {
        const handleCheckBoxChange = () => {
            if (datas.every((value) => { return value.isCheck === true })) {
                setCheckAll(true)
            } else setCheckAll(false)
        }
        handleCheckBoxChange()
    })
    return (
        <div className="align-middle overflow-x-auto border first-letter rounded-t-md">
            <table className="min-w-full divide-y divide-gray-200">
                < thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-1.5 text-left text-xs font-medium  uppercase tracking-wider">
                            <input type="checkbox" className="accent-blue-500"
                                checked={checkAll}
                                onChange={e => {
                                    let nowCheck = (e.target.checked)
                                    handleCheckBoxChange(datas.map(data => {
                                        data.isCheck = nowCheck
                                        return data
                                    }))
                                }}
                            />
                        </th>
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
                    {datas.map(data => {
                        return (
                            <tr key={data.id} className="h-full">
                                <td className="px-4 py-1.5 whitespace-nowrap">
                                    <input type="checkbox" className="accent-blue-500"
                                        checked={data.isCheck}
                                        onChange={(e) => {
                                            let nowCheck = e.target.checked
                                            handleCheckBoxChange(
                                                datas.map(dataNew => {
                                                    if (data.id === dataNew.id) {
                                                        dataNew.isCheck = nowCheck
                                                    }
                                                    return dataNew
                                                })
                                            )
                                        }}
                                    />
                                </td>
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
                    })}
                </tbody>
            </table>
        </div>
    )
}

TableEmployee.propTypes = {}

export default TableEmployee
