exports.EPOCH = new Date(1943, 3, 14).getTime();
exports.START_YEAR = 2000;
// const MAX_DATE = new Date(2032, 4, 14);

exports.NEPALI_DATE_MAP = [
  [2000, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365],
  [2001, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2002, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
  [2003, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2004, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365],
  [2005, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2006, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
  [2007, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2008, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31, 365],
  [2009, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2010, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
  [2011, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2012, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365],
  [2013, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2014, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
  [2015, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2016, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365],
  [2017, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2018, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
  [2019, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366],
  [2020, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2021, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2022, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365],
  [2023, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366],
  [2024, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2025, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2026, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2027, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365],
  [2028, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2029, 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30, 365],
  [2030, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2031, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365],
  [2032, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2033, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
  [2034, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2035, 30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31, 365],
  [2036, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2037, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
  [2038, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2039, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365],
  [2040, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2041, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
  [2042, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2043, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365],
  [2044, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2045, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
  [2046, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2047, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2048, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2049, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365],
  [2050, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366],
  [2051, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2052, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2053, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365],
  [2054, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366],
  [2055, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2056, 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30, 365],
  [2057, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2058, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365],
  [2059, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2060, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
  [2061, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2062, 30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31, 365],
  [2063, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2064, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
  [2065, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2066, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31, 365],
  [2067, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2068, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
  [2069, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2070, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365],
  [2071, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2072, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
  [2073, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
  [2074, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2075, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2076, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365],
  [2077, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366],
  [2078, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2079, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
  [2080, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365],
  [2081, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366],
  [2082, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30, 365],
  [2083, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30, 365],
  [2084, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30, 365],
  [2085, 31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30, 366],
  [2086, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30, 365],
  [2087, 31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30, 366],
  [2088, 30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30, 365],
];

// Include the progressive sum at the end of the array
exports.NEPALI_DATE_MAP.forEach((l, idx, arr) => {
  l.push(l[13] + (idx === 0 ? 0 : arr[idx - 1][14]));
});
