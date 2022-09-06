import React from 'react'
import { TableCell, TableHead, TableRow } from '@mui/material';
import { TableCellStyle } from '../../core/theme/Table';

const TableComponent = (props: any) => {
  return (
    <>
      <TableHead>
        <TableRow>
          {props.Photo ? <TableCell style={TableCellStyle}>{props.Photo}</TableCell> : null}
          {props.Name ? <TableCell style={TableCellStyle}>{props.Name}</TableCell> : null}
          {props.CategoryName ? (
            <TableCell style={TableCellStyle}>{props.CategoryName}</TableCell>
          ) : null}
          {props.SubCategoryName ? (
            <TableCell style={TableCellStyle}>{props.SubCategoryName}</TableCell>
          ) : null}
          {props.MainCategoryName ? (
            <TableCell style={TableCellStyle}>{props.MainCategoryName}</TableCell>
          ) : null}
          {props.PriceProduct ? (
            <TableCell style={TableCellStyle}>{props.PriceProduct}</TableCell>
          ) : null}
          {props.SaleProduct ? (
            <TableCell style={TableCellStyle}>{props.SaleProduct}</TableCell>
          ) : null}
          {props.CountProduct ? (
            <TableCell style={TableCellStyle}>{props.CountProduct}</TableCell>
          ) : null}
          {props.StatusProduct ? (
            <TableCell style={TableCellStyle}>{props.StatusProduct}</TableCell>
          ) : null}
          {props.Date ? <TableCell style={TableCellStyle}>{props.Date}</TableCell> : null}
          {props.Actions ? <TableCell style={TableCellStyle}>{props.Actions}</TableCell> : null}
        </TableRow>
      </TableHead>
    </>
  );
}

export default TableComponent