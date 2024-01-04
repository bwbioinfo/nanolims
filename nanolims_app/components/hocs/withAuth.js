// withAuth.js
import { useSession, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    getSession().then((session) => {
    if (!session) {
      // Redirect to login page if not authenticated
      router.replace('/login');
    } else {
      setIsLoading(false);
    }
    });
    }, [session, router]);

    if (isLoading) {
    return <p>Loading...</p>;
    }

    // Render the wrapped component if authenticated
    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
