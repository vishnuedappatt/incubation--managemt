import React,{useEffect,useContext} from 'react'
import AppilationContext from '../context/AppContext'
import Table from 'react-bootstrap/Table';
import {Row} from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';

function RecordTable() {
  let {application,data}=useContext(AppilationContext)
  let a
  useEffect(() => {
    console.log('get innnn')
    application()
  
  }, [])

  
  return (
    <div>
       <Row className='justify-content-center'>
            
            <h3>Recorded Lists</h3>
                <Table striped bordered hover >
                  
                    <thead>
                        <tr>
                        <th>sl.no</th>
                        <th>company name</th>
                        <th>company Details</th>
                        <th>status</th>
                     
                        </tr>
                    </thead>
                    <tbody>
                       
                      {  data.map((obj,index)=>
                            <tr>
                            <td>{index+1}</td>
                            <td>{obj.company_name}</td>
                            <td>{obj.team_description}</td>
                         
                           
                            <td> 
                            <ProgressBar>
                            { obj.status==='rejected' ?a=1:((obj.status)==='accept'?a=3:a=2)}
                            
                            {a>=1 && <ProgressBar striped variant="danger" now={10} key={1} /> }                
                                                         
                            { a>=2 ? <ProgressBar striped variant="warning" now={65} key={1} /> :'' }       
                           
                             
                                {a===3 && <ProgressBar striped variant="success" now={100} key={1} />}   
                            
                             
                              
                                </ProgressBar>
                              </td>   
                                                     
                            </tr>
                    )
                       }
                     
                    </tbody>
                </Table>
          
        </Row>
    </div>
  )
}

export default RecordTable