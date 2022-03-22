class ShoppingTag extends React.Component {
    render = () => {
        return (
            <div>


                <header>
                    <h1>Einkaufsliste</h1>
                    <nav>
                        <input type="text" placeholder="Artikel hinzufügen"/>
                            <button className="material-icons">add_circle</button>
                    </nav>
                </header>
                <hr/>

                    <main>
                        <section>
                            <h2>Einkaufen
                                <i className="material-icons">expand_less</i>
                            </h2>
                            <dl>

                                <GruppenTag/>
                                <GruppenTag/>
                                <GruppenTag/>

                            </dl>
                        </section>
                        <hr/>
                            <section>
                                <h2>Erledigt
                                    <i className="material-icons">expand_less</i>
                                </h2>
                                <GruppenTag/>
                            </section>
                    </main>
                    <hr/>

                        <footer>
                            <nav>
                                <button>
                                    <span className="material-icons">bookmark_add</span> Gruppen
                                </button>
                                <button>
                                    <span className="material-icons">sort</span> Sortieren
                                </button>
                                <button>
                                    <span className="material-icons">settings</span> Einstellungen
                                </button>
                            </nav>
                        </footer>

                </div>
    )
    }
}
