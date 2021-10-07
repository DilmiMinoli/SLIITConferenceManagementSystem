import React from 'react'
import './Card.css';
import DownloadLink from "react-download-link";
import { Link } from "react-router-dom";

function Card({ title, email, description, imageUrl, link, pdfName }) {

    return (
        <div className="card-container" style={{ marginLeft: 40, marginBottom: 40 }}>
            <div className="image-container">
                <img src={imageUrl} alt="" />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>

                <div className="card-content">
                    <div className="card-phnum">
                        <h6>{description}</h6>
                    </div>
                    <div className="card-content">
                        <div className="card-email">
                            <h8>{email}</h8>
                        </div>

                        <div className="card-body">
                            <p>
                                <a href={link} download="My_File.pdf">

                                    <img src={link} alt={pdfName} width="104" height="142" />

                                </a>

                            </p>
                           

                        </div>
                        <div className ="crd-body">
                        <DownloadLink
                                label="Download"
                                filename={link}
                                exportFile={() => "Client side cache data here…"}
                            />
                        </div>


                    </div>
                   
                    <button type="pay" className="btn btn-primary"><Link to='/addpayment' > Pay  </Link></button>

                    &nbsp;&nbsp; <i class="text-danger bi bi-download" ></i>


                </div>
            </div>
            &nbsp;&nbsp;
        </div>
    )
}

export default Card;