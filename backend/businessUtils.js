function hasMadeProfitLast12Months(sheet) {
  let profitOrNot = 0;
  for (const month of sheet) {
    const profitOrLoss = month.profitOrLoss;
    profitOrNot += profitOrLoss;
  }
  if (profitOrNot) {
    return true;
  }

  return false;
}

function isAverageAssetValueGreater(sheet, loanAmount) {
  let totalAssetValue = 0;

  for (const month of sheet) {
    const assetValue = month.assetsValue;
    totalAssetValue += assetValue;
  }
  return totalAssetValue > loanAmount;
}

module.exports = {
  hasMadeProfitLast12Months,
  isAverageAssetValueGreater,
};
