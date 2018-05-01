import React from 'react'
import {Button, Checkbox, Form,  Grid} from 'semantic-ui-react'

export const Register = () => (
    <Grid
        textAlign='center'
        style={{
        height: '100%',
        
    }}
        verticalAlign='middle'>
        <Grid.Column style={{
            maxWidth: 600
        }}>
            <Form >
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name'/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name'/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions'/>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>

        </Grid.Column>

    </Grid>
)