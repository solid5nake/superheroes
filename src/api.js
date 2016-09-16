import md5 from 'md5';

class Api {
  characters() {
    return this.request('characters');
  }

  toQueryString(qs) {
    return Object.keys(qs).
                  map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(qs[key])).
                  join("&").
                  replace(/%20/g, "+");
  }

  request(path, params = {}) {
    let url = 'http://gateway.marvel.com:80/v1/public';
    let apikey = '0da4ad81cc85813a45808444fab73ce8';
    let privatekey = '0a66903344aed265871d714dbaac207d332d824b';

    let ts = new Date().getTime();
    let qs = Object.assign(params, {
      ts: ts,
      hash: md5(`${ts}${privatekey}${apikey}`),
      apikey: apikey
    });

    let headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };


    return fetch(`${url}/${path}?${this.toQueryString(qs)}`, {
      method: 'GET',
      headers: headers
    }).then(
      (response) => response.json()
    );
  }
}

const api = new Api()
export default api
