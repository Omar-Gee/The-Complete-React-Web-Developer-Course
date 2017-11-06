class VisibilityToggle extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleDetails = this.handleDetails.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleDetails() {
        this.setState((prevState) =>{
        return {
            visibility: !prevState.visibility
            }
        })     
    }
    render() {
        return (
        <div>
            <h1>Visibility Toggler</h1>
            <button onClick={this.handleDetails}>
                {this.state.visibility ? 'Hide details' : 'Show details'}
            </button>
            {
                this.state.visibility && (
                    <div>
                        <p>Some details</p>
                    </div>
                )}
        </div>
    )}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));