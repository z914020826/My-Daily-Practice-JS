function formatSizeUnits(kb) {
  let units = ["KB", "MB", "GB", "TB", "PB"];
  let unitIndex = 0;

  while (kb >= 1024 && unitIndex < units.length - 1) {
    kb /= 1024;
    unitIndex++;
  }

  return `${kb.toFixed(2)} ${units[unitIndex]}`;
}

console.log(formatSizeUnits(312555122231251));
