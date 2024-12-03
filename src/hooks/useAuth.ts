import { create } from "zustand";
import { persist } from "zustand/middleware";

interface estadoAutentificacao{
    name: string
    email: string
    token: string
    setName: (nomeRecebido: string) => void
    setEmail: (emailRecebido: string) => void
    setToken: (tokenRecebido: string) => void
    logout: () => void
}

export const useAuth = create<estadoAutentificacao>()(
    persist(
        (set) => ({
            name: '',
            email: '',
            token: '',
        
            setName: (nomeRecebido) => set((state) => ({...state, name: nomeRecebido})),
            setEmail: (emailRecebido) => set((state) => ({...state, email: emailRecebido})),
            setToken: (tokenRecebido) => set((state) => ({...state, token: tokenRecebido})),
            logout: () => set(() => ({name: '', email: '', token: ''}))
        }),
        {
            name: '@useAuth'
        }
    )
)