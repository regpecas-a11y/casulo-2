import * as React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends (React.Component as any) {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      let errorDetails: any = null;
      try {
        if (this.state.error?.message) {
          errorDetails = JSON.parse(this.state.error.message);
        }
      } catch (e) {
        // Not a JSON error
      }

      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Ops! Algo deu errado</h1>
            <p className="text-gray-600 mb-8">
              Ocorreu um erro inesperado. Estamos trabalhando para resolver isso.
            </p>

            {errorDetails && (
              <div className="bg-red-50 rounded-2xl p-4 mb-8 text-left overflow-hidden">
                <p className="text-xs font-mono text-red-800 break-all">
                  {JSON.stringify(errorDetails, null, 2)}
                </p>
              </div>
            )}

            <button
              onClick={this.handleReset}
              className="w-full bg-indigo-600 text-white rounded-2xl py-4 font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors"
            >
              <RefreshCw className="w-5 h-5" />
              Recarregar Aplicativo
            </button>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
