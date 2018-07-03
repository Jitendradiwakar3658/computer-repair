import React from 'react';
import { FormControl, Col, Panel, Button, Table, Modal, Row } from "react-bootstrap";
import swal from 'sweetalert';
const async = require('async');
class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            student: {
                name: '',
                address: '',
                rollno: ''
            },
            createForm: true,
            students: [],
            
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentWillMount() {
        var self = this;
        async.series([
            self.getStudent.bind(self)
        ]);

    }

    getStudent() {
        var self = this;
        var url = "http://localhost:8080/getallstudent";
        fetch(url, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(res => {
            // console.log(JSON.stringify(res));
            return res.json();
        }).then(result => {
            // console.log(JSON.stringify(result));
            self.setState({
                students: result
            })
        }).catch(err => {
            swal({
                title: 'Error',
                text: 'Failed to get the students! ',
                icon: 'error'
            })
        });
    }

    createStudent() {
        var apiUrl = "http://localhost:8080/addstudent";
        // var self = this;
        fetch(apiUrl, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(this.state.student)
        }).then(res => {
            return res;
        }).then(data => {
            swal({
                title: 'Success',
                text: 'Successfully created! ',
                icon: 'success'
            })
            this.getStudent();
            this.closeModal();
        }).catch(err => {
            swal({
                title: 'Error',
                text: 'Failed to create the students! ',
                icon: 'error'
            });
        });
    }

    updateStudent(id) {
        var apiUrl = "http://localhost:8080/updatestudent?id="+this.state.student.id;
        fetch(apiUrl, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'put',
            body: JSON.stringify(this.state.student)
        }).then(res => {
            return res;
        }).then(data => {
            swal({
                title: 'Success',
                text: 'Successfully Updated! ',
                icon: 'success'
            })
            this.getStudent();
            this.closeModal();
        }).catch(err => {
            swal({
                title: 'Error',
                text: 'Failed to be Updated! ',
                icon: 'error'
            })
        });
    }

    removerStudent(event,item) {
        console.log(JSON.stringify(item));
        var apiUrl = "http://localhost:8080/deletebyid?id="+ item.id;
        fetch(apiUrl,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'delete'
        }).then(res => {
            return res;
        }).then(data =>{
            this.closeModal();
            swal({
                title: 'Success',
                text: 'Successfully Removed!',
                icon: 'success'
            })
            this.getStudent();
            
        }).catch(err =>{
            this.closeModal();
            swal({
                title: 'Error',
                text: 'Failed to be Removed! ',
                icon: 'error'
            })
        });
    }

    handleChange(event) {
        var obj = this.state.student;
        obj[event.target.name] = event.target.value;

        this.setState({
            student: obj
        });
    }

    openModal(event, item) {
        
        this.setState({
            student: (item == null ? {} : Object.assign({}, item)),
            createForm: (item == null? true:false),
            showModal: true
        },()=>{
            console.log(JSON.stringify(this.state.student))
        })
    }

    closeModal() {
        this.setState({
            showModal: false,
            student: {}
        })
    }

    // editStudentDetails(e,item){
    //     console.log(JSON.stringify(item))
    //     }

    render() {
        return (
            <div>
                <h1>Blog!</h1>
                <Panel>
                    <Row>
                        <Col xs={12} className="pull-right" >
                            <Button className="btn " onClick={(event) => this.openModal(event)}>Create Student</Button>
                        </Col>
                    </Row>
                    <Table>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Address</td>
                                <td>Roll no</td>
                                <td>Remove Student</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.students.map((item, index) => (
                                <tr key={index} onClick={(event) => this.openModal(event, item)} 
                                // onClick={(event) => this.editStudent(event, item)}
                            >
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.address}</td>
                                    <td>{item.rollno}</td>
                                    {this.state.student &&
                                    <td><Button className="btn btn-danger" onClick={(event) => this.removerStudent(event,item)}>Remove</Button></td>
                                    }
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <Modal show={this.state.showModal}
                        onHide={this.closeModal.bind(this) } animation={false}
                        backdrop={false} keyboard={false}
                    >
                        <Modal.Header >
                            <Modal.Title>Create Student</Modal.Title>
                        </Modal.Header>
                        <Modal.Body >
                            
                            <div className="form-group">
                                <label className="control-label">Name</label>
                                <FormControl id="name" name="name" type="text"
                                    value={this.state.student.name} className="form-control"
                                    onChange={(event) => this.handleChange(event)} />
                            </div>
                            <div className="form-group">
                                <label className="control-label">Address</label>
                                <FormControl id="address" name="address" type="text"
                                    value={this.state.student.address} className="form-control"
                                    onChange={(event) => this.handleChange(event)} />
                            </div>
                            <div>
                                <label className="control-label">Roll No</label>
                                <FormControl id="rollno" name="rollno" type="text"
                                    className="form-control" value={this.state.student.rollno}
                                    onChange={(event) => this.handleChange(event)} />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            {this.state.createForm &&
                                <Button className="btn btn-primary save-btn" type="submit" onClick={this.createStudent.bind(this)}>Create</Button>
                            }

                            {!this.state.createForm &&
                                <Button className="btn btn-primary save-btn" onClick={(e)=>this.updateStudent(e)}>Update</Button>
                            }                            
                            <Button className="btn btn-secondary" onClick={this.closeModal.bind(this)}>Cancel</Button>
                        </Modal.Footer>
                    </Modal>

                </Panel>
            </div>
        );
    }
}
export default Blog;