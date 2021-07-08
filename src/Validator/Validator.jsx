import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Joi from "joi";
import React from "react";

const rows = [
  {
    id: 1,
    first_name: "Ericka",
    last_name: "Gillmor",
    email: "egillmor0@xinhuanet.com",
    gender: "Non-binary",
    ip_address: "243.189.120.237",
  },
  {
    id: 2,
    first_name: null,
    last_name: "Paulitschke",
    email: null,
    gender: null,
    ip_address: "2.102.138.79",
  },
  {
    id: 3,
    first_name: "Lydon",
    last_name: "Fairbeard",
    email: "lfairbeard2@cam.ac.uk",
    gender: "Female",
    ip_address: "118.55.2.186",
  },
  {
    id: 4,
    first_name: "Daffy",
    last_name: "Kach",
    email: "dkach3@opensource.org",
    gender: "Genderqueer",
    ip_address: "10.49.135.124",
  },
  {
    id: 5,
    first_name: "Maisie",
    last_name: "Birtwistle",
    email: "mbirtwistle4@alibaba.com",
    gender: "Genderfluid",
    ip_address: "125.244.74.151",
  },
  {
    id: 6,
    first_name: "Cilka",
    last_name: "Kay",
    email: "ckay5@bravesites.com",
    gender: "Genderfluid",
    ip_address: "206.220.255.239",
  },
  {
    id: 7,
    first_name: "Pierre",
    last_name: "Cubbini",
    email: "pcubbini6@mozilla.com",
    gender: "Female",
    ip_address: "33.166.3.18",
  },
  {
    id: 8,
    first_name: "Korey",
    last_name: null,
    email: "ktrickey7@digg.com",
    gender: "Non-binary",
    ip_address: null,
  },
  {
    id: 9,
    first_name: "Birdie",
    last_name: "Vegas",
    email: "bvegas8@ox.ac.uk",
    gender: "Female",
    ip_address: "165.153.34.3",
  },
  {
    id: 10,
    first_name: "Kasper",
    last_name: "Ribbens",
    email: "kribbens9@ftc.gov",
    gender: "Male",
    ip_address: "124.231.77.63",
  },
];

export const Validator = () => {
  const schema = Joi.object({
    id: Joi.number().positive(),
    first_name: Joi.string().alphanum().min(3),
    last_name: Joi.string().alphanum().min(3),
    gender: Joi.string().valid("Male", "Female").required(),
  }).options({ stripUnknown: true });

  const getRowStyle = (id) => {
    const row = rows.find((item) => item.id === id);
    const { error } = schema.validate(row);

    return {
      backgroundColor:
        error === undefined || error === null ? "#CCFFD8" : "#FDB9C1",
    };
  };

  return (
    <>
      <Table aria-label="table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>IP Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} style={getRowStyle(row.id)}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.ip_address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
