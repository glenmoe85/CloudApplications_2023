import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Update() {
    
    const [id, setID] = useState(null);
    const [title, setTitle] = useState('');
    const [body, setArticle] = useState('');
    const [published, setPublished] = useState(false);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setTitle(localStorage.getItem('Title'));
        setArticle(localStorage.getItem('Article'));
        setPublished(localStorage.getItem('Published'));
    }, []);

    const updateAPIData = () => {
        const responseUrl = "/"
        const element = document.querySelector('#put-request-set-headers .date-updated');
        const config = {
              headers:{
                  'Content-Type':'application/json',
                  'Accept':'application/json'
              }
          }
        const url="http://localhost:4000/articles/"+ id + ".json"
        const data = { title: title, body: body, published: published };
        console.log(url)
        console.log(data)

        axios.put(url, data, { config }).then(response => 
            window.location.href = '/'
            );

    }
    return (
        <div class='form-group row'>
            <div class='form-group row'>
                <div class='col-sm-2'>
                    <label>Title</label>
                </div>
                <div class='col-sm-10'>
                      <input type='text' class='form-control' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
            </div>
            <div class='form-group row'>
                <div class='col-sm-2'>
                    <label>Article</label>
                </div>
                <div class='col-sm-10'>
                    <textarea class='form-control' rows='3' placeholder='Article' value={body} onChange={(e) => setArticle(e.target.value)}>
                    </textarea>
                </div>
            </div>
            <div class='form-group row'>
                <div class='col-sm-2'>
                    <label>Published</label>
                </div>
                <div class='col-sm-10'>
                    
                <select value={published} onChange={(e) => setPublished(e.target.value)}>

       <option value="true">Yes</option>

       <option value="false">No</option>

     </select>
     </div>
     </div>

            <div class="form-group row" id="form_buttons" >
                <button class="btn btn-success col-sm-3" onClick={updateAPIData} >Update</button>
            </div>
        </div>
    )
}