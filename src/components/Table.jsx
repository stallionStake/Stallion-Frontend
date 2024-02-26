// components/DynamicTable.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Table = ({ label, columns, data, onAdd, onRemove }) => {
    return (
        <>
            <h2 className="text-white text-md px-2 py-2">{label}</h2>
                <div className="max-h-[400px] overflow-auto container-mx-auto p-2 rounded-xl">
                    <table className="w-full divide-y divide-gray-600 shadow-md">
                        <thead className="bg-gray-900 sticky top-0">
                            <tr>
                                {columns.map((column) => (
                                    <th key={column.accessor} className="px-4">
                                        {column.Header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-900 overflow-auto">
                            {data.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {columns.map((column) => (
                                        <td key={column.accessor} className="px-4">
                                            {column.accessor === 'actions' ? (
                                                <>
                                                    {onAdd && (
                                                        <button onClick={() => onAdd(row)}>
                                                            <FontAwesomeIcon icon={column.iconAdd} />
                                                        </button>
                                                    )}
                                                    {onRemove && (
                                                        <button onClick={() => onRemove(row)}>
                                                            <FontAwesomeIcon icon={column.iconRemove} />
                                                        </button>
                                                    )}
                                                </>
                                            ) : (
                                                row[column.accessor]
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
        </>
    );
};

export default Table;
