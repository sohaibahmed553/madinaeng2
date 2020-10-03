import React from "react";

import "../../css/contactform.css";

const ContactForm = () => {
    return (
        <div className="contact-info p-5">
            <h2 className="h2-responsive">Contact Us</h2>
            <br />

            {/* Contact Form */}
            <form>
                <div>
                    <div className="row">
                        <div className="col-lg-4 text-left">
                            <label>Your Name:</label>
                            <input
                                className="form-control w-100"
                                type="text"
                                required
                            />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Your E-mail:</label>
                            <input
                                className="form-control w-100"
                                type="email"
                                required
                            />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Your Contact:</label>
                            <input
                                className="form-control w-100"
                                type="tel"
                                pattern="[0-9]{11}"
                                required
                            />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-lg-12 text-left">
                            <label>Message:</label>
                            <textarea
                                className="form-control w-100"
                                rows="3"
                                required
                            ></textarea>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-12 text-left">
                            <button className="btn btn-primary" type="submit">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
