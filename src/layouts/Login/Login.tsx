import { validateToken } from "@src/services";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        validateToken()
            .then(() => navigate('/auth'))
            .catch(() => navigate('/login'));
    }, []);

    return (
        <Outlet />
    );
}
