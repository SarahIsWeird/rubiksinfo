import React, { useCallback , useEffect , useState } from 'react'
import styled, { useTheme } from 'styled-components';
import { getComments , newComment } from "../requests/comments"
import { useCookies } from 'react-cookie';
import { ErrorParagraph , FormButton , FormField } from './form/form';
import { Input } from './form/input'
import { useLocation } from 'react-router'

const TimeStamp = styled.h6`
    margin-top: 0;
`;

const Username = styled.h4`
    margin-bottom: 0; 
`;

const CommentText = styled.p`
    margin: 0;
    word-break: break-word;
    width: 50vw;
`;

const Comment = styled.div`
    padding: 1em;
    margin-bottom: 1em;
`;

const NewCommentForm = styled.form`
    margin-bottom: 1em;
`;

const CommentSection = styled.div`
    overflow: auto;
    max-height: 40vh;
`;

const NewCommentBox = ({ value, setValue, onSubmit, isValid }) => (
    <NewCommentForm onSubmit={onSubmit}>
        <FormField>
            <span>Nachricht</span><br/>
            <Input
                value={ value }
                setValue={ setValue }
                isValid={ isValid }
            />
            { !isValid && <EmptyCommentError /> }
        </FormField>
        <FormButton type="submit">
            Kommentar erstellen
        </FormButton>
    </NewCommentForm>
);

const NotLoggedInMessage = () => (
    <form>
        <FormField>
            <ErrorParagraph>Um Kommentare schreiben zu k&ouml;nnen, musst du dich einloggen.</ErrorParagraph>
        </FormField>
    </form>
);

const EmptyCommentError = () => (
    <ErrorParagraph>
        Der Kommentar darf nicht leer sein.
    </ErrorParagraph>
);

const canRenderComments = (currentLocation) => ['/geschichte', '/arten', '/loesen'].includes(currentLocation.pathname);

const getTimeDifference = (commentTime) => {
    let currentTime = new Date();
    let timeBetween = Math.floor((currentTime - commentTime) / 1000);
    let result = timeBetween + (timeBetween === 1 ? " Sekunde" : " Sekunden");
    if (timeBetween >= 60) {
        timeBetween = Math.floor(timeBetween / 60);
        result = timeBetween + (timeBetween === 1 ? " Minute" : " Minuten");
        if (timeBetween >= 60) {
            timeBetween = Math.floor(timeBetween / 60);
            result = timeBetween + (timeBetween === 1 ? " Stunde" : " Stunden");
            if (timeBetween >= 24) {
                timeBetween = Math.floor(timeBetween / 24);
                result = timeBetween + (timeBetween === 1 ? " Tag" : " Tagen");
                if (timeBetween >= 365) {
                    timeBetween = Math.floor(timeBetween / 365);
                    result = timeBetween + (timeBetween === 1 ? " Jahr" : " Jahren");
                }
            }
        }
    }
    return result;
};

export const Comments = () => {
    const [commentList, setCommentList] = useState(null);
    const [isNewCommentInvalid, setNewCommentInvalid] = useState(false);
    const [cookies, ,] = useCookies(['username']);
    const [newCommentText, setNewCommentText] = useState('');
    const currentLocation = useLocation();
    const currentTheme = useTheme();

    const loadComments = useCallback(async () => {
        if (!canRenderComments(currentLocation)) {
            return null;
        }

        const response = await getComments(currentLocation.pathname);

        if (!response) {
            setCommentList(null)
            return
        }

        const comments = response.comments;
        let commentComponents;

        if(comments) {
            commentComponents = comments.map(comment => {
                    let style = {};
                    if (cookies['username'] === comment.username) {
                        style = {
                            backgroundColor: currentTheme.ownCommentBackgroundColor
                        };
                    }

                    let result = getTimeDifference(new Date(comment.creationDate));

                    return (
                        <Comment style={style} key={comment.commentId}>
                            <div>
                                <Username>{comment.username}</Username>
                                <TimeStamp>Vor {result}</TimeStamp>
                            </div>
                            <div id="commentBody">
                                <CommentText>
                                    {comment.text}
                                </CommentText>
                            </div>
                        </Comment>
                    );
                }
            )
        }
        setCommentList(commentComponents);
    }, [currentLocation, cookies, currentTheme]);

    const createNewComment = async (event) => {
        event.preventDefault();
        const isCommentValid = newCommentText !== '';
        setNewCommentInvalid(!isCommentValid)

        if (!isCommentValid) {
            return;
        }

        setNewCommentText('');
        await newComment(newCommentText, currentLocation.pathname, cookies['username']);

        await loadComments();
    };

    useEffect(loadComments, [loadComments, currentLocation]);

    if (!canRenderComments(currentLocation)) {
        return null;
    }

    const commentBox = (
        <>
            <NewCommentBox
                value={ newCommentText }
                setValue={ setNewCommentText }
                isValid={ !isNewCommentInvalid }
                onSubmit={ createNewComment } />
        </>
    );

    return (
        <div>
            <h2>Kommentare</h2>
            <div>
                { cookies['session'] ? commentBox : <NotLoggedInMessage/> }
            </div>
            <CommentSection>
                {commentList}
            </CommentSection>
        </div>
    );
};