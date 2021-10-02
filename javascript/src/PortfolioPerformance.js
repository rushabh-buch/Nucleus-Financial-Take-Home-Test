const prices = [
    { effectiveDate: new Date(2021, 8, 1, 5, 0, 0), price: 35464.53 },
    { effectiveDate: new Date(2021, 8, 2, 5, 0, 0), price: 35658.76 },
    { effectiveDate: new Date(2021, 8, 3, 5, 0, 0), price: 36080.06 },
    { effectiveDate: new Date(2021, 8, 3, 13, 0, 0), price: 37111.11 },
    { effectiveDate: new Date(2021, 8, 6, 5, 0, 0), price: 38041.47 },
    { effectiveDate: new Date(2021, 8, 7, 5, 0, 0), price: 34029.61 },
];

const transactions = [
    { effectiveDate: new Date(2021, 8, 1, 9, 0, 0), value: 0.012 },
    { effectiveDate: new Date(2021, 8, 1, 15, 0, 0), value: -0.007 },
    { effectiveDate: new Date(2021, 8, 4, 9, 0, 0), value: 0.017 },
    { effectiveDate: new Date(2021, 8, 5, 9, 0, 0), value: -0.01 },
    { effectiveDate: new Date(2021, 8, 7, 9, 0, 0), value: 0.1 },
];

export function getDailyPortfolioValues() {
    let finaldayprice = 0;
    let finalnumberofunits = 0;
    let daily_portfolio_values_report = [];
    for(let i=1;i<8;i++){
        for(const p of prices){
            if (p.effectiveDate.getDate() == i) {
                finaldayprice = p.price;
            }
        }
        for(const n of transactions)
        {
            if(n.effectiveDate.getDate() == i) finalnumberofunits+=n.value;
        }ṇ
        
        finaloutput.push({effectiveDate:"2021-09-0"+i, value:(finaldayprice*finalnumberofunits).toFixed(5)})
        
    }
    
    return daily_portfolio_values_report;
}