export default function Footer() {
    return (
        <div className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h1>E Shop</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse sollicitudin rutrum
                                massa. Suspendisse sollicitudin rutrum massa.
                                Vestibulum porttitor, metus sed pretium
                                elementum, nisi nibh sodales quam, non lobortis
                                neque felis id mauris.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h3 className="title">Useful Pages</h3>
                            <ul>
                                <li>
                                    <a href="product.html">Product</a>
                                </li>
                                <li>
                                    <a href="product-detail.html">
                                        Product Detail
                                    </a>
                                </li>
                                <li>
                                    <a href="cart.html">Cart</a>
                                </li>
                                <li>
                                    <a href="checkout.html">Checkout</a>
                                </li>
                                <li>
                                    <a href="login.html">
                                        Login &amp; Register
                                    </a>
                                </li>
                                <li>
                                    <a href="my-account.html">My Account</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h3 className="title">Quick Links</h3>
                            <ul>
                                <li>
                                    <a href="product.html">Product</a>
                                </li>
                                <li>
                                    <a href="cart.html">Cart</a>
                                </li>
                                <li>
                                    <a href="checkout.html">Checkout</a>
                                </li>
                                <li>
                                    <a href="login.html">
                                        Login &amp; Register
                                    </a>
                                </li>
                                <li>
                                    <a href="my-account.html">My Account</a>
                                </li>
                                <li>
                                    <a href="wishlist.html">Wishlist</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h3 className="title">Get in Touch</h3>
                            <div className="contact-info">
                                <p>
                                    <i className="fa fa-map-marker" />
                                    123 E Shop, Los Angeles, CA, USA
                                </p>
                                <p>
                                    <i className="fa fa-envelope" />
                                    email@example.com
                                </p>
                                <p>
                                    <i className="fa fa-phone" />
                                    +123-456-7890
                                </p>
                                <div className="social">
                                    <a href="">
                                        <i className="fa fa-twitter" />
                                    </a>
                                    <a href="">
                                        <i className="fa fa-facebook" />
                                    </a>
                                    <a href="">
                                        <i className="fa fa-linkedin" />
                                    </a>
                                    <a href="">
                                        <i className="fa fa-instagram" />
                                    </a>
                                    <a href="">
                                        <i className="fa fa-youtube" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row payment">
                    <div className="col-md-6">
                        <div className="payment-method">
                            <p>We Accept:</p>
                            <img
                                src="img/payment-method.png"
                                alt="Payment Method"
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="payment-security">
                            <p>Secured By:</p>
                            <img src="img/godaddy.svg" alt="Payment Security" />
                            <img src="img/norton.svg" alt="Payment Security" />
                            <img src="img/ssl.svg" alt="Payment Security" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
