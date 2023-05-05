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
        axios.get('http://localhost:4000/articles', config)
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
        axios.get('http://localhost:4000/articles', config)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        var url = "http://localhost:4000/articles/"+ id
        axios.delete(url, config)
        .then(() => {
            getData();
        })
    }

return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Artile</th>
                        <th>Published</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                {APIData.map((data, i) => {
                        return (
                            <tr>
                            <td>{data.id}</td>
                                <td>{data.title}</td>
                                <td>{data.body}</td>
                                <td>{data.published ? "Yes" : "No"}</td>
                                 <Link to='/update'>
                                <td><button onClick={() => setData(data)}>Update</button></td>
                                </Link>
                                <td>
                                    <button onClick={() => onDelete(data.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                
            </table>
        </div>
    )
}