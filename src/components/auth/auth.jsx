import React from 'react';
import FacebookButton from './buttons/facebook/';
import GitHubButton from './buttons/github/';
import GoogleButton from './buttons/google/';
import MicrosoftButton from './buttons/microsoft/';
import TwitterButton from './buttons/twitter/';
import Tabs from './tabs/';
import SignupForm from './forms/signup/';
import LoginForm from './forms/login/';
import './auth.less';

export default ({subpage}) => {
  let form;
  if (subpage === 'login') {
    form = <LoginForm />;
  } else if (subpage === 'signup') {
    form = <SignupForm />;
  }

  return (
    <div className='auth-component'>
      <div className='auth-ui-container'>
        <Tabs tab={subpage} routeAttr='subpage' />

        <div className='auth-branding'>
          <content></content>
        </div>

        <div className='oauth-buttons'>
          <FacebookButton url='https://github.com' popup='true' />
          <GitHubButton url='https://github.com' popup='true' />
          <GoogleButton url='https://google.com' popup='true' />
          <MicrosoftButton url='https://microsoft.com' popup='true' />
          <TwitterButton url='https://twitter.com' popup='true' />
        </div>

        {form}
      </div>
    </div>
  );
};