export default function CreateMenuItem() {
    return (
        <div>
            <form>
                <h3>Create new item</h3>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter item name" />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="text" className="form-control" placeholder="Enter price" />
                </div>
                <div className="form-group">
                    <label>Type of item</label>
                    <select type="item-type" className="form-control" />
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Create</button>
            </form>
        </div>
    );
}
