
// return html component from js
 
function navbar(){

    return `
    <div id="navbar">
    <!-- black line = done  -->
    <div id="international_shipping">
       
        <p id="international_para">
            <strong>
                Shipping outside of the U.S. or Canada?

                <a inter_shipping_link href="https://www.nordstrom.com/browse/customer-service/international-orders?jid=j011535-13614&cid=00000&cm_sp=merch-_-multi-div_13614_j011535-_-swptcos_corp_persnav_info&#anchor-link-shipping-charges">Learn bout International Shipping</a>

            </strong>

            <button id="img_austria">
                <img
                    id="austria_img"
                 src="https://n.nordstrommedia.com/alias/AU.gif" alt="">

                <p>
                    <strong id="img_austria">Australia</strong>
                </p>
            </button>

        </p>

    </div>
    
      <!-- second line nord =  -->
  <div id="nordstorm_searchbar">


    <div id="nordstorm">
        <a href="home.html">
            <img 
            id="nord_img"
        src="https://n.nordstrommedia.com/alias/nordstrom-logo.svg" alt="">
        </a>
    </div>

    <div id="bar_rightsider">
       
        <ul  class="main-menu">
        <li>Search
            <ul class="sub-menu">
                 <input placeholder="Search" id="query">
            </ul>  
        </li>
        <!-- <a href="login.html">Login</a> -->
               
       
        <li>Sign In
            <ul class="sub-menu">
                <li id="l1"><a href="./Html/signin.html">Sign In | Create Account</a></li>
                <li><a href="./Html/signin.html">Your account</a></li>
                <li><a href="">The Nordy Club Reward</a></li>
                <li><a href="./Html/Checkout.html">Shipping Adresses</a></li>
                <li><a href="./Html/payment.html">Payment Method</a></li>
                <li><a href="./Html/women.html">Looks</a></li>
                <li><a href="./Html/Checkout.html">Pay & Manage Nordstrom Card</a></li>
                <li><a href="./Html/signin.html">Account Setting</a></li>
                <li><a href="./Html/signin.html">Passwors & Personal info</a></li>
                <li><a href="./Html/signin.html">Email & mail Preference</a></li>
                <li><a href="homepage.html">Stores & Event</a></li>
                <li><a href="homepage.html">We're here to help, 24/7</a></li>
                <li><a href="homepage.html">Contact us</a></li>   
            </ul>
        </li>
        <li>  <a href="/Html/Cart.html">Cart</a> </li>
        </ul>

    </div>

    </div>





    <!-- third line = cateogary -->
    <div id="nav_cat_div">

        <ul id="nav_catog">
            <li id="select_cat_Sale" >Sale</li>
            <li id="select_cat" >Women</li>
            <li id="select_cat">Men</li>
            <li id="select_cat">Kids</li>
            <li id="select_cat">Young Adult</li>
            <li id="select_cat">Active wear</li>
            <li id="select_cat">Home</li>
            <li id="select_cat">Beauty</li>
            <li id="select_cat">Designer</li>
            <li id="select_cat">Gifts</li>
            <li id="select_cat_brand">Brands</li>
        </ul>

    </div>
</div>
 
    `;
}

    export default navbar;

