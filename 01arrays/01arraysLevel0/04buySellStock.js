//given array each elem represents stock price on ith day. find max profit someone can get after selling the stock which that person buy on any given day.
//I/P:- prices = [7, 1, 5, 3, 6, 4] O/P:- 5 (because buying on day 2(price = 1) and selling on day 5 (price = 6) profit = 6 - 1 = 5);
//Note:- buying on day 2 then selling on day 1 is not allowed because you must buy before sell.

const stockProfit = (prices) => {
    let profit = 0;
    for (let buy = 0; buy < prices.length; buy++){
        for (let i = buy + 1; i < prices.length; i++) {
            let val = prices[i] - prices[buy];

            profit = profit > val ? profit : val;
        }
    }
    return profit;
}

const stockProfit2 = (prices) => {
    let maxProfit = 0;
    let min = prices[0];
    
    for (let i = 0; i < prices.length; i++){
        if (min > prices[i]) {
            min = prices[i];
        }
        console.log("Buy: ", min, "Sell: ", prices[i])
        let profit = (prices[i] - min)
        maxProfit =  profit > maxProfit ? profit : maxProfit;
    }

    return maxProfit > 0 ? maxProfit : 0;
}

const prices = [7, 1, 5, 3, 6, 4];

console.log(stockProfit(prices))
console.log(stockProfit2(prices))