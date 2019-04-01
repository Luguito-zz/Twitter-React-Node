import React,{useState} from 'react'
import {InputGroup,Button} from 'react-bootstrap'
import axios from 'axios'
import './CreateATweet.scss';

const Tweeting = () =>{
    let [tweet,setTweet] = useState()

    const postTweet = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8080/create-tweet',{
            tweet
        })
        .then(data =>{
            console.log(data)
        })
        .catch(err=>{
            console.log(err)
        })
        e.target.reset();
    }

    return(
    <form onSubmit={postTweet} className="m-form-tweeting">
        <InputGroup className="mb-3">
            <input type="text" placeholder="Tweatea aqui!!!" className="w-input" onChange={(e)=>setTweet(e.target.value)}/>
            <InputGroup.Append>
                <Button variant="outline-secondary" type="submit">Tweet</Button>
            </InputGroup.Append>
        </InputGroup>
    </form>    
    )
}

export default Tweeting;