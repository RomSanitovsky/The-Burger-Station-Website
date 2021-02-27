export default function UserDetails(props) {
    return (
        <div id="book-a-table">
            <section id="book-a-table" className="book-a-table">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>User</h2>
                        <p>Edit user info</p>
                    </div>
                    <form action="forms/book-a-table.php" className="php-email-form" >
                        <div className="form-row">
                            <div className="col-lg-12 col-md-12 form-group">
                                <input type="text" name="username" className="form-control" id="username" placeholder="Your Username" data-rule="minlen:4" data-msg="Please enter at least 4 chars" autocomplete="off" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-12 col-md-12 form-group">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" autocomplete="off" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-12 col-md-12 form-group">
                                <input type="text" name="password" className="form-control" id="password" placeholder="Your Password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" autocomplete="off" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-12 col-md-12 form-group">
                                <div className="section-title">
                                    <h2>Choose Your Favorite Burger</h2>
                                </div>
                                <select name="fav-item" className="form-control" id="fav-item" placeholder="Choose Your Favorite Burger" data-rule="minlen:4" autocomplete="off" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-12 col-md-12 form-group">
                                <div className="section-title">
                                    <h2>Choose Your Favorite Branch</h2>
                                </div>
                                <select name="fav-branch" className="form-control" id="fav-branch" placeholder="Choose Your Favorite Branch" data-rule="minlen:4" autocomplete="off" />
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Sign In</button></div>
                    </form>
                </div>
            </section>
        </div>
    );
}