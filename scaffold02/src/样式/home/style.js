import styled from 'styled-components'
export const HomeWrapper = styled.div`
font-size:50px;
color:red;
.lun{
    color:blue;
    &:hover{
        color: green; 
    }
}
`
export const HomeSpan = styled.span.attrs({
    scolor: "black"
})`
 font-size: 20px;
 color: ${p => p.color};
`