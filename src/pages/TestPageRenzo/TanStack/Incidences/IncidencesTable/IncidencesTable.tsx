import React from 'react';
import * as debug from '../debugHelper';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { Incidence } from '../../../../../types/Incidence';
// import * as ScrollArea from '@radix-ui/react-scroll-area';
import styles from './IncidencesTable.module.css';

const DEBUG = true;

function IncidencesTable({ incidences }) {
  // const rerender = React.useReducer(() => ({}), {})[1];
  const [sorting, setSorting] = React.useState<SortingState>([]);

  DEBUG && debug.logFirst(incidences);

  const columns = React.useMemo<ColumnDef<Incidence>[]>(
    () => [
      {
        accessorKey: 'title',
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        accessorFn: (row) => row.description,
        id: 'description',
        cell: (info) => info.getValue(),
        header: () => <span>Description</span>,
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'date',
        header: () => 'Fecha',
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'category',
        header: () => <span>Tipo</span>,
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'user',
        header: 'Usuario',
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'status',
        header: 'Estado',
        footer: (props) => props.column.id,
      },
    ],
    []
  );

  const table = useReactTable({
    data: incidences,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  return (
    <div className={styles["container-foo"]}>
          <table className="table">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <th key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder ? null : (
                          <div
                            className={
                              header.column.getCanSort()
                                ? 'cursor-pointer select-none'
                                : ''
                            }
                            onClick={header.column.getToggleSortingHandler()}
                            title={
                              header.column.getCanSort()
                                ? header.column.getNextSortingOrder() === 'asc'
                                  ? 'Sort ascending'
                                  : header.column.getNextSortingOrder() ===
                                    'desc'
                                  ? 'Sort descending'
                                  : 'Clear sort'
                                : undefined
                            }
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            {{
                              asc: ' 🔼',
                              desc: ' 🔽',
                            }[header.column.getIsSorted() as string] ?? null}
                          </div>
                        )}
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody>
              {table
                .getRowModel()
                .rows.slice(0, 10)
                .map((row) => {
                  return (
                    <tr key={row.id}>
                      {row.getVisibleCells().map((cell) => {
                        return (
                          <td key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
            </tbody>
          </table>
    </div>
  );
}

export default IncidencesTable;
