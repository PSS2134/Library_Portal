import './services.css';
import React from 'react'

function Services() {
  return (
    <div id='3'>
        <h1 className='services-heading'>Services</h1>
        {/* <hr className='line'></hr> */}
        <div className='serve'>
            <div className='service'>
                <img className='service-image' src="https://th.bing.com/th/id/R.3a2a515f8f1970d2a42a67a69d571a20?rik=tNskESW8j1N7og&riu=http%3a%2f%2ffaqs.web-school.in%2fwp-content%2fuploads%2f2017%2f05%2fIssue-Book.jpg&ehk=wMCZU7NnKdpAuI2%2bWBGoGRAqGBF9y2ZAHiVx201pVYk%3d&risl=&pid=ImgRaw&r=0" alt="" height="150px" width="150px" />
                <h3 className='service-heading'>Books Issue</h3>
                <li>Issue books hassle-free from our extensive collection.</li>
                <li>Explore a wide range of genres and authors</li>
            </div>
            <div className='service'>
                <img className='service-image' src="https://th.bing.com/th/id/R.3e136771812f80d1718b95d42d063875?rik=36znjSjMLT52zg&riu=http%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f80000%2fvelka%2fold-books-stacked.jpg&ehk=175HuPv9pHTLrNTDZT3%2bP0PKGi5fYl2set%2bJi1uLwQk%3d&risl=&pid=ImgRaw&r=0" alt="" height="150px" width="150px" />
                <h3 className='service-heading'>Books Add</h3>
                <li>Request a book that is currently not available in our library.</li>
                <li>We will strive to acquire the books you desire.</li>
            </div>
            <div className='service'>
                <img className='service-image' src="https://th.bing.com/th/id/OIP.N9aUpaQ2o-QDfttI1UWhfQHaFc?pid=ImgDet&rs=1" alt="" height="150px" width="150px" />
                <h3 className='service-heading'>View Books</h3>
                <li>Access an extensive online library with a vast collection of books in various genres.</li>
                <li>Read books conveniently as PDFs directly from our website.</li>
            </div>
        </div>
    </div> 
  )
}

export default Services