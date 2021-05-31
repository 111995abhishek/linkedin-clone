import React,{useState,useEffect} from 'react';
import CreateIcon from '@material-ui/icons/Create';
import './Feed.css';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import EventNoteIcon from '@material-ui/icons/EventNote';
import Post from './Post';
import {db} from './firebase';
import firebase from 'firebase';

function Feed() {
    const [input,setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        db.collection("posts").onSnapshot(snapshot=>
            setPosts(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data(),
            }))
            )
        );
    },[]);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name:"Abhishek singh",
            description:'This is a text',
            message: input,
            photoUrl:'',
            timeStamp:firebase.firestore.FeildValue.serverTimeStamp()
        })

    };

    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon/>
                    <form>
                        <input value={input} onChange={(e)=>setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type="submit">send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#70B5F9"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#70B5F9"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#70B5F9"/>
                </div>
            </div>

            <Post name="Abhishek singh" description="This Is A Test" message="Wow"  />
        </div>
    )
}

export default Feed
