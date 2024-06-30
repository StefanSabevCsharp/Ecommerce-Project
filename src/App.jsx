
function App() {
  

  return (
    <>
    <meta charSet="utf-8" />
    <title>E Shop - Bootstrap Ecommerce Template</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta content="Bootstrap Ecommerce Template" name="keywords" />
    <meta
      content="Bootstrap Ecommerce Template Free Download"
      name="description"
    />
    {/* Favicon */}
    <link href="img/favicon.ico" rel="icon" />
    {/* Google Fonts */}
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap"
      rel="stylesheet"
    />
    {/* CSS Libraries */}
    <link
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
    />
    <link href="lib/slick/slick.css" rel="stylesheet" />
    <link href="lib/slick/slick-theme.css" rel="stylesheet" />
    {/* Template Stylesheet */}
    <link href="css/style.css" rel="stylesheet" />
    {/* Top Header Start */}
    <div className="top-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3">
            <div className="logo">
              <a href="">
                <img src="img/logo.png" alt="Logo" />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="search">
              <input type="text" placeholder="Search" />
              <button>
                <i className="fa fa-search" />
              </button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="user">
              <div className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  My Account
                </a>
                <div className="dropdown-menu">
                  <a href="#" className="dropdown-item">
                    Login
                  </a>
                  <a href="#" className="dropdown-item">
                    Register
                  </a>
                </div>
              </div>
              <div className="cart">
                <i className="fa fa-cart-plus" />
                <span>(0)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Top Header End */}
    {/* Header Start */}
    <div className="header">
      <div className="container">
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          <a href="#" className="navbar-brand">
            MENU
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav m-auto">
              <a href="index.html" className="nav-item nav-link active">
                Home
              </a>
              <a href="product-list.html" className="nav-item nav-link">
                Products
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu">
                  <a href="product-list.html" className="dropdown-item">
                    Product
                  </a>
                  <a href="product-detail.html" className="dropdown-item">
                    Product Detail
                  </a>
                  <a href="cart.html" className="dropdown-item">
                    Cart
                  </a>
                  <a href="wishlist.html" className="dropdown-item">
                    Wishlist
                  </a>
                  <a href="checkout.html" className="dropdown-item">
                    Checkout
                  </a>
                  <a href="login.html" className="dropdown-item">
                    Login &amp; Register
                  </a>
                  <a href="my-account.html" className="dropdown-item">
                    My Account
                  </a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">
                Contact Us
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
    {/* Header End */}
    {/* Main Slider Start */}
    <div className="home-slider">
      <div className="main-slider">
        <div className="main-slider-item">
          <img src="img/slider-1.jpg" alt="Slider Image" />
        </div>
        <div className="main-slider-item">
          <img src="img/slider-2.jpg" alt="Slider Image" />
        </div>
        <div className="main-slider-item">
          <img src="img/slider-3.jpg" alt="Slider Image" />
        </div>
      </div>
    </div>
    {/* Main Slider End */}
    {/* Feature Start*/}
    <div className="feature">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6 feature-col">
            <div className="feature-content">
              <i className="fa fa-shield" />
              <h2>Trusted Shopping</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 feature-col">
            <div className="feature-content">
              <i className="fa fa-shopping-bag" />
              <h2>Quality Product</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 feature-col">
            <div className="feature-content">
              <i className="fa fa-truck" />
              <h2>Worldwide Delivery</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 feature-col">
            <div className="feature-content">
              <i className="fa fa-phone" />
              <h2>Telephone Support</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Feature End*/}
    {/* Category Start*/}
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
    {/* Category End*/}
    {/* Featured Product Start */}
    <div className="featured-product">
      <div className="container">
        <div className="section-header">
          <h3>Featured Product</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra
            at massa sit amet ultricies. Nullam consequat, mauris non interdum
            cursus
          </p>
        </div>
        <div className="row align-items-center product-slider product-slider-4">
          <div className="col-lg-3">
            <div className="product-item">
              <div className="product-image">
                <a href="product-detail.html">
                  <img src="img/product-1.png" alt="Product Image" />
                </a>
                <div className="product-action">
                  <a href="#">
                    <i className="fa fa-cart-plus" />
                  </a>
                  <a href="#">
                    <i className="fa fa-heart" />
                  </a>
                  <a href="#">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="product-content">
                <div className="title">
                  <a href="#">Phasellus Gravida</a>
                </div>
                <div className="ratting">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <div className="price">
                  $22 <span>$25</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="product-item">
              <div className="product-image">
                <a href="product-detail.html">
                  <img src="img/product-2.png" alt="Product Image" />
                </a>
                <div className="product-action">
                  <a href="#">
                    <i className="fa fa-cart-plus" />
                  </a>
                  <a href="#">
                    <i className="fa fa-heart" />
                  </a>
                  <a href="#">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="product-content">
                <div className="title">
                  <a href="#">Phasellus Gravida</a>
                </div>
                <div className="ratting">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <div className="price">
                  $22 <span>$25</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="product-item">
              <div className="product-image">
                <a href="product-detail.html">
                  <img src="img/product-3.png" alt="Product Image" />
                </a>
                <div className="product-action">
                  <a href="#">
                    <i className="fa fa-cart-plus" />
                  </a>
                  <a href="#">
                    <i className="fa fa-heart" />
                  </a>
                  <a href="#">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="product-content">
                <div className="title">
                  <a href="#">Phasellus Gravida</a>
                </div>
                <div className="ratting">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <div className="price">
                  $22 <span>$25</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="product-item">
              <div className="product-image">
                <a href="product-detail.html">
                  <img src="img/product-4.png" alt="Product Image" />
                </a>
                <div className="product-action">
                  <a href="#">
                    <i className="fa fa-cart-plus" />
                  </a>
                  <a href="#">
                    <i className="fa fa-heart" />
                  </a>
                  <a href="#">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="product-content">
                <div className="title">
                  <a href="#">Phasellus Gravida</a>
                </div>
                <div className="ratting">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <div className="price">
                  $22 <span>$25</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="product-item">
              <div className="product-image">
                <a href="product-detail.html">
                  <img src="img/product-5.png" alt="Product Image" />
                </a>
                <div className="product-action">
                  <a href="#">
                    <i className="fa fa-cart-plus" />
                  </a>
                  <a href="#">
                    <i className="fa fa-heart" />
                  </a>
                  <a href="#">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="product-content">
                <div className="title">
                  <a href="#">Phasellus Gravida</a>
                </div>
                <div className="ratting">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <div className="price">
                  $22 <span>$25</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Featured Product End */}
    {/* Newsletter Start */}
    <div className="newsletter">
      <div className="container">
        <div className="section-header">
          <h3>Subscribe Our Newsletter</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra
            at massa sit amet ultricies. Nullam consequat, mauris non interdum
            cursus
          </p>
        </div>
        <div className="form">
          <input type="email" defaultValue="Your email here" />
          <button>Submit</button>
        </div>
      </div>
    </div>
    {/* Newsletter End */}
    {/* Recent Product Start */}
    <div className="recent-product">
      <div className="container">
        <div className="section-header">
          <h3>Recent Product</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra
            at massa sit amet ultricies. Nullam consequat, mauris non interdum
            cursus
          </p>
        </div>
        <div className="row align-items-center product-slider product-slider-4">
          <div className="col-lg-3">
            <div className="product-item">
              <div className="product-image">
                <a href="product-detail.html">
                  <img src="img/product-2.png" alt="Product Image" />
                </a>
                <div className="product-action">
                  <a href="#">
                    <i className="fa fa-cart-plus" />
                  </a>
                  <a href="#">
                    <i className="fa fa-heart" />
                  </a>
                  <a href="#">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="product-content">
                <div className="title">
                  <a href="#">Phasellus Gravida</a>
                </div>
                <div className="ratting">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <div className="price">
                  $22 <span>$25</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="product-item">
              <div className="product-image">
                <a href="product-detail.html">
                  <img src="img/product-4.png" alt="Product Image" />
                </a>
                <div className="product-action">
                  <a href="#">
                    <i className="fa fa-cart-plus" />
                  </a>
                  <a href="#">
                    <i className="fa fa-heart" />
                  </a>
                  <a href="#">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="product-content">
                <div className="title">
                  <a href="#">Phasellus Gravida</a>
                </div>
                <div className="ratting">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <div className="price">
                  $22 <span>$25</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="product-item">
              <div className="product-image">
                <a href="product-detail.html">
                  <img src="img/product-6.png" alt="Product Image" />
                </a>
                <div className="product-action">
                  <a href="#">
                    <i className="fa fa-cart-plus" />
                  </a>
                  <a href="#">
                    <i className="fa fa-heart" />
                  </a>
                  <a href="#">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="product-content">
                <div className="title">
                  <a href="#">Phasellus Gravida</a>
                </div>
                <div className="ratting">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <div className="price">
                  $22 <span>$25</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="product-item">
              <div className="product-image">
                <a href="product-detail.html">
                  <img src="img/product-8.png" alt="Product Image" />
                </a>
                <div className="product-action">
                  <a href="#">
                    <i className="fa fa-cart-plus" />
                  </a>
                  <a href="#">
                    <i className="fa fa-heart" />
                  </a>
                  <a href="#">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="product-content">
                <div className="title">
                  <a href="#">Phasellus Gravida</a>
                </div>
                <div className="ratting">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <div className="price">
                  $22 <span>$25</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="product-item">
              <div className="product-image">
                <a href="product-detail.html">
                  <img src="img/product-9.png" alt="Product Image" />
                </a>
                <div className="product-action">
                  <a href="#">
                    <i className="fa fa-cart-plus" />
                  </a>
                  <a href="#">
                    <i className="fa fa-heart" />
                  </a>
                  <a href="#">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="product-content">
                <div className="title">
                  <a href="#">Phasellus Gravida</a>
                </div>
                <div className="ratting">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <div className="price">
                  $22 <span>$25</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Recent Product End */}
    {/* Brand Start */}
    <div className="brand">
      <div className="container">
        <div className="section-header">
          <h3>Our Brands</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra
            at massa sit amet ultricies. Nullam consequat, mauris non interdum
            cursus
          </p>
        </div>
        <div className="brand-slider">
          <div className="brand-item">
            <img src="img/brand-1.png" alt="" />
          </div>
          <div className="brand-item">
            <img src="img/brand-2.png" alt="" />
          </div>
          <div className="brand-item">
            <img src="img/brand-3.png" alt="" />
          </div>
          <div className="brand-item">
            <img src="img/brand-4.png" alt="" />
          </div>
          <div className="brand-item">
            <img src="img/brand-5.png" alt="" />
          </div>
          <div className="brand-item">
            <img src="img/brand-6.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    {/* Brand End */}
    {/* Footer Start */}
    <div className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
              <h1>E Shop</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse sollicitudin rutrum massa. Suspendisse sollicitudin
                rutrum massa. Vestibulum porttitor, metus sed pretium elementum,
                nisi nibh sodales quam, non lobortis neque felis id mauris.
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
                  <a href="product-detail.html">Product Detail</a>
                </li>
                <li>
                  <a href="cart.html">Cart</a>
                </li>
                <li>
                  <a href="checkout.html">Checkout</a>
                </li>
                <li>
                  <a href="login.html">Login &amp; Register</a>
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
                  <a href="login.html">Login &amp; Register</a>
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
              <img src="img/payment-method.png" alt="Payment Method" />
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
    {/* Footer End */}
    {/* Footer Bottom Start */}
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-6 copyright">
            <p>
              Copyright © <a href="https://htmlcodex.com">HTML Codex</a>. All
              Rights Reserved
            </p>
          </div>
          <div className="col-md-6 template-by">
            <p>
              Template By <a href="https://htmlcodex.com">HTML Codex</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* Footer Bottom End */}
    {/* Back to Top */}
    <a href="#" className="back-to-top">
      <i className="fa fa-chevron-up" />
    </a>
    {/* JavaScript Libraries */}
    {/* Template Javascript */}
  </>
  
  )
}

export default App
