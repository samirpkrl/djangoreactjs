import React,{Component} from 'react';
import {Modal,Button, Row,Col,Form} from 'react-bootstrap';

export class AddDeptModal extends Component{
	constructor(props){
		super(props);
		this.handleSubmit=this.handleSubmit.bind(this);
	}
	handleSubmit(event){
		event.preventDefault();
		//console.log(event.target.query.value);
		/*var name=event.target.departmentname.value,
		var address=event.target.departmentadd.value,
		var query=null
		var formData = new FormData()
		formData.append('name': 'name','address':'address','query':'query'); */
		fetch(process.env.REACT_APP_BASE_URL+'dep/',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
				//'Access-Control-Allow-Origin':'http://localhost:3000',
                //'Access-Control-Allow-Headers':'*'
            },
            body:JSON.stringify({
				name:event.target.departmentname.value,
				address:event.target.departmentadd.value,
				query:event.target.query.value,
			}) 
		})
		.then(res=>res.json())
		.then((result)=>{
			alert(result);
		},
		(error)=>{
			//console.log(res.json());
			alert(error);
		})
	}
	render(){
		return(
		<div className="container">
			<Modal
			{...this.props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
			>
			<Modal.Header clooseButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Add Department
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
									<Form.Control type="text" name="departmentname" required placeholder="Department Name"/>
								</Form.Group>
								<Form.Group controlId="Departmentadd">
									<Form.Label>Department Address</Form.Label>
									<Form.Control type="text" name="departmentadd" required placeholder="Department address"/>
								</Form.Group>
							</Col>
							
							<Col sm={6}>
							<Form.Group controlId="query">
									<Form.Label>Query</Form.Label>
									<Form.Control type="text" name="query" required placeholder="Add query"/>
							</Form.Group>
							
							</Col>
						
							<Form.Group>
								<Button variant="primary" type="submit">Add Department</Button>
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