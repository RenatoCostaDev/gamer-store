import React  from 'react';

const Navbar = () => {
    
    return (
    <>
        <nav className="navbar navbar-expand-lg primary-bg-color py-4 px-2" id="navbar">
          <div className="container">
            <a className="navbar-brand" href="https://github.com/RenatoCostaDev">Gamer Store</a>
            <div id="navbar-items">
              <div></div>
              <form className="d-flex" id="search-form">
                <i className="bi bi-search primary-color"></i>
                <input className="form-control me-2" type="search" placeholder="Pesquisar produto..." aria-label="Search" />
                <button className="btn secondary-bg-color" type="submit">Pesquisar</button>
              </form>
              <ul className="navbar-nav mb-2 mb-lg-0 justify-content-evenly">
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/RenatoCostaDev">
                    <i className="bi bi-person icon-ul"></i>
                  </a>
                  <h5>Conta</h5>
                </li>
                <li className="nav-item" id="bag-item">
                  <a className="nav-link" href="https://github.com/RenatoCostaDev">
                    <i className="bi bi-bag icon-ul"></i>
                  </a>
                  <h5>Compras</h5>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg secondary-bg-color p-2" id="bottom-navbar-container">
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#bottom-navbar"
              aria-controls="bottom-navbar" aria-expanded="false" aria-label="Toggle navigation">
              <i className="bi bi-list"></i>
            </button>
            <ul className="navbar-nav mb-2 mb-lg-0 collapse navbar-collapse" id="bottom-navbar">
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/RenatoCostaDev">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/RenatoCostaDev">
                  Produtos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/RenatoCostaDev">
                  Promoções
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/RenatoCostaDev">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/RenatoCostaDev">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </nav>
    </>
    );

}

export default Navbar;