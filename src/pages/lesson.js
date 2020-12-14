import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import lessonData from '../data/lesson.json'
import styled from 'styled-components'
import { GrClose } from 'react-icons/gr'
import ImageChoice from '../components/imageChoice/ImageChoice'
import TextInput from '../components/textInput/TextInput'
import TextChoice from '../components/textChoice/TextChoice'
import { Link } from 'react-router-dom'
import { Button, Result } from '../components'
import Egg from '../components/egg'



const Styles = styled.div`
    color: #3c3c3c;
    font-size: 19px;
    min-height: 100vh;
    position: relative;
    .overlay{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        overflow-x: hidden;
        z-index: 3;
    }
    .image-choice {
        /* Layout */
        width: 100%;
        &-wrapper{
            min-height: 500px;
            overflow-x: hidden;
            width: 100%;
            display: flex;
            flex-direction: column;
                /* justify-content: space-around; */
        }

        /* Header  */
        &-close{
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding: 40px;
            svg{
                opacity: 0.3;
                width: 30px;
                height: 30px;
            }
            @media (min-width: 1280px) {
                margin-right: 200px;
             }
        }
        &-container{
        }
        &-answers-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            margin: 30px 0;
            min-height: 360px;
            @media (min-width: 640px) {
                margin-bottom: 80px;
             }
        }
        &-title{
            font-size: 30px;
            color: #3d3d3d;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Image-choice */

        &-answer-unit {
            user-select: none;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            max-width: 182px;
            max-height: 288px;
            color: #4b4b4b;
            font-weight: 600;
            font-size: 19px;
            padding: 12px;
            margin: 6px;
            border-width: 2px 2px 4px;
            border-style: solid;
            border-radius: 16px;
            transform: translateZ(0);
            transition: filter .2s;
            background-color: #fff;
            border-color: #e5e5e5;
            &:hover{
                background: #dee;
                border-width: 4px 2px 2px!important;
            }
        }
        .isChoice{
            border-color: #ad4;
        }
        &-answers-img{
            /* width: 100%;
            height: 100%; */
            img{
                width: 120px;
            }
            @media (min-width: 640px) {
                img{
                width: 100%;
            }
            }
        }
        
        }

        /* Btn  */

        .btn-check-wrapper{
            display: flex;
            align-items: center;
            justify-content: center;
            background: #fff;
            border-top: 2px solid #e5e5e5;
            padding-top: 24px; 
            max-height: 140px;
            @media (min-width: 640px) {
                margin-top: 0px;
                justify-content: space-around;
            }
        }

        .btn-check {
            margin: 0 12px;
            /* cursor: pointer; */
            border-color: transparent;
            border-top-left-radius: 18px;
            border-top-right-radius: 18px;
            padding: 13px 16px;
            background: none;
            border-radius: 16px;
            border-width: 4px 0 0;
            color: #afafaf;
            min-width: 150px;
            width: 100%;
            font-size: 15px;
            line-height: 20px;
            display: inline-block;
            text-align: center;
            vertical-align: middle;
            white-space: nowrap;
            font-weight: 700;
            letter-spacing: .8px;
            text-transform: uppercase;
            outline: none;
            border: none;
            &:hover{
                /* background-color: #58cc02; */
                color: #fff;
                cursor: pointer;
            }
            @media (min-width: 640px) {
                width: 150px;
            }
        }

        .btn-check-1 {
            display: none;
            cursor: pointer;
            @media (min-width: 640px) {
                display: block;
                &:hover{
                background-color: #ddd;
                color: #a5a5a5;
                }
            }
            }

        /* Text-input */
        .text-input {
            min-height: 360px;
            &-header{
                display: flex;
                align-items: center;
                &-img{
                    align-self: flex-end;
                    flex-shrink: 0;
                    max-width: 120px;
                    width: 30%;
                    padding: 0 20px;
                    img{
                        width: 100%;
                    }
                }
                &-title{
                    position: relative;
                    margin-bottom: 12px;
                    margin-top: 24px;
                    z-index: 150;
                    user-select: none;
                    &-content{
                        font-size: 19px;
                        background-color: #fff;
                        border: 2px solid #e5e5e5;
                        border-radius: 15px;
                        box-sizing: border-box;
                        overflow: visible;
                        padding: 10px 12px;
                    }
                    &-decor{
                        top: calc(50% - 15px);
                        transform: translateY(-50%) rotate(-90deg);
                        left: -13px;
                        margin: 15px 0;
                        height: 10px;
                        overflow: hidden;
                        width: 20px;
                        box-sizing: border-box;
                        position: absolute;
                        &-detail{
                            box-sizing: border-box;
                            position: absolute;
                            background-color: #fff;
                            border: 2px solid #e5e5e5;
                            border-radius: 2px;
                            content: "";
                            height: 14.14427px;
                            left: 50%;
                            transform: rotate(45deg);
                            transform-origin: top left;
                            width: 14.14427px;
                        }
                    }
                }
            }
            &-content{
                display: flex;
                flex-direction: column;
                min-height: 120px;
                @media (min-width: 640px) {
                    min-height: 130px;
                    width: 640px;
                    margin: 0 auto;
                }
                &-wrapper{
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1;
                    justify-content: center;
                    box-sizing: inherit;
                    textarea {
                        width: 100%;
                        outline: none;
                        flex-grow: 1;
                        resize: none;
                        background-color: #f7f7f7;
                        border-color: #e5e5e5;
                        border-radius: 10px;
                        padding: 10px 12px;
                        border: 2px solid #e5e5e5;
                        color: #3c3c3c;
                        ::placeholder{
                            font-weight: 600;
                            font-size: 19px;
                            color: #a5a5a5;
                        }
                    }
                }
            }
        }

        /* Text-choice */
        .text-choice{
            &-header{
                line-height: 1.4;
                margin: 32px 12px 64px 32px;
                font-weight: 600px; 
            }
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 720px;
            justify-content: center;
            margin: 8px auto;
            &-answers-unit{
                font-size: 19px;
                width: 80%;
                margin: 8px auto;
                line-height: 1.4;
                color: #4b4b4b;
                border-width: 2px 2px 4px;
                padding: 12px 16px;
                cursor: pointer;
                touch-action: manipulation;
                border-radius: 16px;
                user-select: none;
                border-style: solid;
                transform: translateZ(0);
                transition: filter .2s;
                background-color: #fff;
                border-color: #e5e5e5;
                &:hover{
                    border-width: 4px 2px 2px!important;
                    background-color: #f7f7f7;
                }
            }
                &-answers-wrapper{
                    display: flex;
                    align-items: center;
                    justify-content: center
                }
        }

`

