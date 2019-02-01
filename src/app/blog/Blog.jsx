import React from 'react';
import { FormControl, Col, Panel, Button, Table, Modal, Row } from "react-bootstrap";
import swal from 'sweetalert';
const async = require('async');
class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            employee: {},
            showModal: false
        }
    }

    componentWillMount() {
        var self = this;
        async.series([
            self.getEmployee.bind(self)
        ]);
    }

    getEmployee() {
        
        var self = this;
        //const token = "Z3v1JpnRkFbMo_oRC6026d-k2pdYGHy6QafrbK2exn1FnJDEe9QvlzhD6SWyqlbXTeRB9d2WoYL21hn-uGncsg";
        var apiUrl ='https://dev60497.service-now.com/api/now/table/u_cloth?user=admin&digest="48d84343db0323007d2aab7dca96198e5800fec48bc10ce1d47855b7e33234f83b19a4e3"';
        //var apiUrl = 'https://dev60497.service-now.com/incident.do?name=admin&password=Honey&JSONv2&sysparm_action=getRecords&sysparm_query=active=true';
        fetch(apiUrl, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'Authorization': 'Basic '+btoa('admin:Honey')
                //'Authorization': 'Bearer '+token
            },
            
        }).then(res => {
            return res.json();
        }).then(data => {
            self.setState({
                employees: data.result
            });
        }).catch(err => {
            swal({
                title: 'Error',
                text: 'Failed to load all Employee!!!',
                icon: 'error'
            });
        });
    }

    createEmployee() {
        var apiUrl = 'https://dev60497.service-now.com/api/now/table/u_cloth';
        var self = this;
        fetch(apiUrl, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic '+btoa('admin:Honey')
            },
            body: JSON.stringify(self.state.employee)
        }).then(res => {
            return res;
        }).then(data => {
            swal({
                title: 'Success',
                text: 'Succesfully Added!',
                icon: 'success'
            });
            self.getEmployee();
            self.closeModal();
        }).catch(err => {
            swal({
                title: 'Error',
                text: 'Failed to add!',
                icon: 'error'
            });
        });
    }

    updateEmployee(sys_id) {
        var apiUrl = 'https://dev60497.service-now.com/api/now/table/u_cloth/' + this.state.employee.sys_id;
        var self = this;
        fetch(apiUrl, {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic '+btoa('admin:Honey')
            },
            
            body: JSON.stringify(this.state.employee)
        }).then(res => {
            return res;
        }).then(data => {
            swal({
                title: 'Success',
                text: 'Succesfully Upadted!',
                icon: 'success'
            });
            self.getEmployee();
            self.closeModal();
        }).catch(err => {
            swal({
                title: 'Error',
                text: 'Failed to update!',
                icon: 'error'
            });
            self.closeModal();
        });
    }

    removeEmployee(event, item) {
        var apiUrl = 'https://dev60497.service-now.com/api/now/table/u_cloth/' + item.sys_id;
        var self = this;

        fetch(apiUrl, {
            method: 'delete',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic '+btoa('admin:Honey')
            }
        }).then(res => {
            return res;
        }).then(function (isConfirm) {
            if (isConfirm) {
                swal({
                    title: "Are you sure?",
                    text: "You will not be able to recover this imaginary data!",
                    icon: "warning",
                    buttons: [
                        'No, cancel it!',
                        'Yes, I am sure!'
                    ]
                });
                self.getEmployee();
            } else {
                swal("Cancelled", "Your imaginary file is safe :)", "error");
            }
        }).catch(err => {
            swal({
                title: 'Error',
                text: 'Failed to remove!',
                icon: 'error'
            });
        });
    }

    handleChange(event) {
        var obj = this.state.employee;
        if (event.target.name == 'status') {
            obj[event.target.name] = (event.target.checked ? true : false);
        }
        else {
            obj[event.target.name] = event.target.value;
        }

        this.setState({
            employee: obj
        }, () => {
            console.log(JSON.stringify(this.state.employee))
        });
    }

    openModal(event, item) {
        this.setState({
            employee: (item == null ? {} : Object.assign({}, item)),
            createForm: (item == null ? true : false),
            showModal: true
        });
    }

    closeModal() {
        this.setState({
            showModal: false,
            employee: {}
        });
    }

    render() {
        return (
            <div>
                <h1>Blog!</h1>
                <Panel>
                    <Row>
                        <Col><Button onClick={(event) => this.openModal(event)}>Create</Button></Col>
                    </Row>
                    <Table>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Number</td>
                                <td>Product Name</td>
                                <td>Price</td>
                                <td>Created on</td>
                                <td>Status</td>
                                <td>Remove</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employees.length > 0 && this.state.employees.map((item, index) => (
                                <tr key={index}>
                                    <td onClick={(event) => this.openModal(event, item)}>{item.sys_id}</td>
                                    <td onClick={(event) => this.openModal(event, item)}>{item.u_number}</td>
                                    <td onClick={(event) => this.openModal(event, item)}>{item.u_product_name}</td>
                                    <td onClick={(event) => this.openModal(event, item)}>{item.u_price}</td>
                                    <td onClick={(event) => this.openModal(event, item)}>{item.sys_created_on}</td>
                                    <td onClick={(event) => this.openModal(event, item)}>{item.status ? 'Active' : 'Inactive'}</td>
                                    <td ><Button className="btn btn-danger" onClick={(event) => this.removeEmployee(event, item)}>Remove</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Modal show={this.state.showModal}
                        onHide={this.closeModal.bind(this)} animation={false}
                        backdrop={false} keyboard={false}>
                        <Modal.Header>
                            <Modal.Title>Create Employee</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="form-group">
                                <label className="control-label">Number</label>
                                <FormControl type="text" name="u_number" value={this.state.employee.u_number}
                                    className="form-control" onChange={(event) => this.handleChange(event)} />
                            </div>
                            <div className="form-group">
                                <label className="control-label">Product Name</label>
                                <FormControl type="text" name="u_product_name" value={this.state.employee.u_product_name}
                                    className="form-control" onChange={(event) => this.handleChange(event)}
                                />
                            </div>
                            <div className="form-group">
                                <label className="control-label">Price</label>
                                <FormControl type="text" name="u_price" value={this.state.employee.u_price}
                                    className="form-control" onChange={(event) => this.handleChange(event)} />
                            </div>
                            <div className="form-group">
                                <label className="control-label">Activate or Inactivate</label><br />
                                <label className="switch switch-lg">
                                    <input type="checkbox" name="status" value={this.state.employee.status}
                                        onChange={(event) => this.handleChange(event)}
                                        checked={this.state.employee.status} />
                                    <em></em>
                                </label>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            {this.state.createForm &&
                                <Button className="btn btn-primary" onClick={(event) => this.createEmployee(event)}>Create</Button>
                            }
                            {!this.state.createForm &&
                                <Button className="btn btn-primary" onClick={(event) => this.updateEmployee(event)}>Update</Button>
                            }
                            <Button className="btn btn-secondary" onClick={(event) => this.closeModal(event)}>close</Button>
                        </Modal.Footer>
                    </Modal>
                </Panel>
            </div>
        );
    }
}
export default Blog;