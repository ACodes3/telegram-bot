import TwentyEuroBill from "../img/20.png"
import FiftyEuroBill from "../img/50.png"
import HundredEuroBill from "../img/100.png"

export function getData(){
    return [
        {
            title:"Deposit €", amount:20, Image: TwentyEuroBill
        },
        {
            title:"Deposit €", amount:50, Image: FiftyEuroBill
        },
        {
            title:"Deposit €", amount:100, Image: HundredEuroBill
        },
    ]
}