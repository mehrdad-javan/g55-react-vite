import React from 'react'

const Header = ({title = "Find your next flight"}) => {
  return (
    <section
        className="p-4 p-md-5 rounded-2 mb-4 shadow-sm position-relative"
        style={{
          background: "linear-gradient(135deg, #0d6efd 0%, #31c2ff 100%)",
        }}
      >
        <div className="position-absolute top-0 end-0 p-3">
          <button type="button" className="btn btn-outline-light btn-sm">
            Dark mode
          </button>
        </div>
        <h1 className="text-white fw-bold mb-1">{title}</h1>
        <p className="text-white-50 mb-0">Fast. Simple. Beautiful.</p>
      </section>
  )
}

export default Header