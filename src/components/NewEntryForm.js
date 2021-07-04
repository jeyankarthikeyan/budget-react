import React from 'react'
import {Form} from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

const NewEntryForm = () => {
    return(
        <Form unstackable>
        <Form.Group>
          <Form.Input icon='tags' width={12} label='description' placeholder='Fill me' />
          <Form.Input width={4} label='Value' placeholder="100.0" icon="rupee" iconPosition='left' />
        </Form.Group>
        <ButtonSaveOrCancel />
      </Form>
    )
}

export default NewEntryForm