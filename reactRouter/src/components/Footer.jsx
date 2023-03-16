import React from 'react';
import './Footer.css' 

export function footer() {
    return (
    <div className="footer-container">
        <footer className="Footer">
        <div className="contact-info">
            <div className="contact-method">
            <h3>E-mail</h3>
            <a href="mailto:contato@empresa.com.br">joaoliveiraa7@gmail.com</a>
        </div>
        <div className="contact-method">
            <h3>Contato</h3>
            <p>(22) 999999999</p>
        </div>  
        </div>
  
        <p>© 2023 Empresa. Todos os direitos reservados.</p>
        </footer>
    </div>
    )
}

export default footer;