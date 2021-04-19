import moment from 'moment';

const createSortFn = (name, compareFn) => ({
  name,
  compareFn
});

const createNumberSortFn = (name, prop) =>
  createSortFn(name, (a, b) => b[prop] - a[prop]);
const createStringCompareFn = (name, prop) =>
  createSortFn(name, (a, b) => a[prop].localeCompare(b[prop]));
const createDateCompareFn = (name, prop) =>
  createSortFn(name, (a, b) => moment.utc(b[prop]).diff(moment.utc(a[prop])));

const sortFunctions = {
  popularity: createNumberSortFn('Popularity', 'popularity'),
  title: createStringCompareFn('Title', 'originalTitle'),
  rating: createNumberSortFn('Rating', 'voteAverage'),
  releaseDate: createDateCompareFn('Release Date', 'releaseDate')
};

export default Object.freeze({
  sortFunctions
});
