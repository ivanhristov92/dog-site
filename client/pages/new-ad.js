import Head from 'next/head'
import Link from 'next/link'
import Nav from "../components/navigation";

export default ()=>(
  <div className="container">


    <Head>
      <title>New Ad</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
            integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous" />

    </Head>


    <Nav/>

    <form>

      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" className="form-control" id="title" placeholder="title" />
          <small className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>

      <div className="form-group">
        <label htmlFor="breed">breed</label>
        <input type="text" className="form-control" id="breed" placeholder="breed" />
          <small className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>

      <div className="form-group">
        <label htmlFor="color">Color</label>
        <input type="text" className="form-control" id="color" />
          <small className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>

      <div className="form-group">
        <label htmlFor="number-of-dogs">Number of dogs</label>
        <input type="number" className="form-control" id="number-of-dogs" />
          <small className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>

      <div className="form-group">
        <label>Sex</label>

        <div className="form-check">
          <input className="form-check-input" type="radio" name="sex" id="male" value="male" />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="sex" id="female" value="female" />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
        </div>
      </div>


      <div className="form-group">
        <label htmlFor="city">city</label>
        <input type="text" className="form-control" id="city" />
          <small className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>

      <div className="form-group">
        <label htmlFor="features">features</label>
        <textarea className="form-control" id="features"></textarea>
        <small className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>

      <div className="form-group">
        <label htmlFor="info">info</label>
        <textarea className="form-control" id="info"></textarea>
        <small className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>

      <div className="form-group">
        <label htmlFor="images">images</label>
        <input type="file" className="form-control" id="images" />
          <small className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>

      <div className="form-group">
        <label htmlFor="email">email</label>
        <input type="email" className="form-control" id="email" />
          <small className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>


      <div className="form-group">
        <label htmlFor="phone">phone</label>
        <input type="tel" className="form-control" id="phone" />
          <small className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>

    </form>
  </div>
)
