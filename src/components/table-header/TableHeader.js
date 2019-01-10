import React from 'react'
import './TableHeader.css'

function TableHeader() {
    return (
        <tr>
            <th className="table-header-cell">Season year</th>
            <th className="table-header-cell">Season champion</th>
        </tr>
    )
}

export default TableHeader