const withAuth = (Component) => {
  const Auth = (props) => {
    // Login data added to props via redux-store (or use react context for example)
    const { isLoggedIn } = props;

    // If user is not logged in, return login component
    if (!isLoggedIn) {
      return <Login />;
    }

    // If user is logged in, return original component
    return <Component {...props} />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;


const MyPage = () => (
  <> My private page</>
);

export default withAuth(MyPage);


export async function getServerSideProps(context) {
  const sendRedirectLocation = (location) => {
    res.writeHead(302, {
      Location: location,
    });
    res.end();
    return { props: {} }; // stop execution
  };

  // some auth logic here
  const isAuth = await authService('some_type_of_token')

  if (!isAuth) {
    sendRedirectLocation('/login')
  }

  return {
    props: {}, // will be passed to the page component as props
  }
}