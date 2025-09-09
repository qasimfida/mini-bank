import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authAPI } from '@/lib/api/auth';

export function useAuth() {
  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationFn: authAPI.login,
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      queryClient.setQueryData(['user'], data.user);
    },
  });

  const registerMutation = useMutation({
    mutationFn: authAPI.register,
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      queryClient.setQueryData(['user'], data.user);
    },
  });

  const { data: user, isLoading: isUserLoading } = useQuery({
    queryKey: ['user'],
    queryFn: authAPI.getProfile,
    enabled: !!localStorage.getItem('token'),
    retry: false,
  });

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    queryClient.clear();
    window.location.href = '/auth/login';
  };

  const isAuthenticated = !!localStorage.getItem('token') && !!user;

  return {
    user,
    isAuthenticated,
    isLoading: loginMutation.isPending || registerMutation.isPending,
    isUserLoading,
    login: loginMutation.mutateAsync,
    register: registerMutation.mutateAsync,
    logout,
    loginError: loginMutation.error,
    registerError: registerMutation.error,
  };
}
