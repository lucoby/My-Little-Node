import React from 'react';

const appName = 'My Little Node App';
const DESCRIPTION = 'Node App Attac. Node App Protec.';

export default function Layout(props) {
  return (
    <html>
      <head>
        <title>{appName}</title>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="og:title" content={appName} />
        <meta name="og:description" content={DESCRIPTION} />
        // <link rel="icon" href="/images/favicon.ico" type="image/x-icon"/>
        <link rel="stylesheet" href="/css/style.css"/>
      </head>
      <body>
        <div id="root">
          {props.children}
        </div>
      </body>
    </html>
  );
}

Layout.propTypes = {
  children: React.PropTypes.object.isRequired
};