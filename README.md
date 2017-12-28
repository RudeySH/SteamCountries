# Steam Countries
List of countries, states/provinces and cities from Steam Community profiles.

## Integration
This repository's location data is meant to be used together with the [Steam Web API]. See the documentation for [GetPlayerSummaries], it returns `loccountrycode`, `locstatecode` and `loccityid` for any public Steam Community player profile using a 64 bit Steam ID. This repository helps you find **names** for countries, states/provinces and cities.

- **Country codes** are two-letter [ISO 3166-1 alpha 2] codes.

- **State codes** for *Australia* (AU), *Canada* (CA) and *United States* (US) are [ISO 3166-2] codes. For all other countries, state codes are **non-standard** codes. Most of these can be parsed as integers, but some contain letters or leading zeros. State codes are **not unique** across countries.  
In Steam's location data all state codes data are two characters long, **except for five Australian ISO codes**. (`ACT`, `NSW`, `QLD`, `TAS` and `VIC`)

- **City IDs** are integers starting from 1. These are incremental, **non-standard**, internal Steam numbers. City IDs are **unique** across countries and states/provinces.

## Formats

### JSON
Steam location data is currently only available in JSON format. See the [/json] folder for the files and **more examples**.

#### Example
```
{ countries: [
    { code: 'XY', name: 'Example country 1', states: [
        { code: '01', name: 'Example state/province 1', cities: [
            { id: 5129, name: 'Example city 1' }
        ] }
    ] }
] }
```

## Statistics
*The use of the word "subdivisions" below refers to states, provinces, regions and other categories.*

### Totals

As of **december 2017**, there are 250 countries, 4024 subdivisions and 45261 cities in Steam's location data.

At least 18 subdivisions and 57 cities appear to be **duplicates**.

### Extremes

The country with the most subdivisions is *United Kingdom* (GB) with 252 subdivisions. *Bosnia and Herzegovina* (BA), *Macau* (MO) and *Sao Tome & Principe* (ST) only have 2 subdivisions each. The subdivision with the most cities is *California* (CA, US) with 447 cities. There are 806 subdivisions with only 1 city.

### Incomplete

There are 81 countries that have no cities. Out of these countries, 61 have no subdivisions either. Countries with cities but without subdivisions do not exist *yet*. Thus, there are 20 countries with subdivisions but without cities. There are also countries with some subdivisions that have cities and some subdivisions that don't. In total, there are 1165 subdivisions that have no cities.

In other words, 32% of all countries and 29% of all subdivisions have no cities. 

[ISO 3166-1 alpha 2]: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
[ISO 3166-2]: https://en.wikipedia.org/wiki/ISO_3166-2
[Steam Web API]: https://developer.valvesoftware.com/wiki/Steam_Web_API
[GetPlayerSummaries]: https://developer.valvesoftware.com/wiki/Steam_Web_API#GetPlayerSummaries_.28v0002.29
[/json]: /json
