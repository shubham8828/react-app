import React from "react";
import './DescriptionBox.css'
const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122) </div>
            </div>
            <div className="descriptionbox-description">
                <p>
                    An E-Commerce website is an onlineplate form that facilitate buying and selling of products or services over the internet.
                    It serves as a virtual marketableplace where businesses and individuals can showcase their products,interact with customers,
                    and conduct transactions without the need for a physical presence. E-Commerce website have gained immense populairity due to
                    their convencial accessibility, and the global reach they offer.
                </p>
                <p>
                    E-Commerce website typically display products or services along with detailed description,
                    Image ,prices and any available variations(e.g., Size,color). Each product usually has its won dedicated
                    pages with relevant information.
                </p>
            </div>


        </div>
    )
}
export default DescriptionBox;

