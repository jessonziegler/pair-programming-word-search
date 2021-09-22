
const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
          return true;
        }
    }

    let nestedArray = [];
    for (let i = 0; i <letters[0].length; i++) {
      let tempArray = [];
      for (let j = 0; j < letters.length; j++) {
        tempArray.push(letters[j][i]);
      }
      nestedArray.push(tempArray);
    }

    const verticalJoin = nestedArray.map(ls => ls.join(''));
    for(let l of verticalJoin) {
      if (l.includes(word)) return true;
    }
    return false;
  }

  module.exports = wordSearch;