import React from 'react';
import Layout from './Layout.jsx';
import App from './App.jsx';
import ReactDOMServer from 'react-dom/server';
import HtmlToReact from 'html-to-react';


const {html, css} = StyleSheetServer.renderStatic(() => ReactDOMServer.renderToStaticMarkup(<App/>));

export {html, css};

export default function index() {
  return (<Layout>{(new HtmlToReact.Parser(React)).parse(html)}</Layout>);
}