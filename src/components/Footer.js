import React from 'react';

const Footer = () => {

    return (
        <>
            <footer id="footer">
                <div class="container-fluid" id="newsletter-container">
                  <div class="col-12">
                    <div class="row">
                      <p class="secondary-color">Se inscreva na nossa Newsletter:</p>
                      <form class="d-flex" id="news-form">
                        <i class="bi bi-envelope primary-color"></i>
                        <input class="form-control me-2" placeholder="Insira seu e-mail" />
                        <button class="btn secondary-bg-color" type="submit">Enviar</button>
                      </form>
                    </div>
                  </div>
                  <div class="col-12" id="social-container">
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-youtube"></i>
                    <i class="bi bi-twitter"></i>
                  </div>
                </div>
                <div class="container" id="copy-container">
                  <p>Todos os direitos reservados @2022 <span class="primary-color">Gamer Store</span> - A sua loja de games</p>
                </div>
            </footer> 
        </>
    );

}

export default Footer;