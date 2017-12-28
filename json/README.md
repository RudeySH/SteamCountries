# JSON format

## Examples

- countries
```
{
    countries: [
        { code: 'XY', name: 'Example country 1' },
        { code: 'YX', name: 'Example country 2' }
    ]
}
```

- countries-states
```
{
    countries: [
        {
            code: 'XY',
            name: 'Example country 1',
            states: [
                { code: '01', name: 'Example state/province 1' },
                { code: 'ABC', name: 'Example state/province 2' }
            ]
        }
    ]
}
```

- countries-states-cities
```
{
    countries: [
        {
            code: 'XY',
            name: 'Example country 1',
            states: [
                {
                    code: '01',
                    name: 'Example state/province 1',
                    cities: [
                        { id: 5129, name: 'Example city 1' },
                        { id: 46986, name: 'Example city 2' }
                    ]
                }
            ]
        }
    ]
}
```
