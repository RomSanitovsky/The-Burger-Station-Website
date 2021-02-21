export default function BookTable() {
    return (
        <div id="book-a-table">
            <section id="book-a-table" className="book-a-table">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Reservation</h2>
                        <p>Book a Table</p>
                    </div>
                    <form action="forms/book-a-table.php" method="post" role="form" className="php-email-form" data-aos="fade-up" data-aos-delay={100}>
                        <div className="form-row">
                            <div className="col-lg-4 col-md-6 form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" autocomplete="off" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-4 col-md-6 form-group">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" autocomplete="off"/>
                                <div className="validate" />
                            </div>
                            <div className="col-lg-4 col-md-6 form-group">
                                <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" autocomplete="off"/>
                                <div className="validate" />
                            </div>
                            <div className="col-lg-4 col-md-6 form-group">
                                <input type="text" name="date" className="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" autocomplete="off"/>
                                <div className="validate" />
                            </div>
                            <div className="col-lg-4 col-md-6 form-group">
                                <input type="text" className="form-control" name="time" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars" autocomplete="off"/>
                                <div className="validate" />
                            </div>
                            <div className="col-lg-4 col-md-6 form-group">
                                <input type="number" className="form-control" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars" autocomplete="off"/>
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" name="message" rows={5} placeholder="Message" defaultValue={""} />
                            <div className="validate" />
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Book a Table</button></div>
                    </form>
                </div>
            </section>
        </div>
    );
}