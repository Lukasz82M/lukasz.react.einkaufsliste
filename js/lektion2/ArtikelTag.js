class ArtikelTag extends React.Component {
  render = () => {
    return (
      <div>
        <dd><label><input type="checkbox" checked={this.props.artikel.gekauft}/>
          {this.props.artikel.gekauft ? <s>{this.props.artikel.name}</s> : this.props.artikel.name}
        </label></dd>
      </div>
    )
  }
}
