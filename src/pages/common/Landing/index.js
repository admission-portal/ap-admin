import './style.css';
import { useHistory } from 'react-router-dom';
import { AppHeader } from '../../../components';
export default function Landing() {
    const history  = useHistory();
    const hostedUI='https://handlemyadmissions.auth.us-east-1.amazoncognito.com/login?client_id=4v9s0rnu3ggaauagcikbl2b46l&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=http://localhost:3000/Interm/'
    return (
        <div className="Landing">
            <AppHeader />
            <section className="showcase">
                <img src="/assests/build.jpg" alt='...' />
                <div className="overlay"></div>
                <div className="text">
                    <h2>adMISSION Portal </h2>
                    <h3>admit with ease</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</p>

                    {/* <button onClick={() => history.push('/s')}>LETS GO</button> */}
                    <a href={hostedUI}>LETS GO!</a>
                </div>
            </section>
        </div>
    );
}
