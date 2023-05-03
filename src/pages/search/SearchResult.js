import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { visuallyHidden } from '@mui/utils';
import { Card, Container, Stack, Chip, Button } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { withStyles } from "@mui/styles";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from 'react-router-dom';
import Fab from '@mui/material/Fab';

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

const headCells = [
  {
    id: 'uniqueId',
    disablePadding: false,
    label: 'Unique_Id',
  },
  {
    id: 'name',
    disablePadding: false,
    label: 'Name',
  },
  {
    id: 'fatherName',
    disablePadding: false,
    label: 'Father Name',
  },
  {
    id: 'address',
    disablePadding: false,
    label: 'Address',
  },
  {
    id: 'country',
    disablePadding: false,
    label: 'Country',
  },
  {
    id: 'state',
    disablePadding: false,
    label: 'State',
  },
  {
    id: 'city',
    disablePadding: false,
    label: 'City',
  },
  {
    id: 'action',
    disablePadding: false,
    label: 'Action',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};


export default function SearchResult() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchResult, setSearchResult] = React.useState([])

  const navigate = useNavigate()


  React.useEffect(() => {
    if (localStorage.getItem('searchResult') !== 'undefined') {
      setPage(1)
      setPageCount(Math.ceil(JSON.parse(localStorage.getItem('searchResult')).length / rowsPerPage))
      createPaginatedData(1)
    }
    window.scrollTo(0, 0)
  }, [])

  const handleNavigate = (data) => {
    localStorage.setItem("customerData", JSON.stringify(data))
    navigate("/customerData")
  }

  const StyledChip1 = withStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.error.lighter,
      color: theme.palette.error.darker,
      "&:hover": {
        color: 'white',
        backgroundColor: theme.palette.error.darker
      },
      "&:focus": {
        color: 'white',
        backgroundColor: theme.palette.error.darker
      },
    }
  }))(Chip);

  const StyledChip2 = withStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.warning.lighter,
      color: theme.palette.warning.darker,
      "&:hover": {
        color: 'white',
        backgroundColor: theme.palette.warning.darker
      },
      "&:focus": {
        color: 'white', backgroundColor: theme.palette.warning.darker
      },
    }
  }))(Chip);

  const StyledChip3 = withStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.primary.lighter,
      color: theme.palette.primary.darker,
      "&:hover": {
        color: 'white',
        backgroundColor: theme.palette.primary.darker
      },
      "&:focus": {
        color: 'white', backgroundColor: theme.palette.primary.darker
      },
    }
  }))(Chip);

  const gotoSearchPage = () => {
    localStorage.removeItem('searchResult')
    navigate("/search")
  }

  const createPaginatedData = (page) => {
    setPage(page)
    const array = JSON.parse(localStorage.getItem('searchResult')).splice((page * rowsPerPage) - rowsPerPage, rowsPerPage)
    searchResult.splice(0)
    setSearchResult(array)
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const createAddress = (data) => {
    const address = data.split(",")
    if (address.length !== 0) {
      if (address[0] && address[2]) {
        return `${address[0]},${address[2]}`
      }
      else {
        return `${address[0]}`
      }
    }

  }


  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  return (
    <>
      <Container sx={{ mt: 4 }}>
        <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', color: (theme) => theme.palette.info.darker }} mb={4}>
          SearchResult
        </Typography>
        <Box sx={{ width: '100%' }}>
          <Card sx={{ width: '100%', mb: 2 }}>
            <TableContainer>
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size={dense ? 'small' : 'medium'}
              >
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                  rowCount={selected.length}
                />
                <TableBody>
                  {searchResult.map((row, index) => {
                    const isItemSelected = isSelected(row);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row)}
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={index}
                        selected={isItemSelected}
                      >
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"

                        >
                          {row.unique_code}
                        </TableCell>
                        <TableCell >{`${row.name_of_shareholder} ${row.surname_of_shareholder}`}</TableCell>
                        <TableCell >{`${row.middlename_of_shareholder} ${row.surname_of_shareholder}`}</TableCell>
                        <TableCell >{createAddress(row.address_firstline)}</TableCell>
                        <TableCell ><StyledChip1 label={row.address_country ? row.address_country : '----'} /></TableCell>
                        <TableCell ><StyledChip2 label={row.address_state ? row.address_state : '----'} /></TableCell>
                        <TableCell ><StyledChip3 label={row.address_city ? row.address_city : '----'} /></TableCell>
                        <TableCell >
                          <Toolbar title="view data" disableGutters>
                            <Fab size="small" sx={{ backgroundColor: '#2cccc4' }} aria-label="add" onClick={() => handleNavigate(row)}>
                              <RemoveRedEyeIcon sx={{ color: 'white' }} />
                            </Fab>
                          </Toolbar>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Box>
      </Container>
      <Box component={"div"} sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Stack spacing={2} >
          <Pagination count={pageCount} page={page} onChange={(e, value) => createPaginatedData(value)} />
        </Stack>
      </Box>
      <Box component={"div"} sx={{ display: 'flex', justifyContent: 'center', mt: 4, p: 1 }}>
        <Button variant='contained' onClick={() => gotoSearchPage()}>Back</Button>
      </Box>
    </>
  );
}
