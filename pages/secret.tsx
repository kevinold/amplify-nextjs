import { withAuthenticator } from '@aws-amplify/ui-react';

export function getServerSideProps() {
    const buildDate = new Date();
    const formattedBuildDate = buildDate.toLocaleDateString("en-US", {
        dateStyle: "long",
    });
    const formattedBuildTime = buildDate.toLocaleTimeString("en-US", {
        timeStyle: "medium",
    });
    return {
      props: {
        renderedAt: `${formattedBuildDate} at ${formattedBuildTime}`
      },
    };
  }

function Secret({ signOut, user, renderedAt }) {
  return (
    <div style={{"padding": 50}}>
      <h3>
        Logged in as {user.username}.
        <button onClick={signOut}>Sign out</button>
      </h3>
      <h3>
        This page was server-side rendered at {renderedAt}.
      </h3>
    </div>
  )
}
 
export default withAuthenticator(Secret)