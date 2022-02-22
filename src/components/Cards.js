import React from 'react';

const Cards = ({pokemons}) => {
        return (
            <>
                <div class="container" id="best-sellers">
                    <h2 class="title primary-color">Best Sellers</h2>
                    <div class="row">
                    {
                        pokemons.map(({id, name, image, type}) => {
                            return (
                                <div class="col-5 col-md-3 mx-auto" key={id}>
                                    <div class="card primary-bg-color">
                                      <img src={image} class="card-img-top img-fluid" alt={name} />
                                      <div class="card-body">
                                        <p class="card-category secondary-color">Card</p>
                                        <h5 class="card-title">{name}</h5>
                                        <p class="card-text primary-color">Tipo : {type}</p>
                                        <a href="#" class="btn btn-primary">Comprar</a>
                                      </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </>
        );  
}

export default Cards;