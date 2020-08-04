import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';


function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/62356988?s=460&u=6b112c8f2e619f70b49f55b675cceb9031d180b7&v=4" alt="Marlon Victor"/>
                <div>
                    <b>Marlon Victor</b>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing.<br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, commodi nesciunt? Quasi cumque ipsa iure?
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <b>R$ 50,00</b>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;