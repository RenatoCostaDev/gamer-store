import React from 'react';

const Banners = ({banners}) => {

    console.log(banners);
    return (
        <>
            <div className="container" id="banners-container">
                <div id="slider" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                    {
                        banners.map(({id, img, classItem}) => {
                            return (
                                <div className={classItem} key={id}>
                                    <img src={img} className="d-block w-100 img-fluid" alt="..." />
                                </div>
                            )
                        })
                   }  
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                    
                </div>
            </div>
        </>
    );
}
export default Banners;
