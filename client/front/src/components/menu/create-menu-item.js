import { Link } from 'react-router-dom';

export default function CreateMenuItem() {
    return (
        <div id="book-a-table">
            <section id="book-a-table" className="book-a-table">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Item Menu</h2>
                        <p>Creat new item menu</p>
                    </div>
                    <form action="forms/book-a-table.php" className="php-email-form" >
                        <div className="form-row">
                            <div className="col-lg-12 col-md-12 form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" autocomplete="off" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-12 col-md-12 form-group">
                                <input type="text" name="price" className="form-control" id="price" placeholder="Price" data-rule="minlen:4" data-msg="Please enter at least 4 chars" autocomplete="off" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-12 col-md-12 form-group">
                                <select type="text" name="type" className="form-control" id="type" placeholder="Item Type" data-rule="minlen:4" data-msg="Please enter at least 4 chars" autocomplete="off" />
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
                        </div>
                        <div className="text-center">
                            <Link to="/">
                                <button type="submit" className="col-lg-12 col-md-12">
                                    Create
                                </button>
                            </Link>
                            <p></p>
                            <Link to="/">
                                <button type="submit" className="col-lg-12 col-md-12">
                                    Back
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}
