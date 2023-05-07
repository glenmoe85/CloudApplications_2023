import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Create() {
    
    const [title, setTitle] = useState('');
    const [body, setArticle] = useState('');
    const [published, setPublished] = useState(false);

    const postData = () => {
        const config = {
              headers:{
                  'Content-Type':'application/json',
                  'Accept':'application/json'
              }
          }
        const url="http://54.162.177.181:4000/articles.json"
        const data = { title: title, body: body, published: published };
        console.log(url)
        console.log(data)

        axios.post(url, data, { config }).then(response => 
            window.location.href = '/'
            );

    }
    return (
        <div class='form-group row'>
            <div class="col-sm-1"></div>
            <div class="col-sm-9">
                <h1 class='headers'>Add Articles</h1>
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
                <div class="form-group row" id="form_buttons" >
                    <div class='col-sm-2'></div>
                    <div class='col-sm-10'>
                        <button class="btn btn-success col-sm-3" onClick={postData} type='submit'>Submit</button>
                        <Link to="/" className="btn btn-danger col-sm-3 margin-button">Cancel</Link>

                    </div>
                </div>
            </div>
            <div class="col-sm-1"></div>
        </div>
    )
}
