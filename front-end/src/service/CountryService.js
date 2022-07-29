export class CountryService {

    getCountries() {
        return fetch('../data/countries.json').then(res => res.json())
            .then(data => data.data);
    }
}
