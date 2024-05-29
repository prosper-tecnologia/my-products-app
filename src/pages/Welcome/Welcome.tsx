import { Box, Typography } from "@mui/material";
import { RootState } from "@src/store";
import { useSelector } from "react-redux";

export function Welcome() {
    const user: any = useSelector((state: RootState) => state.user);

    const greetings: any = {
        female: "Bem vinda",
        male: "Bem vindo"
    };

    return (
        <Box>
            <Typography variant="h4">{greetings[user.gender] || 'Olá'}, {user.firstName}!</Typography>
        </Box>
    );
}