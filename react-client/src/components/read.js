import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Read() {
    const config = {
              headers:{
                  'Content-Type':'application/json',
                  'Accept':'application/json'
              }
          }
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get('http://54.162.177.181:4000/articles', config)
            .then((response) => {                
                setAPIData(response.data);
            })
    }, [])


    const setData = (data) => {
        console.log(data)
        let { id, title, body, published } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Title', title);
        localStorage.setItem('Article', body);
        localStorage.setItem('Published', published)
    }

    const getData = () => {
        axios.get('http://54.162.177.181:4000/articles', config )
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        var url = "http://54.162.177.181:4000/articles/"+ id
        axios.delete(url, config)
        .then(() => {
            getData();
        })
    }
    
  

return (


        <div class="form-group row ">
        <div class="col-sm-1"></div>
        <div class="col-sm-9">
        <h1 class='headers'>View Articles</h1>
         <Link to='/create'>
                <button class='btn btn-success margin-bottom ' >Add Article</button>
            </Link>
           
            <table id="tabs" class="table table-striped table-bordered btn-color">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artile</th>
                        <th>Published</th>
						<th>View</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                {APIData.map((data, i) => {
                        return (                            
                            <tr>
                                <td>{data.title}</td>
                                <td>{data.body}</td>
                                <td>{data.published ? "Yes" : "No"}</td>
                                <td class='btn-color'>
								<Link to='/view'>
                                <button class='btn btn-primary ' onClick={() => setData(data)}>View</button>
                                </Link>
								</td>
								 <td class='btn-color'>
                                 <Link to='/update'>
                                <button class='btn btn-primary ' onClick={() => setData(data)}>Update</button>
                                </Link>
                                </td>
                                <td>
                                    <button class='btn btn-danger' onClick={() => onDelete(data.id)}>Delete</button>
                                </td>
                            </tr>                            
                            
                        )
                    })}
                </tbody>
                
            </table>
            </div>
            <div class="col-sm-1"></div>
        </div>
    )
}
