import { Given, Then } from '@cucumber/cucumber';

Given('I start my Vibe Coding journey', function () {
  // This step can be used to set up initial state
  // For now, we just log to the console
  console.log('Vibe Coding journey started!');
});

Then('I should see a welcome message', function () {
  // In a real system, you would check for output or state
  // For now, we just log to the console
  console.log('Welcome to Vibe Coding!');
});
