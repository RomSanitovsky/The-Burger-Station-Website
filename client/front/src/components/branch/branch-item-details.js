export default function BranchItemDetails(props) {
    return (
        <div id="book-a-table">
            <section id="book-a-table" className="book-a-table">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Branch</h2>
                        <p>Edit branch</p>
                    </div>
                    <form action="forms/book-a-table.php" className="php-email-form" >
                        <div className="form-row">
                            <div className="col-lg-12 col-md-12 form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" autocomplete="off" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-12 col-md-12 form-group">
                                <input type="text" name="address" className="form-control" id="address" placeholder="Address" data-rule="minlen:4" data-msg="Please enter at least 4 chars" autocomplete="off" />
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Edit</button></div>
                    </form>
                </div>
            </section>
        </div>
    );
}