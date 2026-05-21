import { useEffect, useState } from 'react'
import profileImage from '../assets/images/pp.png'
import '../styles/Title.css'

const Title = () => {
    const fullText = `Hello, je suis Axelle Castandet,
Développeuse FullStack.
Bienvenue sur mon portfolio !`

    const [displayedText, setDisplayedText] = useState('')
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index < fullText.length) {
            const timer = setTimeout(() => {
                setDisplayedText(prev => prev + fullText[index])
                setIndex(prev => prev + 1)
            }, 40) // vitesse d’apparition

            return () => clearTimeout(timer)
        }
    }, [index, fullText])

    return (
        <section className="title">
            <div className="title_text">
                <p className="pixel-text">
                    {displayedText}
                </p>
            </div>

            <div className="title_image">
                <img src={profileImage} alt="Photo profil" />
            </div>
        </section>
    )
}

export default Title