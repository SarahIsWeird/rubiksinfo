import React from 'react'
import {useState, useEffect} from 'react'
import styled from 'styled-components';
import {getComments, newComment} from "../requests/comments"
import {useCookies} from 'react-cookie';
import {CenteredForm, ErrorParagraph, FormButton, FormField} from './form/form';
import {Input} from './form/input'
import {useLocation} from 'react-router'


const TimeStamp = styled.h6`
    margin-top: 0px;
`

const Username = styled.h4`
    margin-bottom: 0px; 
`

const CommentText = styled.p`
    margin: 0px;
`
const Comment = styled.div`
    padding: 1em;
    margin-bottom: 1em;
    
`
const NewCommentForm = styled.form`
    margin-bottom: 1em;

`

const CommentSection = styled.div`
    overflow: auto;
    max-height: 40vh;
`

const NewCommentBox = ({value, setValue, onSubmit}) => {
    return (
        <NewCommentForm onSubmit={onSubmit}>
            <FormField>
                <span>Nachricht</span><br/>
                <Input
                    value={value}
                    setValue={setValue}
                />
            </FormField>
            <FormButton type="submit">
                Kommentar erstellen
            </FormButton>
        </NewCommentForm>
    )
}

export function Comments({origin}) {
    const [comments, setComments] = useState()
    const [commentList, setCommentList] = useState(null)
    const [cookies, , removeCookie] = useCookies(['username']);
    const [newCommentText, setNewCommentText] = useState('')
    const currentLocation = useLocation()

    const loadComments = async () => {
        const response = await getComments(currentLocation.pathname)
        const comments = response.comments
        const commentComponents = comments.map(comment => {
            let style= {}
            if(cookies['username'] === comment.username) {
                style = {
                    backgroundColor: "#f1f7cb"
                }
            }
            let commentTime = new Date(comment.creationDate)
            let currentTime = new Date()
            console.log(currentTime-commentTime)
            let timeBetween = Math.floor((currentTime - commentTime)/1000/60)
            let Result = timeBetween + (timeBetween === 1 ? " Minute" : " Minuten")
            if(timeBetween >= 60){
                timeBetween = Math.floor(timeBetween/60)
                Result = timeBetween + (timeBetween === 1 ? " Stunde" : " Stunden")
                if(timeBetween >= 24){
                    timeBetween = Math.floor(timeBetween/24)
                    Result = timeBetween + (timeBetween === 1 ? " Tag" : " Tagen")
                    if(timeBetween >= 365){
                        timeBetween = Math.floor(timeBetween/365)
                        Result = timeBetween + (timeBetween === 1 ? " Jahr" : " Jahren")
                    }
                }
            }
                return (
                    <Comment style={style}>
                        <div>
                            <Username>{comment.username}</Username>
                            <TimeStamp>Vor {Result}</TimeStamp>
                        </div>
                        <div id="commentBody">
                            <CommentText>
                                {comment.text}
                            </CommentText>
                        </div>
                    </Comment>
                )
            }
        )
        setCommentList(commentComponents)
    }
    const NotLoggedInMessage = () => {
        return (
            <form>
                <FormField>
                    <ErrorParagraph>Um Kommentare schreiben zu k&ouml;nnen, musst du dich einloggen.</ErrorParagraph>
                </FormField>
            </form>
        )
    }


    const createNewComment = async (e) => {
        e.preventDefault()
        setNewCommentText('')
        await newComment(newCommentText, currentLocation.pathname, cookies['userId'], cookies['username'])
            .then(response => loadComments())
    }

    useEffect(loadComments,[currentLocation])
    if (!['/geschichte', '/arten', '/loesen'].includes(currentLocation.pathname)) {
        return null;
    }

    return (
        <div>
            <h2>Kommentare</h2>
            <div>
                {cookies['userId'] ?
                    <NewCommentBox value={newCommentText} setValue={setNewCommentText} onSubmit={createNewComment}/> :
                    <NotLoggedInMessage/>}
            </div>
            <CommentSection>
                {commentList && commentList}
            </CommentSection>
        </div>
    )
}