export default function Category() {
    return (
        <div className="category">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <div className="category-img">
                            <img src="img/category-1.jpg" />
                            <a className="category-name" href="">
                                <h2>Category Name</h2>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="category-img">
                            <img src="img/category-3.jpg" />
                            <a className="category-name" href="">
                                <h2>Category Name</h2>
                            </a>
                        </div>
                        <div className="category-img">
                            <img src="img/category-4.jpg" />
                            <a className="category-name" href="">
                                <h2>Category Name</h2>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="category-img">
                            <img src="img/category-2.jpg" />
                            <a className="category-name" href="">
                                <h2>Category Name</h2>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
