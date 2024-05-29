import { Box, CircularProgress } from "@mui/material";
import { ResponsiveAppBar } from "@src/components";
import { saveToken, validateToken } from "@src/services";
import { saveUser } from "@src/store/slices/userSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

export function Authorized() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        validateToken()
            .then(({ data: user }) => {
                dispatch(saveUser(user));
                const token = localStorage.getItem('token');
                saveToken(token!);
            })
            .catch(() => navigate('/login'))
            .finally(() => setLoading(false));
    }, []);

    return (
        <Box display="flex" alignItems="center" flexDirection="column">
            {loading ? (
                <Box style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    width: '100%',
                }}>
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    <ResponsiveAppBar />
                    <Box padding="20px" maxWidth="1540px">
                        <Outlet />
                    </Box>
                </>
            )}
        </Box>
    );
}
