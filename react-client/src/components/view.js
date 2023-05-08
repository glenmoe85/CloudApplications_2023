import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function View() {
    
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

    
    return (

        <div class='form-group row'>
            <div class="col-sm-1"></div>
            <div class="col-sm-9">
                <h1 class='headers'>View Articles</h1>
                <div class='form-group row row-margin'>
                    <div class='col-sm-2'>
                        <label><strong>Title</strong></label>
                    </div>
                    <div class='col-sm-8'>
                        <p>{title}</p>
                    </div>
                </div>
                <div class='form-group row row-margin'>
                    <div class='col-sm-2'>
                        <label><strong>Article</strong></label>
                    </div>
                    <div class='col-sm-8'>
                        <p>{body}</p>
                    </div>
                </div>
                <div class='form-group row row-margin'>
                    <div class='col-sm-2'>
                        <label><strong>Published</strong></label>
                    </div>
                    <div class='col-sm-8'>                    
                        <p>{published}</p>
                    </div>
                </div>               
                <div class="form-group row" id="form_buttons" >
                    <div class='col-sm-2'></div>
                    <div class='col-sm-10'>
                        <Link to="/" className="btn btn-danger col-sm-3 margin-button">Return Home</Link>
                    </div>
                </div>
            </div>
            <div class="col-sm-1"></div>
        </div>
    )
}
