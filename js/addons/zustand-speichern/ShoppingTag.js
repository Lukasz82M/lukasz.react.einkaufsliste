class ShoppingTag extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      aktiveGruppe: null,
      einkaufenAufgeklappt: true,
      erledigtAufgeklappt: false
    }
    this.startzustandLaden()
  }

  async startzustandLaden() {
    let gespeicherterZustand = localStorage.getItem(App.STORAGE_KEY)
    if (gespeicherterZustand) {
      App.laden()
    } else {
      await App.datenEinlesen()
      this.setState(this.state)
    }
  }

  setAktiveGruppe(gruppenId) {
    App.aktiveGruppe = gruppenId
    const gruppe = App.gruppeFinden(gruppenId)
    App.informieren(`[App] Gruppe "${gruppe.name}" ist nun aktiv`)
    this.setState({aktiveGruppe: App.aktiveGruppe})
  }

  artikelChecken = (artikel) => {
    artikel.gekauft = !artikel.gekauft
    const aktion = artikel.gekauft ? "erledigt" : "reaktiviert"
    App.informieren(`[App] Artikel "${artikel.name}" ${aktion}`)
    this.setState({state: this.state})
  }

  artikelHinzufuegen() {
    let eingabe = document.getElementById("artikelEingabe")
    if (eingabe.value.trim().length > 0) {
      let aktiveGruppe = App.gruppeFinden(App.aktiveGruppe)
      aktiveGruppe.artikelHinzufuegen(eingabe.value)
      this.setState(this.state)
    }
    eingabe.value = ""
    eingabe.focus()
  }

  einkaufenAufZuKlappen() {
    this.setState({einkaufenAufgeklappt: !this.state.einkaufenAufgeklappt})
  }

  erledigtAufZuKlappen() {
    this.setState({erledigtAufgeklappt: !this.state.erledigtAufgeklappt})
  }

  render = () => {
    return (
      <div id="container">
        <header>
          <h1>Einkaufsliste</h1>
          <nav>
            <input type="search" id="artikelEingabe" placeholder="Artikel hinzufügen"
                   onKeyPress={e => (e.key == 'Enter') ? this.artikelHinzufuegen() : ''}/>
            <button onClick={() => this.artikelHinzufuegen()}
                    className="material-icons">add_circle
            </button>
          </nav>
        </header>
        <hr/>

        <main>
          <section>
            <h2>Einkaufen
              <i onClick={() => this.einkaufenAufZuKlappen()} className="material-icons">
                {this.state.einkaufenAufgeklappt ? 'expand_more' : 'expand_less'}
              </i>

            </h2>
            <dl>
              {this.state.einkaufenAufgeklappt
                ? App.gruppenListe.map(gruppe =>
                  <GruppenTag key={gruppe.id} gruppe={gruppe} gekauft={false}
                              aktiv={gruppe.id == App.aktiveGruppe}
                              aktiveGruppeHandler={() => this.setAktiveGruppe(gruppe.id)}
                              checkHandler={this.artikelChecken}/>)
                : ''}
            </dl>
          </section>
          <hr/>

          <section>
            <h2>Erledigt
              <i onClick={() => this.erledigtAufZuKlappen()} className="material-icons">
                {this.state.erledigtAufgeklappt ? 'expand_more' : 'expand_less'}
              </i>
            </h2>
            {this.state.erledigtAufgeklappt
              ? App.gruppenListe.map(gruppe =>
                <GruppenTag key={gruppe.id} gruppe={gruppe} gekauft={true}
                            aktiveGruppeHandler={() => this.setAktiveGruppe(gruppe.id)}
                            checkHandler={this.artikelChecken}/>)
              : ''}
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
