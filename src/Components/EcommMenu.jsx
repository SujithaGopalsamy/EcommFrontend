import React from 'react';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct'

const EcommMenu = () => {
    return (
        <BrowserRouter>
            <Navbar className="navbar navbar-dark bg-dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">E-Comm App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="Products" id="products-dropdown">
                                <NavDropdown.Item as={Link} to="/AddProduct">Add Product</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/UpdateProduct">Update Product</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/ListProducts">List Products</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/Cart">Cart</Nav.Link>
                            <Nav.Link as={Link} to="/Orders">Orders</Nav.Link>

                            <Nav.Link as={Link} to="/UserRegistration">User Registration</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/AddProduct" element={<AddProduct/>} />
                <Route path="/UpdateProduct" element={<UpdateProduct/>} />
                <Route path="/ListProducts" element={<div>List Products Page</div>} />
                <Route path="/Cart" element={<div>Cart Page</div>} />
                <Route path="/Orders" element={<div>Orders Page</div>} />
                <Route path="/UserRegistration" element={<div>User Registration Page</div>} />
            </Routes>
        </BrowserRouter>
    );
};

export default EcommMenu;
