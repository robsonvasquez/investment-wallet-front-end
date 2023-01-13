import colors from "tailwindcss/colors";
import {ArrowUp, ArrowDown} from "phosphor-react";
import PieGraph from "../graphs/PieGraph";

const data = [
  {
    id: "css",
    label: "css",
    value: 123,
    color: "hsl(245, 70%, 50%)"
  },
  {
    id: "python",
    label: "python",
    value: 519,
    color: "hsl(2, 70%, 50%)"
  },
  {
    id: "ruby",
    label: "ruby",
    value: 411,
    color: "hsl(341, 70%, 50%)"
  },
  {
    id: "rust",
    label: "rust",
    value: 593,
    color: "hsl(131, 70%, 50%)"
  },
  {
    id: "java",
    label: "java",
    value: 239,
    color: "hsl(68, 70%, 50%)"
  }
]

interface CardWalletProps{
  key: number;
  title: string;
  balance: number;
  variation: number;
  className?: string
}

export default function CardWallet(props: CardWalletProps){
  return(
    <div 
      className={`
      h-full w-72  flex justify-between items-center p-4
      bg-white border border-gray-300 rounded-lg
      ${props.className}`}
    >
      <div className="flex justify-center items-center">
        <PieGraph data={data}/>
      </div>  
      <div className="h-full w-full flex flex-col justify-between ">
        <span className="flex items-center justify-center font-semibold">{props.title}</span>

        <div className="w-full flex justify-between font-medium">
          <span className="flex items-center truncate">R$ {props.balance}</span>        
          <div className="flex items-center">
            {props.variation > 0 ? 
              (<ArrowUp size={16} color={colors.lime[800]}/>):
              (<ArrowDown size={16} color={colors.red[600]}/>)
            }
            <span className={`${props.variation > 0 ? 'text-lime-800':'text-red-600'}`}>{Math.abs(props.variation)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}