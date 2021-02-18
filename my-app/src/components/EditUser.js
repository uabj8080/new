import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const EditUser = (props) => {
  const { users, editUser } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({id:"", name:""});
  const history = useHistory();
  const selectedUserId = props.match.params.id;

  useEffect(() => {
    const userId = selectedUserId;
    const selectedUser = users.find(user => user.id === userId);
    setSelectedUser(selectedUser);
  }, [selectedUserId, users]);

  const onSubmit = () => {
    editUser(selectedUser);
    history.push("/");
  }

  const onChange = (e) => {
    setSelectedUser({...selectedUser, [e.target.name]: e.target.value });
  }
  
  return (
    <div>
      <h1>Edit</h1>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input type="text" name="name" value={selectedUser.name} 
            onChange={onChange} placeholder="Enter Name"></Input>
        </FormGroup>
        <Button type="submit">Submit</Button>
        <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
      </Form>
    </div>
  )
}
