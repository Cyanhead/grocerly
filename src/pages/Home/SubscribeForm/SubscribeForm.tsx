import { Send } from 'lucide-react';
import { Button } from '../../../components';
import { EmailInput, Form, Group } from './SubscribeForm.styled';
import { useState } from 'react';

function SubscribeForm() {
  // NOTE: form data is not being sent anywhere

  const [email, SetEmail] = useState();

  return (
    <Form data-testid="SubscribeForm" aria-label="subscribe-form">
      <Group>
        <Send size={18} color="grey" />
        <EmailInput
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          aria-label="email"
          placeholder="Enter your email address"
          value={email}
          onChange={() => SetEmail(email)}
          required
        />
      </Group>
      <Button type="submit">Subscribe</Button>
    </Form>
  );
}

export default SubscribeForm;
