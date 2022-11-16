import React from 'react';
import Button from './utilities/Button/Button';
import Input from './utilities/input/Input';
const anyFunction = () => console.log('im an action');
const aUtilities = () => {
  return (
    <div>
      <Button color='primary' text='hazne click' />
      <Button color='info' text='click' />
      <Button color='light' text='text' action={anyFunction} />
      <Input
        placeholder='mensaje'
        width='50%'
        label='Name'
        type='checkbox'
        value='somevalue'
      />
      {/* width=maxWidth placeholder=message in the input label=will add a label to
      the input with the name pass through it type=type of input (checkbox,
      submit, button) is text by default value=is the input value */}
    </div>
  );
};

export default aUtilities;
