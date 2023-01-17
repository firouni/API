import React, {useEffect, useState} from 'react';
import CardUser from './CardUser';
import axios from 'axios';

const ListUser =()=> {
    const [post,setPost]=useState([])
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            console.log('resres',res.data)
            setPost(res.data)
        })
        .catch(err=> {console.log(err)})
    },[])
    return (
        <div>
            {
                post.map((e)=> <CardUser user={e}/>)
            }
        </div>
    )
};

export default ListUser;