import Input from '@mui/joy/Input';
import Key from '@mui/icons-material/Key';
import Email from '@mui/icons-material/EmailOutlined'
import { useState } from 'react';
import { Box, Button, Container } from '@mui/joy';


const LoginPage = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = () => {
        console.log('aqui')
    }

    return (
        <main>
            <Container>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                <Box component="section" sx={{ p: 3 }}>
                    <Input
                        type="email"
                        placeholder="Digite seu email"
                        value={email}
                        startDecorator={<Email />}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ marginBottom: '20px' }}
                    />
                    <Input
                        type="password"
                        startDecorator={<Key />}
                        placeholder="Digite a senha"
                        value={password}
                        style={{ marginBottom: '20px' }}
                        onChange={(e) => setPassword(e.target.value)}    
                    />
                    <Button type="submit">Login</Button>
                    </Box>
                </form>
            </Container>
        </main>
        
    )
}

export default LoginPage