import { ReactElement } from 'react';

/**
 * Render a React element to its initial HTML.React will return an HTML string.
 */
export function renderToString(element: ReactElement): string;

/**
 * Similar to `renderToString`, except this doesn't create extra DOM attributes
 * such as `data-reactid`, that React uses internally. This is useful if you want
 * to use React as a simple static page generator, as stripping away the extra
 * attributes can save lots of bytes.
 */
export function renderToStaticMarkup(element: ReactElement): string;

export const version: string;

export as namespace ReactDOMServer;

/**
 * NOTE: renderToNodeStream and renderToStaticNodeStream do appear in the
 * server.browser.js of react-dom, but are not useable in the browser according
 * to the ReactDOMServer documentation at
 * https://reactjs.org/docs/react-dom-server.html
 */
