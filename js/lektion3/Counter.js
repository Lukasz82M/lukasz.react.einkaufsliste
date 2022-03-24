
class Counter extends React.Component{
    constructor(props) {
        super(props);
        /*ToDO: Setze hier den initialen state von counter auf 0 */

    }

    increaseCounter = () => {
        /*ToDO: Erhöhe hier den aktuellen state von counter um +1 */

        console.log("counter: ", this.state.counter);
    };

    render = () => {
        return (
             <div>
                <!-- ToDo: Füge hier HTML-Code ein, der einen "Gefällt mir"-Button beinhaltet, welcher ein onClick-Even verarbeitet -->

                <!-- ToDo: Außerdem soll der counter in einem passenden HTML-Element angezeit werden -->
            </div>

        );
    }
}