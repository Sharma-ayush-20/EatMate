
const Footer = () => {

    const currYear = new Date().getFullYear()
    
  return (
    <div className="footer">
      <p>
        Copyright &copy; {currYear}, Made with ❤️ by <span className="name">Ayush Sharma</span>
      </p>
    </div>
  )
}

export default Footer