import React from 'react';
import { FormControl, Col, Panel, Button, Table, Modal, Row } from "react-bootstrap";
import swal from 'sweetalert';
const async = require('async');
class Blog extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         employees: [],
    //         employee: {},
    //         showModal: false
    //     }
    // }

    // componentWillMount() {
    //     var self = this;
    //     async.series([
    //         self.getEmployee.bind(self)
    //     ]);
    // }

    // getEmployee() {
    //     var self = this;
    //     var apiUrl = 'http://localhost:8080/v1/findAll/employee';
    //     fetch(apiUrl, {
    //         method: 'get',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(res => {
    //         return res.json();
    //     }).then(data => {
    //         self.setState({
    //             employees: data
    //         });
    //     }).catch(err => {
    //         swal({
    //             title: 'Error',
    //             text: 'Failed to load all Employee!!!',
    //             icon: 'error'
    //         });
    //     });
    // }

    // createEmployee() {
    //     var apiUrl = 'http://localhost:8080/v1/add/employee';
    //     var self = this;
    //     fetch(apiUrl, {
    //         method: 'post',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(self.state.employee)
    //     }).then(res => {
    //         return res;
    //     }).then(data => {
    //         swal({
    //             title: 'Success',
    //             text: 'Succesfully Added!',
    //             icon: 'success'
    //         });
    //         self.getEmployee();
    //         self.closeModal();
    //     }).catch(err => {
    //         swal({
    //             title: 'Error',
    //             text: 'Failed to add!',
    //             icon: 'error'
    //         });
    //     });
    // }

    // updateEmployee(id) {
    //     var apiUrl = 'http://localhost:8080/v1/update/employee?id=' + this.state.employee.id;
    //     var self = this;
    //     fetch(apiUrl, {
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         method: 'put',
    //         body: JSON.stringify(this.state.employee)
    //     }).then(res => {
    //         return res;
    //     }).then(data => {
    //         swal({
    //             title: 'Success',
    //             text: 'Succesfully Upadted!',
    //             icon: 'success'
    //         });
    //         self.getEmployee();
    //         self.closeModal();
    //     }).catch(err => {
    //         swal({
    //             title: 'Error',
    //             text: 'Failed to update!',
    //             icon: 'error'
    //         });
    //         self.closeModal();
    //     });
    // }

    // removeEmployee(event, item) {
    //     var apiUrl = 'http://localhost:8080/v1/remove/employee?id=' + item.id;
    //     var self = this;

    //     fetch(apiUrl, {
    //         method: 'delete',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(res => {
    //         return res;
    //     }).then(function (isConfirm) {
    //         if (isConfirm) {
    //             swal({
    //                 title: "Are you sure?",
    //                 text: "You will not be able to recover this imaginary data!",
    //                 icon: "warning",
    //                 buttons: [
    //                     'No, cancel it!',
    //                     'Yes, I am sure!'
    //                 ]
    //             });
    //             self.getEmployee();
    //         } else {
    //             swal("Cancelled", "Your imaginary file is safe :)", "error");
    //         }
    //     }).catch(err => {
    //         swal({
    //             title: 'Error',
    //             text: 'Failed to remove!',
    //             icon: 'error'
    //         });
    //     });
    // }

    // handleChange(event) {
    //     var obj = this.state.employee;
    //     if (event.target.name == 'status') {
    //         obj[event.target.name] = (event.target.checked ? true : false);
    //     }
    //     else {
    //         obj[event.target.name] = event.target.value;
    //     }

    //     this.setState({
    //         employee: obj
    //     }, () => {
    //         console.log(JSON.stringify(this.state.employee))
    //     });
    // }

    // openModal(event, item) {
    //     this.setState({
    //         employee: (item == null ? {} : Object.assign({}, item)),
    //         createForm: (item == null ? true : false),
    //         showModal: true
    //     });
    // }

    // closeModal() {
    //     this.setState({
    //         showModal: false,
    //         employee: {}
    //     });
    // }

    render() {
        return (
            <div>
                <h1>Blog!</h1>
                {/* <Panel>
                    <Row>
                        <Col><Button onClick={(event) => this.openModal(event)}>Create</Button></Col>
                    </Row>
                    <Table>
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Department</td>
                                <td>Salary</td>
                                <td>Age</td>
                                <td>Status</td>
                                <td>Remove</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employees.map((item, index) => (
                                <tr key={index}>
                                    <td onClick={(event) => this.openModal(event, item)}>{item.id}</td>
                                    <td onClick={(event) => this.openModal(event, item)}>{item.name}</td>
                                    <td onClick={(event) => this.openModal(event, item)}>{item.department}</td>
                                    <td onClick={(event) => this.openModal(event, item)}>{item.salary}</td>
                                    <td onClick={(event) => this.openModal(event, item)}>{item.age}</td>
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
                                <label className="control-label">Name</label>
                                <FormControl type="text" name="name" value={this.state.employee.name}
                                    className="form-control" onChange={(event) => this.handleChange(event)} />
                            </div>
                            <div className="form-group">
                                <label className="control-label">Department</label>
                                <FormControl type="select" name="department" value={this.state.employee.department}
                                    componentClass="select" className="form-control" onChange={(event) => this.handleChange(event)}
                                >
                                    <option value="">select department</option>
                                    <option value="Hr">Hr</option>
                                    <option value="SAP">SAP</option>
                                    <option value="Software Developer">Software Developer</option>
                                    <option value="Software Engineer">Software Engineer</option>
                                    <option value="Network Engineer">Network Engineer</option>
                                    <option value="UI Developer">UI Developer</option>
                                    <option value="Web Developer">Web Developer</option>
                                </FormControl>
                            </div>
                            <div className="form-group">
                                <label className="control-label">Salary</label>
                                <FormControl type="text" name="salary" value={this.state.employee.salary}
                                    className="form-control" onChange={(event) => this.handleChange(event)} />
                            </div>
                            <div className="form-group">
                                <label className="control-label">Age</label>
                                <FormControl type="text" name="age" value={this.state.employee.age}
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
                </Panel> */}
            </div>
        );
    }
}
export default Blog;