// components/DynamicTable.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Table = ({ label, columns, data, onAdd, onRemove }) => {
    return (
        <>
            <h2 className="text-white text-lg px-4 py-2">{label}</h2>
            <div className="container mx-auto px-4 bg-blue-900 rounded-xl">
                <div className="max-h-[400px] container mx-auto overflow-y-scroll">
                    <table className="w-full divide-y divide-gray-600 shadow-md ">
                        <thead className="bg-gray-900 text-justify sticky top-0">
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
            </div>
        </>
    );
};

export default Table;
