import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditDepModal extends Component{
    constructor(props){
        super(props);
		this.state = {
			depname: 'Accounts',
		}
		
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    //handleSubmit(event){
    //    event.preventDefault();
    //    fetch(process.env.REACT_APP_API+'department',{
    //        method:'PUT',
    //        headers:{
    //            'Accept':'application/json',
    //            'Content-Type':'application/json'
    //        },
    //        body:JSON.stringify({
    //            DepartmentId:event.target.DepartmentId.value,
    //            DepartmentName:event.target.DepartmentName.value
    //        })
    //    })
    //    .then(res=>res.json())
    //    .then((result)=>{
    //        alert(result);
    //    },
    //    (error)=>{
    //        alert('Failed');
    //    })
    //}
	handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
	for (let [key, value] of data.entries()) {
      console.log(key, value);
    //console.log(data.get('departmentadd')); // reference by form input's `name` tag
    }}
    render(){
        return (
			<div className="container">
			
				<Modal
				
				{...this.props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
				>
				
					<Modal.Header clooseButton>
						<Modal.Title id="contained-modal-title-vcenter">
							Edit Department
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						
						<Row>
							<Col sm={12}>
								<Form onSubmit={this.handleSubmit}>
								<Row>
									<Col sm={6}>
									<Form.Group controlId="DepartmentName">
										<Form.Label>DepartmentName</Form.Label>
										<Form.Control type="text" name="departmentName" required
										/* disabled */
										defaultValue={this.props.depname}
										placeholder="DepartmentName"/>
									</Form.Group>
				
									<Form.Group controlId="Departmentadd">
										<Form.Label>DepartmentName</Form.Label>
										<Form.Control type="text" name="departmentadd" required 
										defaultValue={this.props.address}
										placeholder="Department Address"/>
									</Form.Group>
									</Col>
							
									<Col sm={6}>
									<Form.Group controlId="Query">
											<Form.Label>Query</Form.Label>
											<Form.Control type="text" name="query" required 
											defaultValue={this.props.query}
											placeholder="Add query"/>
									</Form.Group>
									
									</Col>
									<Form.Group>
										<Button variant="primary" type="submit">
											Update Department
										</Button>
									</Form.Group>
								</Row>	
								</Form>
							</Col>
						</Row>
					</Modal.Body>
					
					<Modal.Footer>
						<Button variant="danger" onClick={this.props.onHide}>Close</Button>
					</Modal.Footer>
				
				</Modal>
			
			</div>
        )
    }

}