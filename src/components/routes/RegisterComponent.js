import React, { useRef } from 'react';
import { Link, ScrollRestoration } from 'react-router-dom';
import Layout from './Layout';
import AddRegister from './crud/AddRegister';
import ViewRegister from './crud/ViewRegister';
import UpdateRegister from './crud/UpdateRegister';
import DeleteRegister from './crud/DeleteRegister';
import ScrollUp from '../home/ScrollUp';

const RegisterComponent = () => {
  const addRef = useRef(null);
  const viewRef = useRef(null);
  const updateRef = useRef(null);
  const deleteRef = useRef(null);

  const handleLinkClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
  <>
<Layout />
<div className="container mt-4">
<nav className="navbar navbar-expand-lg navbar-light bg-light  mb-4">
<Link className="navbar-brand" to="#"><h2>Admin Dashboard</h2></Link>
          
<div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav">
<li className="nav-item"><button className="nav-link nav-button btn btn-link" onClick={() => handleLinkClick(addRef)}>Add</button></li>
<li className="nav-item"><button className="nav-link nav-button btn btn-link" onClick={() => handleLinkClick(viewRef)}>View</button></li>
<li className="nav-item"><button className="nav-link nav-button btn btn-link" onClick={() => handleLinkClick(updateRef)}>Update</button></li>
<li className="nav-item"><button className="nav-link nav-button btn btn-link" onClick={() => handleLinkClick(deleteRef)}>Delete</button></li>
  </ul>
  </div>
  </nav>

<div className="row">
<div className="col-md-12">
<div id="add" ref={addRef}>
<h3>Add Component</h3>
<AddRegister />
</div>
            
  <div id="view" ref={viewRef}>
  <h3>View Component</h3>
  <ViewRegister />
  </div>
            
  <div id="update" ref={updateRef}>
  <h3>Update Component</h3>
  <UpdateRegister />
  </div>
            
  <div id="delete" ref={deleteRef}>
  <h3>Delete Component</h3>
  <DeleteRegister />
  </div>
          
  </div>
  </div>
  </div>
  <ScrollUp />
  </>
  );
};

export default RegisterComponent;
