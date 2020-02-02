import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: `#ffdb58`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,

      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav>
        <ul>
          {menuLinks.map(link => (
            <li>
              <Link
                to={link.link}
                style={{
                  color: `black`
                }}
                activeStyle={{
                  fontWeight: `bold`
                }}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
