import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';

export default function CreateMenuItem() {

    const history = useHistory();
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [type, setType] = useState();

    const handleSubmit = async event => {
        event.preventDefault();
        if (name.length < 1 || price.length < 1)
            return alert('all fields are required');

        const newItem = { name, price, type };
        await axios.post('http://localhost:8000/api/items', newItem);
        history.push('/');
    };

    return (
        <div id="book-a-table">
            <section id="book-a-table" className="book-a-table">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Item Menu</h2>
                        <p>Creat new item menu</p>
                    </div>
                    <form onSubmit={handleSubmit} action="forms/book-a-table.php" className="php-email-form" >
                        <div className="form-row">
                            <div className="col-lg-12 col-md-12 form-group">
                                <input onChange={({ target: { value } }) => /^[a-zA-Z]+$/.test(value) && setName(value)} value={name} type="text" name="name" className="form-control" id="name" placeholder="Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" autocomplete="off" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-12 col-md-12 form-group">
                                <input onChange={({ target: { value } }) => /^[0-9]*$/.test(value) && setPrice(value)} value={price} type="text" name="price" className="form-control" id="price" placeholder="Price" data-rule="minlen:4" data-msg="Please enter at least 4 chars" autocomplete="off" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-12 col-md-12 form-group">
                                <select onChange={({ target: { value } }) => value !== '' && setType(value)} value={type} type="text" name="type" className="form-control" id="type" placeholder="Item Type" data-rule="minlen:4" data-msg="Please enter at least 4 chars" autocomplete="off">
                                    <option value=''> choose type </option>
                                    <option value='drink'> drink </option>
                                    <option value='food'> food </option>
                                </select>
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="col-lg-12 col-md-12">Create</button>
                            <p></p>
                            <Link to="/"> Back </Link>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}
