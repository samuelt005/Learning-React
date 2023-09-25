import './Banner.css';

interface BannerProps {
    imageSource: string
    altText?: string
}

const Banner = ({ imageSource, altText } :BannerProps) => {
    return (
        <header className="banner">
            <img src={imageSource} alt={altText}/>
        </header>
    )
}

export default Banner