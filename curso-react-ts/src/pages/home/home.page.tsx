import { Navbar } from "../../components/Navbar/Navbar.component"
import Button from '@mui/joy/Button';


const Home = () => {
    return (
        <div>
            <Navbar />
            <h1>Bem-vindo ao Sistema!</h1>
            <p>Esta é a página inicial.</p>
            <Button>Button</Button>
        </div>
    )
}

export default Home