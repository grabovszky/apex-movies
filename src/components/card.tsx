import * as React from "react"
import { useSpring, animated } from "react-spring"
import { Link, graphql } from "gatsby"
import { IGatsbyImageData, getImage, GatsbyImage, ImageDataLike } from "gatsby-plugin-image"
import { format, parseISO } from "date-fns"
import { Icon } from "./icon"
import * as styles from "./card.css"

type CardProps = {
  name: string
  link: string
  cover:
    | string
    | {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
  next?: string
  rating: number
  status?: "Returning Series" | "Ended" | "Canceled"
  release: string
  episodes?: number
  seasons?: number
}

const formatDate = (release) => {
  try {
    return format(parseISO(release), `yyyy`)
  } catch {
    return 'no date'
  }
}

const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Card: React.FC<CardProps> = ({ name, link, cover, rating, release }) => {
  const ref = React.useRef()
  const [animatedProps, api] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 400, friction: 30, precision: 0.00001 },
  }))
  const isGatsbyImage = typeof cover !== `string`

  return (
    <animated.div
      className={styles.wrapperStyle}
      data-item="card"
      ref={ref}
      onMouseMove={({ clientX, clientY }) => {
        const x = clientX - (ref.current.offsetLeft - (window.scrollX || window.pageXOffset || document.body.scrollLeft))
        const y = clientY - (ref.current.offsetTop - (window.scrollY || window.pageYOffset || document.body.scrollTop))
        const dampen = 90 // Higher number => less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.05, // Scale
        ]
        api.start({ xys })
      }}
      onMouseLeave={() => {
        api.start({ xys: [0, 0, 1] })
      }}
      style={{ transform: animatedProps.xys.to(trans) }}
    >
      <Link to={link} className={styles.linkStyle}>
        <div className={styles.contentStyle}>
          <h2 className={styles.titleStyle}>
            {name}
          </h2>
          <div style={{ display: `flex` }}>
            <div className={styles.itemStyle}>
              <Icon className={styles.itemIconStyle} name="star" /> <div className={styles.itemTextStyle}>{rating}</div>
            </div>
            <div className={styles.itemStyle}>
              <Icon className={styles.itemIconStyle} name="first" />
              {` `}
              <div className={styles.itemTextStyle}>{formatDate(release)}</div>
            </div>
          </div>
        </div>
        {isGatsbyImage ? (
          <GatsbyImage alt="" image={getImage(cover as ImageDataLike)} />
        ) : (
          <img alt="" loading="lazy" src={cover as string} className={styles.imageStyle} />
        )}
      </Link>
    </animated.div>
  )
}

export default Card

export const fragment = graphql`
  fragment CardCover on PosterPath {
    localFile {
      childImageSharp {
        gatsbyImageData(
          quality: 90
          formats: [AUTO, WEBP, AVIF]
          placeholder: BLURRED
          width: 600
          breakpoints: [360, 450, 600]
        )
      }
    }
  }
`
