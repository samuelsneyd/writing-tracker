import { Auth, Hub } from 'aws-amplify';

/**
 * If autoSignIn is enabled, the sign-up function will dispatch autoSignIn
 * hub event after successful confirmation. If authentication was successful,
 * the event will contain CognitoUser in data object. If auto sign in failed,
 * it will dispatch autoSignIn_failure event.
 */
const listenToAutoSignInEvent = () => {
  Hub.listen('auth', ({ payload }) => {
    const { event } = payload;
    if (event === 'autoSignIn') {
      const user = payload.data;
      // assign user
    } else if (event === 'autoSignIn_failure') {
      // redirect to sign in page
    }
  });
};

type SignUpParameters = {
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
};

/**
 * Create a new user in the Amazon Cognito UserPool by passing the new user's
 * username, email address, password, and other attributes to Auth.signUp.
 */
export const signUp = async ({ username, password, email, phoneNumber }: SignUpParameters) => {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email, // optional
        phoneNumber, // optional - E.164 number convention
        // other custom attributes
      },
      autoSignIn: {
        // optional - enables auto sign in after user is confirmed
        enabled: true,
      },
    });
    console.log(user);
  } catch (error) {
    console.log('error signing up:', error);
  }
};

type ResendConfCodeParameters = {
  username: string;
};

/**
 * If user didn't get a confirmation code, send a new one.
 */
export const resendConfirmationCode = async ({ username }: ResendConfCodeParameters) => {
  try {
    await Auth.resendSignUp(username);
    console.log('code resent successfully');
  } catch (err) {
    console.log('error resending code: ', err);
  }
};

type ConfirmSignUpParameters = {
  username: string;
  code: string;
};

export const confirmSignUp = async ({ username, code }: ConfirmSignUpParameters) => {
  try {
    await Auth.confirmSignUp(username, code);
  } catch (error) {
    console.log('error confirming sign up', error);
  }
};

type SignInParameters = {
  username: string;
  password: string;
};

export const signIn = async ({ username, password }: SignInParameters) => {
  try {
    const user = await Auth.signIn(username, password);
  } catch (error) {
    console.log('error signing in', error);
  }
};

export const signOut = async () => {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
};

/**
 * Sign out users from all devices. It also invalidates all refresh tokens issued
 * to a user. The user's current access and ID tokens remain valid until their expiry.
 * Access and ID tokens expire one hour after they are issued.
 */
export const globalSignOut = async () => {
  try {
    await Auth.signOut({ global: true });
  } catch (error) {
    console.log('error signing out: ', error);
  }
};
