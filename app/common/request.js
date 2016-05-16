import { forEach, map } from 'lodash';
import { Promise } from 'rsvp';

const DONE = 4;
const DEFAULT_HEADERS = {
    'Content-Type': 'application/json'
};

// export function getHostUrl() {
//     const protocol = location.protocol;
//     const port = (location.port && location.port.length > 0) ? ':' + location.port : '';
//     return `${protocol}//${location.hostname}${port}`;
// }

function getQueryParamString(queryParams) {
    return map(queryParams, (value, key) => `${key}=${encodeURIComponent(value)}`).join('&');
}

/**
 * @param options - type(String) [required] -- [GET|POST|PUT|DELETE|PATCH|OPTION]
 *                  url(String) [required]
 *                  data(Object) -- the request body
 *                  headers(Object) -- { header1: 'val', header2: 'val2' } -- [Content-Type=application/json] by default
 *                  queryParams(Object) -- { page: '1', filter: 'blah' } -- TODO
 * @return Promise
 */
const send = options => new Promise((resolve, reject) => {
    const queryParamString = options.queryParams ? ('?' + getQueryParamString(options.queryParams)) : '';
    let xhr = new XMLHttpRequest();
    xhr.open(options.type, options.url + queryParamString);
    const headers = {
        ...DEFAULT_HEADERS,
        ...options.headers
    };
    forEach(headers, (value, key) => xhr.setRequestHeader(key, value));
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== DONE) { return; }

        if (xhr.status >= 400) {
            reject(xhr);
        } else {
            resolve(xhr);
        }
    };

    xhr.send(JSON.stringify(options.data));
});

export default {
    send,

    delete: options => send({
        ...options,
        type: 'DELETE'
    }),

    get: options => send({
        ...options,
        type: 'GET'
    }),

    patch: options => send({
        ...options,
        type: 'PATCH'
    }),

    post: options => send({
        ...options,
        type: 'POST'
    }),

    put: options => send({
        ...options,
        type: 'PUT'
    })
};
