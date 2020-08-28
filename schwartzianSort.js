let rivers = ['Nile', 'Amazon', 'Congo', 'Mississippi', 'Rio-Grande'];

var lengths = rivers.map(function (e, i) {
    return {index: i, value: e.length };
});

lengths.sort(function (a, b) {
    return +(a.value > b.value) || +(a.value === b.value) - 1;
});

var sortedRivers = lengths.map(function (e) {
    return rivers[e.index];
});
