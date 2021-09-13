import {Link} from 'react-router-dom'

import Card from '../Card/Card'

import classes from './CardsContainer.module.css'

const CardsContainer = () => {
    return(
        <div className={classes.body}>
            <Link to='/face_recognition'><Card color='#66a5e8' stack={'React'} appName='Face Recognition' img='https://danya-react-blog.s3.eu-central-1.amazonaws.com/face-recognition/welcome.jpg'/></Link>
            <Link to='/react-blog'><Card color='#005F83' stack={'MERN'} appName='React Blog' img='https://danya-react-blog.s3.eu-central-1.amazonaws.com/homepage.png'/></Link>
            <Link to='/merch'><Card color='#dcd0ff' appName='Merch' stack={'React'} img='https://danya-react-blog.s3.eu-central-1.amazonaws.com/merch/constructing.png'/></Link>
            <Link to='/minesweeper'><Card color='#93ccea' appName='Minesweeper' stack={'JS'} img='https://danya-react-blog.s3.eu-central-1.amazonaws.com/minesweeper/preview.png'/></Link>
            <Link to='/weather'><Card color='#CBD7E4' appName='Wheather' stack={'React'} img='https://danya-react-blog.s3.eu-central-1.amazonaws.com/weather_preview.png'/></Link>
            <Link to='/notes'><Card color='#F4BFCA' appName='Notes' stack={'Js'} img='https://danya-react-blog.s3.eu-central-1.amazonaws.com/Notes/home.png'/></Link>
            <Link to='/paddle'><Card color='#3d3939' appName='Paddle' stack={'Js'} img='https://danya-react-blog.s3.eu-central-1.amazonaws.com/paddle/preview.png'/></Link>
            <Link to='/snake'><Card color='#088F8F' appName='Snake' stack={'Js'} img='https://danya-react-blog.s3.eu-central-1.amazonaws.com/snake/preview.png'/></Link>
            
        </div>
    )
}

export default CardsContainer