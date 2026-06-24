import { createBrowserRouter, RouterProvider } from "react-router";
import { lazy, Suspense } from "react";
import { SplashLoader } from "../components/LazyLoader";
import ErrorBoundary from "../components/ErrorBoundary";
const Root = lazy(() => import("../layout/RootLayout"));
const Index = lazy(() => import("../page/Index"));
const Privacy = lazy(() => import("../page/Privacy"));
const Terms = lazy(() => import("../page/Terms"));
const NotFound = lazy(() => import("../page/NotFound"));

export default function AppRoutes() {
  const routes = [
    {
      element: (
        <Suspense fallback={<SplashLoader />}>
          <ErrorBoundary>
            <Root />
          </ErrorBoundary>
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<SplashLoader />}>
              <Index />
            </Suspense>
          ),
        },
        {
          path: "privacy-policy",
          element: (
            <Suspense fallback={<SplashLoader />}>
              <Privacy />
            </Suspense>
          ),
        },
        {
          path: "terms-of-service",
          element: (
            <Suspense fallback={<SplashLoader />}>
              <Terms />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: (
            <Suspense fallback={<SplashLoader />}>
              <NotFound />
            </Suspense>
          ),
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
