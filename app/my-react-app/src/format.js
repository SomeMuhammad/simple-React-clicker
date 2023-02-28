function format(num){
var floor=Math.floor, abs=Math.abs, log=Math.log, round=Math.round, min=Math.min;
var abbrev = ['k', 'M', 'B']; 

function rnd(n, precision) {
    var prec = 10**precision;
    return round(n*prec)/prec;
}

function formatik(n) {
    var base = floor(log(abs(n))/log(1000));
    var suffix = abbrev[min(abbrev.length-1, base-1)];
    base = abbrev.indexOf(suffix) + 1;
    return suffix ? rnd(n/1000**base,2)+suffix : ''+n;
}
return formatik(num)
}
export default format;