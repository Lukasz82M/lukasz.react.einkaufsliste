/**
 * 1) Vertausche false mit true und schaue dir an, wie sich die Ausgabe ändert.
 */
function NutzerGruss(props) {
  return <h1>Willkommen zurück!</h1>;
}

function GastGruss(props) {
  return <h1>Bitte registrieren Sie sich.</h1>;
}

function Gruesse(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <NutzerGruss />;
  }
  return <GastGruss />;
}

ReactDOM.render(
  //ToDo: Hier false mit true tauschen.
  <Gruesse isLoggedIn={false} />,
  document.getElementById('Aufgabe1')
);

/**
 * 2) Schreibe hier deine If-Else Abfrage.
 */
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Gruesse2 isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function NutzerGruss2(props) {
  return <h1>Willkommen zurück!</h1>;
}

function GastGruss2(props) {
  return <h1>Bitte registrieren Sie sich.</h1>;
}

function Gruesse2(props) {
  //ToDo: Schreibe hier deinen Code!
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('Aufgabe2')
);

/**
 * 3) Benutze hier den && Operator.
 */
function Mailbox(props) {
  const ungeleseneNachrichten = props.ungeleseneNachrichten;
  return (
    <div>
      //ToDo: Schreibe hier deinen Code!
      <h1>Willkommen zu deiner Mailbox!</h1>
      {ungeleseneNachrichten.length > 0 &&
        <h2>
          Du hast {ungeleseneNachrichten.length} ungelesene Nachrichten.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox ungeleseneNachrichten={messages} />,
  document.getElementById('Aufgabe3')
);

/**
 * 4) Benutze ? und : in deiner render Funktion.
 */
class NutzerGruessung extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    }
  }
  //ToDo: Schreibe hier deinen Code!
}

ReactDOM.render(
  <NutzerGruessung />,
  document.getElementById('Aufgabe4')
);