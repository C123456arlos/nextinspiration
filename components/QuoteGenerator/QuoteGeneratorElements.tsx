import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
export const GradientBackgroundCon = styled.div`
background: linear-gradient(to right, #000046, #1CB5E0);
background-size: 400% 400%;
animation: gradient 6s ease infinite;
height: 100vh;
width: 100vw;
@keyframes gradient{
0%{
background-position:0% 50%;
}
50%{
background-position:100% 50%;
}
100%{
background-posiiton:0% 50%;
}
}
`
export const BackgroundImageOne = styled(Image)`
position:relative;
z-index:1;
margin-left: -120px;
margin-top:-10px;
`
export const BackgroundImageTwo = styled(Image)`
position:fixed;
z-index:1;
right:0px;
bottom:-10px
`
export const FooterCon = styled.div`
width:100vw;
height:50px;
text-align:center;
font-family:'Source Code Pro', monospace;
font-size:15px;
position:absolute;
bottom:0;
color:white;
z-index:99999;
`
export const SlateSpan = styled.span`
color:yellow;
`
export const FooterLink = styled(Link)`
color:white;
`
export const QuoteGeneratorCon = styled.div`
min-height:350px;
min-width:350px;
height:70vh;
width:70vw;
border:2px solid #fffff222;
border-radius: 15px;
top:50%;
left:50%;
transform: translate(-50%, -50%);
position:absolute;
z-index:2;
background: rgba(0,0,70,0.3);
box-shadow:0 8px 32px 0 rgba(31,38, 135, 0.37);
backdrop-filter:blur(20px); 
-webkit-backdrop-filter:blur(20px);
border-radius:10px;
border:1px solid rgba(255, 255, 255, 0.18)
`
export const QuoteGeneratorInnerCon = styled.div`
top:50%;
left:50%;
transform:translate(-50%, -50%);
position:absolute;
width:100%
`
export const QuoteGeneratorTitle = styled.div`
font-family:'Permanent Marker', cursive;
font-size:50px;
text-align:center;
color:white;
padding:0px 20px 0px 20px;
position:relative;
@media only screen and (max-width:600px){
font-size:30px;
}
`
export const QuoteGeneratorSubtitle = styled.div`
color:white;
font-family:'Caveat', cursive;
font-size:35px;
position:relative;
width:100%;
text-align:center;
padding:8px 20px 0px 20px;
@media only screen and(max-width:600px){
font-size:25px;
}
`
export const GenerateQuoteButton = styled.div`
height:100px;
width:300px;
border:2px solid darkgrey;
border-radius:20px;
margin-top:20px;
position:relative;
transition:0.2s all ease-in-out;
cursor:pointer;
top:20px;
margin:auto;
transform-origin:center;
background:rgba(0,0,70,0.3);
box-shadow:0 0px 32px 0 rgba(31, 38, 135, 0.37);
backdrop-filter:blur(20px);
-webkit-backdrop-filter:blur(20px);
border-radius:10px;
border:1px solid rgba(255, 255, 255, 0.18);
&:hover{
filter:brightness(3);
transition:0.2s all ease-in-out;
transform:scale(1.1);
transform-origin:center
}
`
export const GenerateQuoteButtonText = styled.div`
color:white;
font-family:'Caveat', cursive;
font-size:35px;
left:50%;
top:50%;
transform:translate(-50%, -50%);
position:absolute;
width:100%;
text-align:center;
`