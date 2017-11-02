"use strict";

var app = {
    title: "Visibility Toggle",
    details: "some details to be shown here"
};

var visibility = false;

var onToggleDetails = function onToggleDetails() {
    visibility = !visibility;
    renderApp();
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
    var buildItTemplate = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        React.createElement(
            "button",
            { onClick: onToggleDetails },
            visibility ? 'hide details' : 'show details'
        ),
        visibility && React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                null,
                "dolo dolo dolo"
            )
        )
    );
    ReactDOM.render(buildItTemplate, appRoot);
};

renderApp();
