import { withAuthenticator } from '@aws-amplify/ui-react';

export function getServerSideProps() {
    return {
      props: {
        time: Date()
      },
    };
  }

function Secret({ user, time }) {
  return (
    <div style={{"padding": 50}}>
      <h3>
        Logged in as {user.username}.
      </h3>
      <h3>
        This page was server-side rendered at {time}.
      </h3>
    </div>
  )
}
 
export default withAuthenticator(Secret)