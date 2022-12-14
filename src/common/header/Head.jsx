import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> 01751959895</label>
            <i className='fa fa-envelope'></i>
            <label> support@quick.com</label>
          </div>
          <div className='right row RText'>
            <label>Your Account</label>
            <label>Need Help?</label>
            <label>Theme FAQ"s</label>
            <label>Cart</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
