const CurrencyFormatter=new Intl.NumberFormat(undefined,{currency:"IND",style:"currency"})

export function formatCurrency(number:number){
    return CurrencyFormatter.format(number);
}