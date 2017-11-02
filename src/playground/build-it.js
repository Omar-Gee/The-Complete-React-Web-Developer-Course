const app  = {
    title: "Visibility Toggle",
    details: "some details to be shown here"
}

let visibility = false;

const onToggleDetails = () => {
    visibility = !visibility;
    renderApp();
}

const appRoot = document.getElementById('app');

const renderApp = () => {
    const buildItTemplate = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={onToggleDetails}>
                {visibility ? 'hide details' : 'show details' }
            </button>
            {
                visibility && (
                    <div>
                        <p>dolo dolo dolo</p>
                    </div>
                )
            }
        </div>
    );
    ReactDOM.render(buildItTemplate, appRoot);
}

renderApp();
