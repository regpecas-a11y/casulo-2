
// @ts-nocheck
import React, { useState } from 'react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { auth } from '../lib/firebase';
import CasuloLogo from './CasuloLogo';
import { useAuth } from '../contexts/AuthContext';

import firebaseConfig from '../../firebase-applet-config.json';

interface AuthLayerProps {
  onSuccess?: (uid: string, isSignup: boolean) => void;
}

const AuthLayer: React.FC<AuthLayerProps> = ({ onSuccess }) => {
  const { signInWithGoogle, signInWithApple, setGuestMode } = useAuth();
  const [mode, setMode] = useState<'LOGIN' | 'SIGNUP' | 'FORGOT'>('LOGIN');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const projectId = firebaseConfig.projectId;

  const handleGoogleAuth = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      await signInWithGoogle();
      console.log('Google login success');
    } catch (error: any) {
      console.error('Erro Google auth:', error);
      if (error.code === 'auth/operation-not-allowed') {
        setError(`O provedor Google não está habilitado no Firebase Console (Projeto: ${projectId}).`);
      } else if (error.code === 'auth/popup-blocked') {
        setError('O popup de login foi bloqueado pelo navegador.');
      } else {
        setError('Erro ao entrar com Google: ' + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleAppleAuth = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      await signInWithApple();
      console.log('Apple login success');
    } catch (error: any) {
      console.error('Erro Apple auth:', error);
      setError('Erro ao entrar com Apple: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    
    const trimmedEmail = email.trim();
    const cleanPassword = password; // Senhas não devem ter trim() pois espaços podem ser parte da senha

    try {
      console.log(`Attempting ${mode} for ${trimmedEmail}...`);
      if (mode === 'LOGIN') {
        const res = await signInWithEmailAndPassword(auth, trimmedEmail, cleanPassword);
        console.log('Login success:', res.user.uid);
        if (onSuccess) onSuccess(res.user.uid, false);
      } else if (mode === 'SIGNUP') {
        const res = await createUserWithEmailAndPassword(auth, trimmedEmail, cleanPassword);
        console.log('Signup success:', res.user.uid);
        if (onSuccess) onSuccess(res.user.uid, true);
      } else {
        await sendPasswordResetEmail(auth, trimmedEmail);
        setSuccess('E-mail de recuperação enviado! Verifique sua caixa de entrada.');
        setTimeout(() => setMode('LOGIN'), 3000);
      }
    } catch (error: any) {
      console.error('Erro auth completo:', error);
      // Mostrar erro para o usuário
      if (error.code === 'auth/user-not-found') {
        setError('Usuário não encontrado');
      } else if (error.code === 'auth/wrong-password') {
        setError(
          <div className="text-center space-y-2">
            <p>Senha incorreta.</p>
            <button 
              onClick={() => setMode('FORGOT')}
              className="text-[9px] text-rose-600 underline uppercase tracking-widest font-black"
            >
              Clique aqui para redefinir sua senha agora ➔
            </button>
          </div>
        );
      } else if (error.code === 'auth/invalid-credential') {
        setError('Email ou senha inválidos. Se você usou o Google antes, use o botão do Google.');
      } else if (error.code === 'auth/email-already-in-use') {
        setError('Este e-mail já está cadastrado. Tente entrar em vez de criar conta.');
      } else if (error.code === 'auth/weak-password') {
        setError('A senha deve ter pelo menos 6 caracteres.');
      } else if (error.code === 'auth/invalid-email') {
        setError('E-mail inválido');
      } else if (error.code === 'auth/network-request-failed') {
        setError('Erro de conexão. Verifique sua internet');
      } else if (error.code === 'auth/operation-not-allowed') {
        setError(`O provedor E-mail/Senha não está habilitado no Firebase Console (Projeto: ${projectId}).`);
      }
      else setError(`Erro (${error.code}): ` + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-12 animate-fade-in">
      <div className="w-full max-w-xs space-y-12">
        <div className="text-center space-y-3">
          <div className="flex justify-center mb-4">
            <CasuloLogo size={80} />
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Casulo</h1>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
            {mode === 'LOGIN' ? 'Acesso Restrito' : mode === 'SIGNUP' ? 'Novo Registro' : 'Recuperação'}
          </p>
        </div>

        <form onSubmit={handleEmailAuth} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-1">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                className="w-full py-4 border-b border-slate-100 text-sm font-medium focus:border-slate-900 transition-all focus:outline-none"
              />
            </div>

            {mode !== 'FORGOT' && (
              <div className="space-y-1 relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Senha"
                  className="w-full py-4 border-b border-slate-100 text-sm font-medium focus:border-slate-900 transition-all focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-300 uppercase tracking-widest hover:text-slate-900 transition-colors"
                >
                  {showPassword ? 'Ocultar' : 'Mostrar'}
                </button>
              </div>
            )}
          </div>

          {error && (
            <div className="text-[10px] font-bold text-rose-500 text-center uppercase tracking-widest">{error}</div>
          )}

          {success && (
            <p className="text-[10px] font-bold text-emerald-500 text-center uppercase tracking-widest">{success}</p>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className={`w-full py-4 ${loading ? 'bg-slate-400' : 'bg-slate-900'} text-white font-bold rounded-xl shadow-xl shadow-slate-200 active:scale-95 transition-all text-xs tracking-widest uppercase flex items-center justify-center gap-2`}
          >
            {loading && <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
            {loading ? 'Processando...' : mode === 'LOGIN' ? 'Entrar' : mode === 'SIGNUP' ? 'Registrar' : 'Enviar'}
          </button>

            {mode === 'LOGIN' && (
              <div className="space-y-3">
                <button 
                  type="button"
                  onClick={handleGoogleAuth}
                  disabled={loading}
                  className="w-full py-4 bg-white border border-slate-100 text-slate-900 font-bold rounded-xl shadow-sm active:scale-95 transition-all text-[10px] tracking-widest uppercase flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </button>
                <button 
                  type="button"
                  onClick={handleAppleAuth}
                  disabled={loading}
                  className="w-full py-4 bg-black text-white font-bold rounded-xl shadow-sm active:scale-95 transition-all text-[10px] tracking-widest uppercase flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" viewBox="0 0 256 315">
                    <path fill="currentColor" d="M213.803 167.03c.442 47.58 41.74 63.413 42.147 63.615-.338 1.063-6.563 22.573-21.722 44.713-13.097 19.14-26.697 38.213-48.16 38.607-21.083.391-27.887-12.457-51.98-12.457-24.083 0-31.64 12.067-51.6 12.85-20.73.784-36.317-20.71-49.524-39.784C5.877 241.055-16.1 178.325 7.231 137.406c11.58-20.336 32.483-33.193 55.247-33.52 17.367-.327 33.743 11.673 44.373 11.673 10.633 0 30.333-14.413 51.263-12.287 8.767.363 33.427 3.53 49.213 26.653-.1.06-29.463 17.18-29.463 52.887M176.622 70.528c9.383-11.383 15.717-27.19 13.983-42.94-13.52.547-29.897 9.003-39.583 20.303-8.697 10.047-16.313 26.12-14.283 41.617 15.083 1.17 30.497-7.597 39.883-18.98"/>
                  </svg>
                  Apple
                </button>
              </div>
            )}
        </form>

        <div className="space-y-8">
          <div className="flex flex-col gap-4 text-center">
            {mode === 'LOGIN' ? (
              <>
                <button onClick={() => setMode('SIGNUP')} className="text-[10px] font-bold text-slate-900 uppercase tracking-widest underline underline-offset-4">Criar Conta</button>
                <button onClick={() => setMode('FORGOT')} className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">Recuperar Senha</button>
                <div className="pt-4 border-t border-slate-50">
                  <button 
                    type="button"
                    onClick={setGuestMode}
                    className="text-[10px] font-black text-emerald-500 uppercase tracking-widest hover:text-emerald-600 transition-colors"
                  >
                    Continuar sem conta ➔
                  </button>
                </div>
              </>
            ) : (
              <button onClick={() => setMode('LOGIN')} className="text-[10px] font-bold text-slate-900 uppercase tracking-widest underline underline-offset-4">Voltar</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayer;
