const data = {
  "1":  [true, true],
  "2":  [true, true],
  "3":  [true, true],
  "4":  [true, true],
  "5":  [true, true],
  "6":  [true, true],
  "7":  [true, true],
  "8":  [true, true],
  "9":  [true, true],
  "10": [true, true],
  "11": [true, true],
  "12": [true, true],
  "13": [true, false],
  "14": [true, true],
  "15": [false, false],
  "16": [false, false],
  "17": [false, false],
  "18": [false, false],
  "19": [false, false],
  "20": [false, false],
  "21": [false, false],
  "22": [false, false],
  "23": [false, false],
  "24": [false, false],
  "25": [false, false],
}

const store = {
  days() {
    return Object.keys(data)
  },

  starCount() {
    const countFn = (sum, array) => sum + array.filter(bool => bool).length
    return Object.values(data).reduce(countFn, 0)
  },

  starCountForDay(day) {
    return (data[day] || []).filter(bool => bool).length
  }
}

export default store;
