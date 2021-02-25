export default function EditBranchItem() {
    return (
        <form>
            <h3>Edit branch</h3>
            <div className="form-group">
                <label>Branch name</label>
                <input type="text" className="form-control" placeholder="Enter branch name" />
            </div>
            <div className="form-group">
                <label>Address</label>
                <input type="text" className="form-control" placeholder="Enter address" />
            </div>
            <div className="form-group">
                <label>District</label>
                <select type="District" className="form-control" />
            </div>
            <div className="form-group">
                <label>Menu</label>
                <select type="menu-item" className="form-control" />
            </div>
            <button type="submit" className="btn btn-dark btn-lg btn-block">Edit</button>
        </form>
    );
}
