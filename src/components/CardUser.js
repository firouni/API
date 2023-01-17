import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function CardUser ({user}) {
    console.log('userelement',user)
  return (
    <div className='card'>
    <Card style={{ width: '18rem' }} className='cdcontent' >
      <Card.Body>
        <Card.Title>{user.id}</Card.Title>
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.username}</Card.Subtitle>
        <Card.Text>{user.city}</Card.Text>
        <Card.Link href="#">{user.phone}</Card.Link>
        <Card.Link href="#">{user.email}</Card.Link>
      </Card.Body>
    </Card>
    </div>
  )
};

export default CardUser