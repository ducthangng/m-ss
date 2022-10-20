import React, {useMemo} from 'react'
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'
import  MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns.tsx'
import './Table.css'

import { GlobalFilter } from './GlobalFilter.tsx'


export const CompleteTable = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const defaultColumn = useMemo(() => {
        return {
            Filter: GlobalFilter,
        }
    }, [])

    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow, 
        state, 
        setGlobalFilter,
        page,
        nextPage, 
        previousPage,
        pageOptions,
        gotoPage,
        pageCount,
        canNextPage,
        canPreviousPage,
        setPageSize,
    } = useTable({
        columns,
        data,
        defaultColumn,
        initialState: { pageIndex: 0}
    }, 
    useGlobalFilter,
    useSortBy,
    usePagination,
    
    )

    const {globalFilter, pageIndex, pageSize} = state

    return (
        <>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {
                        headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                <span>
                                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                                </span>
                            </th>
                        ))}
                </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })} 
            </tbody>
        </table>
        <div>
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>
                </span>
                <span>
                    | Go to Page: {' '}
                    <input type = 'number' defaultValue={pageIndex + 1}
                    onChange={e =>{
                        const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(pageNumber)
                    }}
                    style ={{width: '50px'}}
                    />
                </span>
                    <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                        {
                            [10,25,50].map((pageSize) => (
                                <option key={pageSize} value={pageSize}>
                                    Show {pageSize}
                                </option>
                            ))
                        }
                    </select>

                <button 
                    onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                        {'<<'}
                </button>
                <button
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                >Previous
                </button>

                <button
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                >Next
                </button>
                <button 
                    onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                        {'>>'}
                </button>
            </div>

        </>
    )
}


export default CompleteTable;