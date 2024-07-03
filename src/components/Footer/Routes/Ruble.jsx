import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    name=number,
    calories=string,
    fat=string,
    carbs=string,
    protein=string,
    naqt=string,
) {
    return { name, calories, fat, carbs, protein, naqt };
}

const rows = [
    createData(1, "1 250 000 sum","1 250 000 sum", "June 28, 2024 9:41 AM","Olindi", "Naqt"),
    createData(1, "1 250 000 sum","1 250 000 sum", "June 28, 2024 9:41 AM","Olindi", "Naqt"),
    createData(1, "1 250 000 sum","1 250 000 sum", "June 28, 2024 9:41 AM","Olindi", "Naqt"),
    createData(1, "1 250 000 sum","1 250 000 sum", "June 28, 2024 9:41 AM","Olindi", "Naqt"),
    createData(1, "1 250 000 sum","1 250 000 sum", "June 28, 2024 9:41 AM","Olindi", "Naqt"),
    createData(1, "1 250 000 sum","1 250 000 sum", "June 28, 2024 9:41 AM","Olindi", "Naqt"),
    createData(1, "1 250 000 sum","1 250 000 sum", "June 28, 2024 9:41 AM","Olindi", "Naqt"),
    createData(1, "1 250 000 sum","1 250 000 sum", "June 28, 2024 9:41 AM","Olindi", "Naqt"),
    createData(1, "1 250 000 sum","1 250 000 sum", "June 28, 2024 9:41 AM","Olindi", "Naqt"),

];


const Ruble = () => {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Valyuta</StyledTableCell>
                            <StyledTableCell>Qanchadan olindi yoki sotildi</StyledTableCell>
                            <StyledTableCell>Sumda qancha buladi</StyledTableCell>
                            <StyledTableCell>Vaqti</StyledTableCell>
                            <StyledTableCell>Status</StyledTableCell>
                            <StyledTableCell>Naqt</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}₽
                                </StyledTableCell>
                                <StyledTableCell>{row.calories}</StyledTableCell>
                                <StyledTableCell>{row.fat}</StyledTableCell>
                                <StyledTableCell>{row.carbs}</StyledTableCell>
                                <StyledTableCell>{row.protein}</StyledTableCell>
                                <StyledTableCell>{row.naqt}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Ruble