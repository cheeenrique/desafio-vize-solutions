/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable indent */

/* Imports */
import axios from 'axios';
import { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from 'services/api';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    
    // Declaração de variáveis
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loadingPage, setLoadingPage] = useState(true);

    // Cria a persistência do login
    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');
        if(recoveredUser){
            setUser(JSON.parse(recoveredUser));
        }
        setLoadingPage(false);
    }, []);

    // Função de login
    const login = async (email, password) => {
        
        // Altera o botão para carregando
        setLoading(true)

        try{
            // Declara os campos do login na API
            const response = await api.post('/api/authaccount/login', { email: email, password: password });
            
            if(response.data.code === 0){
                const loggedUser = response.data.data;
                localStorage.setItem('user', JSON.stringify(loggedUser));
                api.defaults.headers.Authorization = `Bearer ${response.data.data.Token}`;
                setUser(loggedUser);
                toast.success('Logado com sucesso!', { theme: "colored" });
                navigate('/dashboard');
                setLoading(false);
            } else {
                toast.error(`E-mail ou senha incorreto! Tente novamente`, { theme: "colored" });
                setLoading(false);
            }
        }
        catch(error){
            toast.error(`Erro ao fazer login! ${error}`, { theme: "colored" });
            setLoading(false)
        }
    };

    // Função de registro de usuários
    const register = async (email, password, name) => {
        
        // Altera o botão para carregando
        setLoading(true)

        try{
            // Declara os campos de registro de usuários na API
            const response = await api.post('/api/authaccount/registration', { email: email, password: password, name: name });
            
            if(response.data.code === 0) {
                toast.success('Cadastrado com sucesso!', { theme: "colored" });
                navigate('/');
                setLoading(false);
            } else if(response.data.code === 1) {
                toast.error('O endereço de e-mail que você digitou já está registrado!', { theme: "colored" });
                setLoading(false);
            } else {
                toast.error(`Erro ao realizar o cadastro! Tente novamente`, { theme: "colored" });
                setLoading(false);
            }
        }
        catch(error){
            toast.error(`Erro ao realizar o cadastro! ${error}`, { theme: "colored" });
            setLoading(false)
        }
    };

    // Função de logout
    const logout = () => {
        toast.success('Logout realizado com sucesso!', { theme: "colored" });
        localStorage.removeItem('user');
        api.defaults.headers.Authorization = null;
        setUser(null);
        navigate('/');
    };

    // Função de token expirado
    const expiredToken = () => {
        toast.error('Token expirado, favor realizar o login novamente!', { theme: "colored" });
        localStorage.removeItem('user');
        api.defaults.headers.Authorization = null;
        setUser(null);
        navigate('/');
    };

    return(
        <AuthContext.Provider value={{ authenticated: !!user, user, loadingPage, loading, setLoading, login, register, logout, expiredToken }}>
            {children}
        </AuthContext.Provider>
    );
}