function Lesson() {


    

    const history = useHistory();

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    let question = lessonData && lessonData.questions && lessonData.questions[currentQuestionIndex];
    const questionLength = question.length;
    let { correctAnswer } = question;
    const [score, setScore] = useState(0);
    const [correct, setCorrect] = useState(false);
    const [checkBtn, setCheckBtn] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [isChoice, setIsChoice] = useState(0);

    const ignoreQuestion = () => {
        setCurrentQuestionIndex(prev => prev + 1);
        setCheckBtn(false);
    }


    const onClickImageChoice = (answer) => {
        const { id } = answer;
        setIsChoice(id);
        setCheckBtn(true);  
        answer.isCorrect ? setCorrect(true) : setCorrect(false);
    }
    
    const checkResult = () => {
        if(correct) setScore(prev => prev + 10);
        setCheckBtn(false);
        setShowResult(true);
    }

    const nextQuestion = () => {
        setCurrentQuestionIndex(prev => {
            if(prev === question.length - 1) return prev;
            return prev + 1
        });
        if(question && currentQuestionIndex === 2) {
            history.push('/learn');
        }
        setShowResult(false);
        setCorrect(false);
        setIsChoice(0);
    }
    
    const cutSpace = (str) => {
        const arrStr = str.split("");
        const filterStr = arrStr.filter(item => item !== " ");
        const newStr = filterStr.join("");
        return newStr.toLowerCase();
    }

    const handleChangeInput = (e) => {
        setCheckBtn(true);
        question.answers.forEach(answer => {
            if(cutSpace(e.target.value) === cutSpace(answer)) {
                setCorrect(true);
            }
        })

    }


    console.log(correct, score);

    return (
            <Styles>
                    {
                        showResult ?
                        <div className="overlay"></div> : null
                    }
                    
                    <div className="image-choice">
                        <div className="image-choice-container">
                            <div className="image-choice-wrapper">

                                <Link to="/learn">
                                    <div className="image-choice-close">
                                        <GrClose />
                                    </div>
                                </Link>

                                <div className="image-choice-title">
                                    {question.title} ?
                                </div>

                                {/* Done */}
                                <div className="image-choice-answers-wrapper">
                                    {
                                        question.type === "imageChoice" ?
                                        question.answers.map(answer => (
                                                <ImageChoice
                                                    setCheckBtn={setCheckBtn}
                                                    onClickImageChoice={() => onClickImageChoice(answer)}
                                                    key={answer.id}
                                                    answer={answer}
                                                    isChoice={isChoice===answer.id}
                                                    />
                                        )) : (question.type === 'textInput') ? 
                                                <TextInput question={question} handleChange={handleChangeInput}/>
                                        : (question.type === 'textChoice') ? (
                                                <TextChoice 
                                                    question={question}
                                                    onClickImageChoice={onClickImageChoice}
                                                    isChoice={isChoice}
                                                    />
                                        ) : null
                                    }
                                </div>
                                
                                {/* Done */}
                                <div className="btn-check-wrapper">
                                    <Button.Ignore
                                        onClick={ignoreQuestion}
                                    >
                                        Bỏ qua
                                    </Button.Ignore>
                                    <Button.Check
                                        checkBtn={checkBtn}
                                        disabled={!checkBtn}
                                        onClick={checkResult}
                                    >
                                        Kiểm tra
                                    </Button.Check>
                                </div>
                                
                            </div>
                            

                        </div>
                    </div>

                    {/* Done */}
                            {
                                showResult ? (
                                    <Result correct={correct}>
                                        <Result.Wrapper>
                                            <Result.Title>{correct ? "Amazing good job em !": (
                                                <>  
                                                    <div>Đáp án đúng: </div>
                                                    <Result.Text>{correctAnswer}</Result.Text>
                                                </>
                                            )}</Result.Title>
                                            <Result.ButtonNext
                                                correct={correct}
                                                onClick={nextQuestion}
                                            >Tiếp tục</Result.ButtonNext>
                                        </Result.Wrapper>
                                    </Result>
                                ) : null
                            }
            </Styles>
            
    )
}

export default (Lesson)
