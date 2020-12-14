import React from 'react';
import { Feature, OptForm } from '../components';
const Home = () => {
    return (
        <>
          <OptForm>
            <div style={{ position: 'absolute', top: '16px', left: '50%'}}>
                <OptForm.ImgLogo src="images/ld-edu-logo.png" alt="logo"/>
            </div>
            <OptForm.WrapperForm>
                <OptForm.Form>
                    <OptForm.ImageWrapper>
                        <img src="images/person1.svg" alt="hello" />
                    </OptForm.ImageWrapper> 
                    <OptForm.WrapperInput>
                        <OptForm.Span>Tên Đăng nhập</OptForm.Span>
                        <OptForm.Input />                
                    </OptForm.WrapperInput>  
                    <OptForm.Break /> 
                    <OptForm.WrapperInput>
                        <OptForm.Span>Mật khẩu</OptForm.Span>
                        <OptForm.Input type="password"/>                
                    </OptForm.WrapperInput>  

                    <Feature.WrapperCenter>
                        <OptForm.Button>
                            Chơi ngay
                            <img src="images/ic_Play.svg" alt="play"/>
                        </OptForm.Button>                        
                    </Feature.WrapperCenter>
                    <Feature.WrapperCenter>
                        <OptForm.Text>
                            Đăng kí ngay?
                        </OptForm.Text>                       
                    </Feature.WrapperCenter>
                </OptForm.Form>                
            </OptForm.WrapperForm>

          </OptForm>      
        </>
    )
}

export default Home
