// Function to calculate mean of an array of numbers
export const calculateMean = (arr) => {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum / arr.length;
};

// Function to calculte median of an array of numbers
export const calculateMedian = (arr) => {
  const sortOrder = arr.sort((a, b) => a - b);
  const mid = Math.floor(sortOrder.length / 2);
  return sortOrder.length % 2 === 0
    ? (sortOrder[mid - 1] + sortOrder[mid]) / 2
    : sortOrder[mid];
};

// Function to calculate mode of an array of numbers
export const calculateMode = (arr) => {
  const counts = {};
  arr.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1;
  });
  let mode;
  let maxCount = 0;
  for (const num in counts) {
    if (counts[num] > maxCount) {
      mode = num;
      maxCount = counts[num];
    }
  }
  return mode;
};
