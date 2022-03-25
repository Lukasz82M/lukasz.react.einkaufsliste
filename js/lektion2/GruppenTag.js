class GruppenTag extends React.Component {
  render = () => {
      let itemsRelevant = this.props.gruppe.artikelListe.filter(item => item.gekauft == this.props.erledigt)

    return (
      <div>
        <dt>{this.props.gruppe.name}
          <i className="material-icons">expand_less</i>
        </dt>
          {itemsRelevant.map(artikel => (
              <ArtikelTag key={artikel.id} artikel={artikel}/>
          ))}
      </div>
    )
  }
}
