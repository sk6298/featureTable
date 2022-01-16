import React from 'react'

/**
 * Simple table to render data in tabular format
 */
function Table({columns,rows}) {
  return (
    <table>
      <thead>
        <tr>
          {
            columns.map(col => {
              return <td key={col.id}>{col.label}</td>
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          rows.map(row => {
            return <tr key={row.id}>
              {
                columns.map(col => {
                  if (col.format) {
                    return <td key={col.id}>{col.format(row[col.id])}</td>
                  } else {
                    return <td key={col.id}>{row[col.id]}</td>
                  }
                })
              }
            </tr>
          })
        }
      </tbody>
    </table>
  )
}

export default Table
