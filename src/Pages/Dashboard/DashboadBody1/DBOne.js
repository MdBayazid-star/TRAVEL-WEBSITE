import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
// import useAuth from "../../../Hooks/useAuth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userImg from "./../../../Images/Users/user.png";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://cryptic-ridge-44622.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const handleDeleteUser = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?", id);
    if (proceed) {
      const url = `https://cryptic-ridge-44622.herokuapp.com/users/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingUsers = users.filter((user) => user._id !== id);
            setUsers(remainingUsers);
          }
        });
    }
  };
  return (
    <div className="container ">
      <div className="row my-5">
        <div className="title">
          <h4 className="sub-heading">Added Users Info</h4>
          <h3 class="heading">
            <span>u</span>
            <span>s</span>
            <span>e</span>
            <span>a</span>
            <span>r</span>
            <span>s</span>
          </h3>
        </div>
        <div className="col-lg-8 my-5">
          <div className="mx-4">
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{
                            minWidth: column.minWidth,
                            fontSize: "1.8rem",
                            background: "#ff7c5b",
                            color: "#FFF",
                          }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.code}
                          >
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell
                                  key={column.id}
                                  align={column.align}
                                  style={{
                                    minWidth: column.minWidth,
                                    fontSize: "1.4rem",
                                    background: "#ff7c5b3a",
                                    color: "#000",
                                  }}
                                >
                                  {column.format && typeof value === "number"
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                style={{
                  background: "#ff7c5b",
                  fontSize: "1.4rem !important",
                }}
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </div>
        </div>
        <div className="col-lg-4 my-5 shadow borderRadius-4">
          <h1 className="text-center color-pink fw-bold mt-5">
            Users {users.length}
          </h1>
          <hr />
          <div className="mx-4 mt-3">
            <div className="row overflow-scroll" style={{ height: "400px" }}>
              {users.map((user) => (
                <div className="d-flex justify-content-around align-items-center p-3 px-4 my-4 shadow borderRadius-4">
                  <div className="">
                    <div>
                      {user.photo ? (
                        <span>
                          <img
                            className="userImg ms-3"
                            src={user.photo}
                            alt=""
                          />
                        </span>
                      ) : (
                        <span>
                          <img
                            className="userImg ms-3 p-1"
                            src={userImg}
                            alt=""
                          />
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="">
                    <div className="d-flex flex-column align-items-center">
                      {user.name ? (
                        <span className="fs-3">{user.name}</span>
                      ) : (
                        <span className="">name</span>
                      )}
                      {user.email ? (
                        <span className="fs-5">{user.email}</span>
                      ) : (
                        <span className="fs-5">info@example.com</span>
                      )}
                    </div>
                  </div>
                  <div className=" d-flex align-items-center justify-content-center">
                    <Link to={`/users/${user._id}`}>
                      <button className="btn btn-travel me-2">Update</button>
                    </Link>
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="btn btn-danger"
                    >
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
