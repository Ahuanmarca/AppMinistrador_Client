import * as React from 'react';
import './Basic.module.css';
import exampleData from '../exampleData.json'; 

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

type Incident = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  user_dni: string;
  building_id: number;
  provider_id: number;
  date: string;
  time: string;
  status: string;
}

const defaultData: Incident[] = exampleData;
const columnHelper = createColumnHelper<Incident>();

const columns = [
  columnHelper.accessor('id', {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.title, {
    id: 'title',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Título</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('description', {
    header: () => 'Descripción',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('date', {
    header: () => <span>Fecha</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('user_dni', {
    header: 'Usuario',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('status', {
    header: 'Estado',
    footer: (info) => info.column.id,
  }),
];

function Basic() {
  const [data, _setData] = React.useState(() => [...defaultData]);
  const rerender = React.useReducer(() => ({}), {})[1];

  console.debug({ data: exampleData });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="h-4" />
      <button onClick={() => rerender()} className="border p-2">
        Rerender
      </button>
    </div>
  );
}

export default Basic;
