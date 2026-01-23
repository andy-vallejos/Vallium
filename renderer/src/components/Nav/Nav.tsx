import './Nav.css'

export const Nav = () => {
    return (
        <div className="nav">
            <section className="nav__options">
                <section></section>
                <ul>
                    <li>
                        <i className="fi fi-rr-sun"></i> <a href="#">Hoy</a>
                    </li>
                    <li>
                        <i className="fi fi-rr-calendar-day"></i> <a href="#">Proximo</a>
                    </li>
                    <li>
                        <i className="fi fi-rr-head-side"></i> <a href="#">Habitos</a>
                    </li>
                    <li>
                       <i className="fi fi-rr-wallet-money"></i><a href="#">Finanzas</a>
                    </li>
                </ul>
            </section>

            <section className="nav__footer">
                <button className="agregar__btn"> <i className="fi fi-rr-plus"></i> Añadir tarea</button>

                <section className="nav__user">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsyVtL6g4GOz6eQeGbQkpLlZ8hjk8Hw8n_1g&s" alt="" />
                    <p>Andy Vallejos</p>
                    <i className="fi fi-rr-gears"></i>
                </section>

            </section>
        </div>
    )
}