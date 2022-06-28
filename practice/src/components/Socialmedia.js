import classes from './Socialmedia.module.css';
import socialMedia_1 from '../components/images/social_media_icons-1.svg';
import socialMedia_2 from '../components/images/social_media_icons-2.svg';
import socialMedia_3 from '../components/images/social_media_icons.svg';
import socialMedia_4 from '../components/images/icon.svg';

function Socialmedia(){
    return(
        <div className={classes.Social_icon}>
            <div className={classes.image}>
                <img src={socialMedia_1} alt="facebook" />
                <img src={socialMedia_2} alt="email" />
                <img src={socialMedia_4} alt="Dribble" srcset="" />
                <img src={socialMedia_3} alt="instagram" srcset="" />
            </div>
        </div>
    );
}

export default Socialmedia;