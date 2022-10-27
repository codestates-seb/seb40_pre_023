import DBox from "../DBox/DBox";
import { Wrapper, Info, Footer, GetTeams, Container  } from "./style";
import { Link } from 'react-router-dom';

function SideInputbox(){
    const signupMessage = ["Get unstuck — ask a question"
    , "Unlock new privileges like voting and commenting"
    , "Save your favorite tags, filters, and jobs",
    "Earn reputation and badges"]
    
    return (
        <Container>
        <Wrapper>
            <Info>
            {signupMessage.map((text) => (<DBox text = {text} />))}
            </Info>
        </Wrapper>
        <Footer>
            <div>Collaborate and share knowledge with a private group for FREE.</div>
        </Footer>
        <GetTeams>
        <Link to="/">Get Stack Overflow for Teams free for up to 50 users.</Link>
        </GetTeams>
        </Container>
    );
}

export default SideInputbox ;