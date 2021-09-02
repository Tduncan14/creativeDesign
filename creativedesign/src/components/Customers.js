import React from 'react';
import image1 from '../images/customer-img-1.jpg';
import image2 from '../images/customer-img-2.jpg';
import image3 from '../images/customer-img-3.jpg';




const Customers = () => {



    return (
        <div>
        <section className="section-2">
            <h1 className="section-heading">Customers</h1>
            <div className="customers-wrapper">
                <div className="customer">
                 <i className="fas fa-quote-left"></i>
                <p className="customer-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue quis dui vel tempor. Integer at nunc a neque lobortis rutrum. Nunc quis orci quis nulla congue tincidunt. Proin in odio vitae orci pharetra dictum nec eget urna. Sed vitae mattis leo. Cras eget molestie sapien. Aliquam viverra fermentum mi, sed tempor arcu posuere ut. Mauris id aliquam lacus, non placerat mauris. Suspendisse potenti. Vivamus at semper ipsum, vitae ultrices libero. In fringilla nunc at euismod sagittis. Donec finibus, nisl at condimentum dictum, neque quam aliquet nibh, venenatis congue urna ipsum non metus. Nulla eget dignissim purus. Mauris vel eros lacus. Nulla gravida mauris non ultrices venenatis.

                </p>
                <div className="customer-rating">
                  <i className="fas fa-star"></i> 
                  <i className="fas fa-star"></i> 
                  <i className="fas fa-star"></i> 
                  <i className="fas fa-star"></i> 
                  <i className="fas fa-star-half-alt"></i> 
                </div>
                <img src={image1} className="customer-img"/>
                <h4 className="customer-name">
                    Jane Lee
                </h4>
                </div>

                <div className="customer">
                 <i className="fas fa-quote-left"></i>
                <p className="customer-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue quis dui vel tempor. Integer at nunc a neque lobortis rutrum. Nunc quis orci quis nulla congue tincidunt. Proin in odio vitae orci pharetra dictum nec eget urna. Sed vitae mattis leo. Cras eget molestie sapien. Aliquam viverra fermentum mi, sed tempor arcu posuere ut. Mauris id aliquam lacus, non placerat mauris. Suspendisse potenti. Vivamus at semper ipsum, vitae ultrices libero. In fringilla nunc at euismod sagittis. Donec finibus, nisl at condimentum dictum, neque quam aliquet nibh, venenatis congue urna ipsum non metus. Nulla eget dignissim purus. Mauris vel eros lacus. Nulla gravida mauris non ultrices venenatis.

                </p>
                <div className="customer-rating">
                  <i className="fas fa-star"></i> 
                  <i className="fas fa-star"></i> 
                  <i className="fas fa-star"></i> 
                  <i className="fas fa-star"></i> 
                  <i className="fas fa-star"></i> 
                </div>
                <img src={image2} className="customer-img"/>
                <h4 className="customer-name">
                    Bob Smith
                </h4>
                </div>


                <div className="customer">
                 <i className="fas fa-quote-left"></i>
                <p className="customer-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue quis dui vel tempor.

                </p>
                <div className="customer-rating">
                  <i className="fas fa-star"></i> 
                  <i className="fas fa-star"></i> 
                  <i className="fas fa-star"></i> 
                  <i className="fas fa-star"></i> 
                  <i className="far fa-star"></i> 
                </div>
                <img src={image3} className="customer-img"/>
                <h4 className="customer-name">
                     Ann Brown
                </h4>
                </div>
            </div>
        </section>
        </div>
    )











}

export default Customers;