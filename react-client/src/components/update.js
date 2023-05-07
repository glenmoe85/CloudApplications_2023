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
        const config = {
              headers:{
                  'Content-Type':'application/json',
                  'Accept':'application/json'
              }
          }
        const url="http://localhost:4000/articles/"+ id + ".json"
        const data = { title: title, body: body, published: published };

        axios.put(url, data, { config }).then(response => 
            window.location.href = '/'
            );

    }
    return (

        <div class='form-group row'>
            <div class="col-sm-1"></div>
            <div class="col-sm-9">
                <h1 class='headers'>Update Articles</h1>
                <div class='form-group row row-margin'>
                    <div class='col-sm-2'>
                        <label><strong>Title</strong></label>
                    </div>
                    <div class='col-sm-8'>
                        <input type='text' class='form-control' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                </div>
                <div class='form-group row row-margin'>
                    <div class='col-sm-2'>
                        <label><strong>Article</strong></label>
                    </div>
                    <div class='col-sm-8'>
                        <textarea class='form-control' rows='3' placeholder='Article' value={body} onChange={(e) => setArticle(e.target.value)}>
                        </textarea>
                    </div>
                </div>
                <div class='form-group row row-margin'>
                    <div class='col-sm-2'>
                        <label><strong>Published</strong></label>
                    </div>
                    <div class='col-sm-8'>                    
                        <select value={published} onChange={(e) => setPublished(e.target.value)}>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                </div>               
                <div class="form-group row" id="form_buttons" >
                    <div class='col-sm-2'></div>
                    <div class='col-sm-10'>
                    <button class="btn btn-success col-sm-3" onClick={updateAPIData} >Update</button>
                    </div>
                </div>
            </div>
            <div class="col-sm-1"></div>
        </div>
    )
}