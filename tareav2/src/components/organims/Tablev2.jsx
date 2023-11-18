import React from 'react'
import {useReactTable,getCoreRowModel,flexRender} from "@tanstack/react-table";

const role=[
  {
  id: 1,
  name: "Admin" ,
  },
  {
    id: 2,
    name: "User" ,
  },
]

const permissions = [
    {
       id: 1,
       entity : "Project",
       permission : "Delete"
    }
]

function Tablev2() {

  const columns= [
    {
      header:"Role",
      accessorKey:"name",
    },
    {
      header:"Perm",
      accessorKey:"permission"
    },
    {
      header:"Entity",
      accessorKey:"entity"
    },
    
  ]

  const table = useReactTable(
    {
    role,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div>
      <table>
        <thead>
          {
            table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
               {
                headerGroup.headers.map(header =>(
                  <th key={header.id}>
                    {header.column.columnDef.header}
                  </th>
                ))
               }
              </tr>
            ))
          }
        </thead>
        <tbody>
        <tbody>
          {table.getRowModel().rows.map(row => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
        </tbody>
        <tfoot>
          <tr>
            <td>id</td>
          </tr>
        </tfoot>
      </table>
    </div>
    
  )
}

export default Tablev2