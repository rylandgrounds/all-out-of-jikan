 import React, {useRef} from 'react'
 import {Form, Card, Button} from 'react-bootstrap'
 export default function Signup() {
     const emailRef = useRef()
     const passwordRef = useRef()
     const passwordConfirmRef = useRef()
     return (
         <>
             <Card>
                 <Card.Body>
                     <h2 className="text-center mb-4">Sign Up</h2>
                     <Form>
                         <Form.Group id="email">
                             <Form.Label>Email</Form.Label>
                             <Form.Control type="email" required ref={emailRef}/>
                         </Form.Group>
                         <Form.Group id="password">
                             <Form.Label>Passowrd</Form.Label>
                             <Form.Control type="password" required ref={passwordRef}/>
                         </Form.Group>
                         <Form.Group id="password-confirm">
                             <Form.Label>Password Confirmation</Form.Label>
                             <Form.Control type="password" required ref={passwordConfirmRef}/>
                         </Form.Group>
                         <Button className="w-100" type="submit">Sign Up</Button>
                     </Form>
                 </Card.Body>
             </Card>
             <div className="w-100 text-center mt-2">
                Already have an account? Log In
             </div>
         </>
     )
 }
 