import styled from 'styled-components';

const SliderContainer = styled.label`
    width: 2.5em;
    height: 1.5em;
  
    margin-left: 2.5em;
  
    position: relative;
  
    display: inline-block;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: #eee;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  border-radius: 1em;

  input:checked + & {
    background-color: #333;

    :before {
      //noinspection CssUnknownTarget
      content: url("images/newmoon.png");

      //noinspection CssUnknownProperty
      -webkit-transform: translateX(1em);
      -ms-transform: translateX(1em);
      transform: translateX(1em);
    }
  }

  :before {
    width: 1em;
    height: 1em;

    position: absolute;

    left: 0.25em;
    bottom: 0.25em;

    //noinspection CssUnknownTarget
    content: url("images/sun.png");
    padding: 0;

    -webkit-transition: 0.4s;
    //top: 0.25em;
    transition: 0.4s;

    border-radius: 50%;
  }
`;

const StyledInput = styled.input`
    width: 0;
    height: 0;
  
    opacity: 0;
`;

export const ThemeSwitcher = ({ isDarkMode, setDarkMode }) => (
    <SliderContainer>
        <StyledInput
            type="checkbox"
            checked={ isDarkMode }
            onChange={ event => setDarkMode(event.target.checked) } />
        <Slider />
    </SliderContainer>
);