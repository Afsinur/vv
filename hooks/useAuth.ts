"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../lib/auth";

interface UseAuthOptions {
  redirectPath?: string;
  requireAuth?: boolean; // Whether to redirect if not authenticated
  onRedirect?: () => void; // Callback before redirecting
}

/**
 * Custom hook for authentication protection with options
 * @param options Configuration options for the hook
 */
export function useAuth(options: UseAuthOptions = {}) {
  const { redirectPath = "/login", requireAuth = true, onRedirect } = options;

  const router = useRouter();
  const isAuthenticated = auth.isAuthenticated();
  const user = auth.getCurrentUser();

  useEffect(() => {
    if (requireAuth && !isAuthenticated) {
      // Call optional callback before redirecting
      if (onRedirect) {
        onRedirect();
      }
      router.push(redirectPath);
    }
  }, [isAuthenticated, router, redirectPath, requireAuth, onRedirect]);

  return {
    isAuthenticated,
    user,
    isLoading: !user && isAuthenticated, // In case of async auth in the future
  };
}
