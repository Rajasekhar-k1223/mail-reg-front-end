import React from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

export default function ListOfDomains() {
    const naviagate = useNavigate();
    const addDomain = () => {
        console.log('Add domain clicked');
        naviagate("/createDomain")
    }
  return (
      <div>
          <div className='btn btn-primary f-right mb-3' style={{ marginRight: "5rem" }} onClick={addDomain}> 
              + Add Domain
          </div>
          List of domains
          <Table className="table table-striped " bordered>
              <thead>
            <tr>
                  <th>Domain Name</th>
                  <th>Created User</th>
                  <th>Domain Account</th>
                  <th>created</th>
                  <th>updated</th>
                  <th>Actions</th>
              
                  </tr>
              </thead>
              <tbody>
            <tr>
                  <td>example.com</td>
                  <td>Rajasekhar</td>
                  <td>Elsea</td>
                  <td>28-08-2024</td>
                  <td>28-08-2024</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
                  <td>test.net</td>
                  <td>Elsea</td>
                  <td>Elsea</td>
                  <td>28-08-2024</td>
                  <td>28-08-2024</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
                  </tr>
                  </tbody>
          </Table>
          
    </div>
  )
}
