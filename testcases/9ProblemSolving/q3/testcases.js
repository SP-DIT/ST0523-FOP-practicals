module.exports = {
    testcases: [
        {
            input: [
                ['Paris 2019', 'Paris 2020', 'London 2021'],
                ['Paris 1', 'Paris 2', 'London 1'],
            ],
            expected: [2019, 2020, 2021],
        },
        {
            input: [
                ['Iceland 2016', 'Sweden 2015', 'Iceland 1982', 'Norway 1999'],
                ['Sweden 1', 'Iceland 1', 'Iceland 2'],
            ],
            expected: [2015, 1982, 2016],
        },
        {
            input: [
                ['Japan 2003', 'Japan 2002', 'Japan 2001'],
                ['Japan 1', 'Japan 2', 'Japan 3'],
            ],
            expected: [2001, 2002, 2003],
        },
        {
            input: [
                [
                    'Malaysia 1997',
                    'China 2012',
                    'China 1999',
                    'Malaysia 2006',
                    'Africa 2003',
                    'Brunei 2014',
                    'Brunei 2022',
                    'Brunei 1996',
                    'Africa 1996',
                    'Malaysia 2010',
                    'Malaysia 1996',
                    'Malaysia 2021',
                    'China 2003',
                    'Africa 1995',
                    'Brunei 2012',
                    'China 2014',
                    'Africa 2004',
                    'Malaysia 2002',
                    'Brunei 2007',
                    'America 2008',
                    'Brunei 2008',
                    'America 2016',
                    'Africa 2011',
                    'America 2022',
                    'Malaysia 2000',
                ],
                [
                    'Africa 2',
                    'America 3',
                    'Malaysia 4',
                    'Brunei 5',
                    'China 1',
                    'Africa 4',
                    'America 1',
                    'Africa 3',
                    'China 3',
                    'Malaysia 1',
                ],
            ],
            expected: [1996, 2022, 2002, 2014, 1999, 2004, 2008, 2003, 2012, 1996],
        },
    ],
    options: {
        type: 'JSON',
    },
};
