import { Box, Typography } from "@mui/material";
import { RootState } from "@src/store";
import { useSelector } from "react-redux";

export function Welcome() {
    const user: any = useSelector((state: RootState) => state.user);

    return (
        <Box>
            <Typography variant="h4">Bem vindo, {user.firstName}!</Typography>
        </Box>
    );
}