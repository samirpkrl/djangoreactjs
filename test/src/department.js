import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {AddDeptModal} from './AddDeptModal';
import {EditDepModal} from './EditDepModal';

export class department extends Component{
	constructor(props){
		super(props);
		this.state={deps:[],addModalshow:false,editModalshow:false}
	}
	refreshList(){
		//console.log('process',process.env.REACT_APP_BASE_URL+'dep/');
		fetch(process.env.REACT_APP_BASE_URL+'dep/')
		.then(response=>response.json())
		.then(data=>{
			this.setState({deps:data});
			//console.log(data);
		});
	}
	componentDidMount(){
		this.refreshList();
	}
	componentDidUpdate(){
		this.refreshList();
	}
	deldepartment(depid){
		//alert("Hello");
		//alert(fetch(process.env.REACT_APP_BASE_URL+'dep/'+depid))
		if(window.confirm("Are you sure want to delete this department?")){
			fetch(process.env.REACT_APP_BASE_URL+'dep/delete/'+depid,{
				method: 'DELETE',
				header:{'Accept':'application/json',
				'Content-Type':'application/json'}
			})
			.then(res=>res.json())
			.then((result)=>{
			alert(result);
		})
		}
	}
	render(){
		const{deps,dname,address,query}=this.state;
		let addModalclose=()=>this.setState({addModalshow:false});
		let editModalclose=()=>this.setState({editModalshow:false});
		return(
			<div >
				<Table ClassName="mt-4" striped boardered hover size="sm">
					<thead>
						<tr>
							<th>DepartmentID</th>
							<th>DepartmentName</th>
							<th>Address</th>
							<th>Query</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
					{deps.map(dep=>
						<tr key={dep.id}>
							<td>{dep.id}</td>
							<td>{dep.name}</td>
							<td>{dep.address}</td>
							<td>{dep.query}</td>
							<td>
								<ButtonToolbar>
									<Button className="mr-2" variant="info"
									onClick={()=>this.setState({editModalshow:true,dname:dep.name,address:dep.address,query:dep.query})}>
										Edit
									</Button>
									<Button className="mr-2" variant="danger"
										onClick={()=>this.deldepartment(dep.id)}>
										Delete
									</Button>
									
									<EditDepModal show={this.state.editModalshow}
										onHide={editModalclose}
										depname={dname}
										address={address}
										query={query}/>
									</ButtonToolbar>
							</td>
						</tr>)}
					</tbody>
				</Table>
				<ButtonToolbar>
				<Button varient="primary"
				onClick={()=>this.setState({addModalshow:true})}>
					Add Department
				</Button>
				<AddDeptModal show={this.state.addModalshow} 
				onHide={addModalclose}
				>
				</AddDeptModal>
				</ButtonToolbar>
			</div>
		)
	}
}
