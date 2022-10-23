import styled from 'styled-components';

export const Form = styled.form`
  width: 600px;
  padding: 180px 0 0 150px;
  text-align: left;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  width: 557px;
  height: 93px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  margin-bottom: 8px;
  padding-left: 46px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #2d2d2d;
  }
  :-ms-input-placeholder {
    color: #2d2d2d;
  }
  font: normal 400 18px/180% 'Apercu Arabic Pro';
`;

export const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  box-sizing: border-box;
  width: 557px;
  height: 189px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 30px 15px 15px 46px;
  ::placeholder,
  ::-webkit-textarea-placeholder {
    color: #2d2d2d;
  }
  :-ms-textarea-placeholder {
    color: #2d2d2d;
  }
  font: normal 400 18px/180% 'Apercu Arabic Pro';
  `;
  
  export const Button = styled.button`
  box-sizing: border-box;
  background: #fad34f;
  border-radius: 500px;
  border: none;
  color: #ffffff;
  font: normal 400 18px/18px 'Apercu Arabic Pro';
  padding: 28px 52px;
  :active {
    background: #ffffff;
    color: #fad34f; 
    transition: all .5s;
  }
  `;
  
  export const Title = styled.h1`
  font: normal 400 40px/130% 'Apercu Arabic Pro';
  color: #3e3e3e;
  padding-bottom: 30px;
`;