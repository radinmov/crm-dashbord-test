import Header from "../../componets/Header"
import useTitle from "../../componets/Hook/useTitle"
import { Style } from "./Style"

export default function Home() {
    const title = useTitle("Home(Dashboard)")
    return (
    <Style >
         <Header />
    </Style>
    )        
}